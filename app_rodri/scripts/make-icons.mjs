// Genera los iconos PNG de la PWA (cruz de sanador, monocromo) sin dependencias.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';

const DARK = [20, 20, 20];
const LIGHT = [251, 251, 251];

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(size, pixel) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixel(x, y);
      const o = y * (size * 4 + 1) + 1 + x * 4;
      raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; raw[o + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** Cruz centrada. pad = margen relativo del fondo (0 = borde a borde). */
function icon(size, { rounded, pad }) {
  const r = rounded ? size * 0.22 : 0;
  const inset = size * pad;
  const inner = size - inset * 2;
  const arm = inner * 0.16;          // grosor de la cruz
  const len = inner * 0.56;          // largo de la cruz
  const c = size / 2;
  const cr = inner * 0.045;          // radio de las puntas
  const inRoundRect = (x, y, x0, y0, w, h, rad) => {
    if (x < x0 || y < y0 || x >= x0 + w || y >= y0 + h) return false;
    const dx = Math.max(x0 + rad - x, x - (x0 + w - rad), 0);
    const dy = Math.max(y0 + rad - y, y - (y0 + h - rad), 0);
    return dx * dx + dy * dy <= rad * rad;
  };
  return png(size, (x, y) => {
    const px = x + 0.5, py = y + 0.5;
    if (!inRoundRect(px, py, 0, 0, size, size, r)) return [0, 0, 0, 0];
    const v = inRoundRect(px, py, c - arm / 2, c - len / 2, arm, len, cr);
    const h = inRoundRect(px, py, c - len / 2, c - arm / 2, len, arm, cr);
    return v || h ? [...LIGHT, 255] : [...DARK, 255];
  });
}

mkdirSync('public/icons', { recursive: true });
writeFileSync('public/icons/icon-192.png', icon(192, { rounded: true, pad: 0.1 }));
writeFileSync('public/icons/icon-512.png', icon(512, { rounded: true, pad: 0.1 }));
writeFileSync('public/icons/maskable-512.png', icon(512, { rounded: false, pad: 0.2 }));
writeFileSync('public/icons/apple-touch-icon.png', icon(180, { rounded: false, pad: 0.1 }));
console.log('Iconos generados en public/icons/');
