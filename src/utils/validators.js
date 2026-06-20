import { DEPARTMENTS } from '../data/departments';
import { GUIDES } from '../data/guides';
import { LANGUAGES } from '../data/languages';
import { PALETTES, THEME_IDS } from '../data/themes';

export function validateContentModel() {
  const departmentIds = new Set(DEPARTMENTS.map((item) => item.id));
  const errors = [];

  GUIDES.forEach((guide) => {
    if (!departmentIds.has(guide.cat)) errors.push(`Guide ${guide.id} has unknown department ${guide.cat}`);
    if (!guide.title?.tr || !guide.title?.en) errors.push(`Guide ${guide.id} is missing production title`);
    if (!guide.summary?.tr || !guide.summary?.en) errors.push(`Guide ${guide.id} is missing summary`);
    if (!guide.detail?.tr || !guide.detail?.en) errors.push(`Guide ${guide.id} is missing detail`);
  });

  THEME_IDS.forEach((id) => {
    if (!PALETTES[id]) errors.push(`Theme ${id} is listed but missing from palettes`);
  });

  LANGUAGES.forEach((language) => {
    if (language.quality === 'production' && !['tr', 'en'].includes(language.code)) {
      errors.push(`Unexpected production language: ${language.code}`);
    }
  });

  return { ok: errors.length === 0, errors, guideCount: GUIDES.length, departmentCount: DEPARTMENTS.length, themeCount: THEME_IDS.length };
}
