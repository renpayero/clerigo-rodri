import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { APP_PASSWORD, SESSION_SECRET, SESSION_DAYS, SECURE_COOKIES, TRUST_PROXY } from 'astro:env/server';
import { eq } from 'drizzle-orm';
import { db, schema } from '@/db';
import { SESSION_COOKIE, cookieOptions, encodeCookie, newSessionId, passwordMatches } from '@/lib/auth/session';
import { isBlocked, recordAttempt } from '@/lib/auth/rateLimit';

function clientIp(ctx: { request: Request; clientAddress: string }): string {
  if (TRUST_PROXY) {
    const fwd = ctx.request.headers.get('x-forwarded-for');
    if (fwd) return fwd.split(',')[0]!.trim();
  }
  try {
    return ctx.clientAddress;
  } catch {
    return 'unknown';
  }
}

export const auth = {
  login: defineAction({
    accept: 'form',
    input: z.object({
      password: z.string().min(1, 'Ingresá la contraseña'),
      next: z.string().optional(),
    }),
    handler: async (input, ctx) => {
      const ip = clientIp(ctx);
      const block = isBlocked(ip);
      if (block.blocked) {
        throw new ActionError({
          code: 'TOO_MANY_REQUESTS',
          message: `Demasiados intentos. Probá de nuevo en ${Math.ceil((block.retryAfterSeconds ?? 60) / 60)} min.`,
        });
      }
      const ok = passwordMatches(input.password, APP_PASSWORD);
      recordAttempt(ip, ok);
      if (!ok) {
        throw new ActionError({ code: 'UNAUTHORIZED', message: 'Contraseña incorrecta' });
      }
      const id = newSessionId();
      const now = new Date();
      await db().insert(schema.sessions).values({
        id,
        createdAt: now,
        lastSeenAt: now,
        expiresAt: new Date(now.getTime() + SESSION_DAYS * 86_400_000),
        userAgent: ctx.request.headers.get('user-agent')?.slice(0, 200) ?? null,
      });
      ctx.cookies.set(SESSION_COOKIE, encodeCookie(id, SESSION_SECRET), cookieOptions(SECURE_COOKIES, SESSION_DAYS * 86_400));
      const next = input.next && input.next.startsWith('/') && !input.next.startsWith('//') ? input.next : '/';
      return { ok: true, next };
    },
  }),

  logout: defineAction({
    accept: 'form',
    handler: async (_input, ctx) => {
      const id = ctx.locals.session?.id;
      if (id) await db().delete(schema.sessions).where(eq(schema.sessions.id, id));
      ctx.cookies.delete(SESSION_COOKIE, { path: '/' });
      return { ok: true };
    },
  }),
};
