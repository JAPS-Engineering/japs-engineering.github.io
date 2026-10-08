/** Page selections derived from the shared case catalog. */
import { casosCatalogo, fullCaseIds, homeCaseIds, selectCases, caseTeaser } from './casos-destacados';
export type { Caso, CasoDestacado } from './casos-destacados';

const source = Object.values(casosCatalogo);
export const casos = selectCases(fullCaseIds, source);
export const casosDestacados = selectCases(homeCaseIds, source).map(caseTeaser);
