/**
 * English content, assembled with the same shape as the Spanish source so
 * `content('en')` is a drop-in. Each module spreads its Spanish twin and
 * overrides only what a reader sees; data/content.ts asserts parity.
 */
import type { Content } from '../content';
import { casos, casosDestacados, casosEnRedaccion } from './casos';
import { industrias } from './industrias';
import { logos } from './logos';
import {
  asesores,
  creencias,
  equipo,
  historia,
  hitosHistoria,
  partnersCocreacion,
  partnersColaboracion,
  proposito,
} from './nosotros';
import { servicios, serviciosResumen } from './servicios';
import { soluciones } from './soluciones';

export const content: Content = {
  industrias,
  servicios,
  serviciosResumen,
  soluciones,
  casos,
  casosDestacados,
  casosEnRedaccion,
  proposito,
  creencias,
  historia,
  hitosHistoria,
  equipo,
  partnersCocreacion,
  partnersColaboracion,
  asesores,
  logos,
};
