/** Logo wall in English: same marks, same order; only the relationship label changes. */
import type { LogoWallItem } from '../../components/ds/types';
import { logos as es } from '../logos';

const relationship: Record<string, string> = { Cliente: 'Client', Partner: 'Partner' };

export const logos: LogoWallItem[] = es.map((logo) => ({
  ...logo,
  relationship: logo.relationship ? (relationship[logo.relationship] ?? logo.relationship) : undefined,
}));
