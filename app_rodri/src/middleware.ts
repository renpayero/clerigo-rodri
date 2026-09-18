import { defineMiddleware } from 'astro:middleware';
import { SESSION_SECRET, SESSION_DAYS, SECURE_COOKIES } from 'astro:env/server';
import { eq } from 'drizzle-orm';
import { db, schema } from '@/db';
import { SESSION_COOKIE, decodeCookie, encodeCookie, cookieOptions } from '@/lib/auth/session';

const PUBLIC_EXACT = new Set(['/login', '/manifest.webmanifest', '/favicon.svg', '/api/health', '/_actions/auth.login', '/_actions/auth.guest']);
const PUBLIC_PREFIXES = ['/_astro/', '/icons/', '/_actions/auth.login', '/_actions/auth.guest'];

/** Respuesta de error con la forma que entiende el cliente de astro:actions. */
function actionError(status: number, code: string, message: string) {
  return new Response(JSON.stringify({ type: 'AstroActionError', code, message }), { status, headers: { 'content-type': 'application/json' } });
}

function isPublic(pathname: string) {
  if (PUBLIC_EXACT.has(pathname)) return true;
  return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p));
}

const TOUCH_INTERVAL_MS = 10 * 60 * 1000;

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  context.locals.session = null;

  const raw = context.cookies.get(SESSION_COOKIE)?.value;
  const id = decodeCookie(raw, SESSION_SECRET);
  if (id) {
    const now = new Date();
    const [row] = await db().select().from(schema.sessions).where(eq(schema.sessions.id, id)).limit(1);
    if (row && row.expiresAt > now) {
      context.locals.session = { id: row.id, role: row.role === 'guest' ? 'guest' : 'owner' };
      if (now.getTime() - row.lastSeenAt.getTime() > TOUCH_INTERVAL_MS) {
        const expiresAt = new Date(now.getTime() + SESSION_DAYS * 86_400_000);
        await db().update(schema.sessions).set({ lastSeenAt: now, expiresAt }).where(eq(schema.sessions.id, id));
        context.cookies.set(SESSION_COOKIE, encodeCookie(id, SESSION_SECRET), cookieOptions(SECURE_COOKIES, SESSION_DAYS * 86_400));
      }
    } else if (raw) {
      context.cookies.delete(SESSION_COOKIE, { path: '/' });
    }
  }

  // Invitado: ve todo, no edita. Solo puede cerrar su sesión.
  if (context.locals.session?.role === 'guest' && context.request.method !== 'GET' && context.request.method !== 'HEAD' && pathname !== '/_actions/auth.logout') {
    if (pathname.startsWith('/_actions/') || pathname.startsWith('/api/')) return actionError(403, 'FORBIDDEN', 'Modo invitado: podés mirar, pero no cambiar nada.');
    return new Response('Modo invitado: solo lectura', { status: 403 });
  }

  if (context.locals.session || isPublic(pathname)) {
    return next();
  }

  if (pathname.startsWith('/_actions/') || pathname.startsWith('/api/')) {
    return actionError(401, 'UNAUTHORIZED', 'Sesión requerida');
  }

  const next_ = encodeURIComponent(pathname + context.url.search);
  return context.redirect(`/login?next=${next_}`, 302);
});
