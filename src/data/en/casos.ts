/** Page selections derived from the shared case catalog. */
import { casosCatalogo } from './casos-destacados';
import { fullCaseIds, homeCaseIds, selectCases, caseTeaser } from '../casos-destacados';

const source = Object.values(casosCatalogo);
export const casos = selectCases(fullCaseIds, source);
export const casosDestacados = selectCases(homeCaseIds, source).map(caseTeaser);
