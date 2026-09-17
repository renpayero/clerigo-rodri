import { createHmac, randomBytes, timingSafeEqual, createHash } from 'node:crypto';

export const SESSION_COOKIE = 'rodri_session';

/** Firma HMAC-SHA256 del id de sesión (hex). */
export function signSessionId(id: string, secret: string): string {
  return createHmac('sha256', secret).update(id).digest('hex');
}

export function newSessionId(): string {
  return randomBytes(32).toString('hex');
}

export function encodeCookie(id: string, secret: string): string {
  return `${id}.${signSessionId(id, secret)}`;
}

/** Devuelve el id de sesión si la firma de la cookie es válida; null si no. */
export function decodeCookie(value: string | undefined, secret: string): string | null {
  if (!value) return null;
  const dot = value.lastIndexOf('.');
  if (dot <= 0) return null;
  const id = value.slice(0, dot);
  const sig = value.slice(dot + 1);
  if (!/^[a-f0-9]{64}$/.test(id) || !/^[a-f0-9]{64}$/.test(sig)) return null;
  const expected = signSessionId(id, secret);
  const a = Buffer.from(sig, 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return id;
}

/** Comparación en tiempo constante de contraseñas (vía hash para igualar longitudes). */
export function passwordMatches(given: string, expected: string): boolean {
  const a = createHash('sha256').update(given).digest();
  const b = createHash('sha256').update(expected).digest();
  return timingSafeEqual(a, b);
}

export function cookieOptions(secure: boolean, maxAgeSeconds: number) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
    secure,
    maxAge: maxAgeSeconds,
  };
}
