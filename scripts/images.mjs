/**
 * Reencoda las fotografías de public/ a WebP con un ancho máximo sensato.
 *
 * Los originales llegaron a 3333px y 4754px de ancho — cuatro veces lo que
 * cualquier viewport llega a mostrar — y pesaban 1,4 MB y 1,7 MB. Ambos
 * cargan en páginas donde el LCP es justamente una de esas fotos.
 *
 * Se ejecuta a mano — `node scripts/images.mjs` — cuando entra una foto
 * nueva; los .webp resultantes se commitean. Los originales viven en
 * assets/photos/, fuera de public/: son la fuente, no un activo servido, y
 * no tienen por qué viajar en el deploy.
 */
import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Sólo las fotos del equipo. Las de public/hero/ ya vienen muy comprimidas
 * (153, 65 y 90 kB para 2600px de ancho) y pasarlas a WebP las engordaba:
 * 238, 112 y 116 kB. Se quedan en JPG; lo que les faltaba era que el
 * navegador las descubriera antes, y de eso se encarga el preload del LCP
 * en index.astro, no el formato.
 */
/**
 * Los retratos del equipo salen dos veces del mismo original, porque el sitio
 * los mete en dos cajas de proporción incompatible: el hero de /profile es un
 * 4:5 vertical y el avatar de TeamCard es un círculo. Recortando el cuadrado
 * aparte —cabeza y hombros— la cara queda centrada en el círculo; dejando que
 * `object-fit: cover` recorte el 4:5, quedaría en la mitad de arriba con torso
 * debajo.
 *
 * `crop` es la geometría del cuadrado sobre el original, medida a mano foto
 * por foto: la sesión es consistente pero cada cara cae a distinta altura.
 */
const RETRATOS = [
  { slug: 'alonso', crop: '1500x1500+185+168' },
  { slug: 'pablo', crop: '1500x1500+146+20' },
  { slug: 'sergio', crop: '1550x1550+135+131' },
  { slug: 'jean', crop: '1450x1450+171+0' },
];

const TARGETS = [
  { src: 'assets/photos/founders.jpg', out: 'public/team/founders.webp', width: 1600, quality: 82 },
  { src: 'assets/photos/japs.jpg', out: 'public/team/japs.webp', width: 1600, quality: 82 },
  ...RETRATOS.flatMap(({ slug, crop }) => [
    // El original ya viene en 4:5; sólo hay que bajarlo a un ancho servible.
    { src: `assets/photos/${slug}.jpg`, out: `public/team/${slug}.webp`, width: 800, quality: 82 },
    // 320px cubre a 3× los 88px que mide el avatar más grande del diseño.
    {
      src: `assets/photos/${slug}.jpg`,
      out: `public/team/${slug}-avatar.webp`,
      crop,
      width: 320,
      quality: 82,
    },
  ]),
];

const kb = (path) => Math.round(statSync(resolve(ROOT, path)).size / 1024);

for (const { src, out, crop, width, quality } of TARGETS) {
  execFileSync('magick', [
    resolve(ROOT, src),
    ...(crop ? ['-crop', crop, '+repage'] : []),
    '-resize',
    `${width}>`, // '>' : nunca agranda una imagen que ya sea menor
    '-strip',
    '-quality',
    String(quality),
    resolve(ROOT, out),
  ]);
  console.log(`✓ ${out}  ${kb(src)} kB → ${kb(out)} kB`);
}
