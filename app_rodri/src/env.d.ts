/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    session: { id: string; role: 'owner' | 'guest' } | null;
  }
}
