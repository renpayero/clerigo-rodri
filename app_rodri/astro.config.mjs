// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import node from '@astrojs/node';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [preact(), mdx()],
  server: { host: true, port: 4321 },
  security: {
    checkOrigin: true,
    // Detrás del proxy (Astro 7 solo honra X-Forwarded-Proto/Host para hosts permitidos): sin esto el
    // chequeo de Origin compara https:// con http:// y las actions devuelven 403. http libre para dev/LAN.
    allowedDomains: [{ hostname: 'rodri.dakodev.com', protocol: 'https' }, { protocol: 'http' }],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
  env: {
    schema: {
      DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      APP_PASSWORD: envField.string({ context: 'server', access: 'secret', min: 8 }),
      SESSION_SECRET: envField.string({ context: 'server', access: 'secret', min: 32 }),
      TRUST_PROXY: envField.boolean({ context: 'server', access: 'public', default: false }),
      SECURE_COOKIES: envField.boolean({ context: 'server', access: 'public', default: false }),
      SESSION_DAYS: envField.number({ context: 'server', access: 'public', default: 30 }),
    },
  },
});
