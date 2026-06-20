import { pickLocalized } from './i18n';

export const WIZARD_OPTIONS = {
  "level": [
    {
      "id": "elite",
      "label": {
        "tr": "Elit kulÃ¼p",
        "en": "Elite club"
      }
    },
    {
      "id": "mid",
      "label": {
        "tr": "Orta seviye",
        "en": "Mid-table"
      }
    },
    {
      "id": "lower",
      "label": {
        "tr": "Alt lig",
        "en": "Lower league"
      }
    }
  ],
  "budget": [
    {
      "id": "low",
      "label": {
        "tr": "DÃ¼ÅŸÃ¼k bÃ¼tÃ§e",
        "en": "Low budget"
      }
    },
    {
      "id": "medium",
      "label": {
        "tr": "Dengeli bÃ¼tÃ§e",
        "en": "Balanced budget"
      }
    },
    {
      "id": "high",
      "label": {
        "tr": "YÃ¼ksek bÃ¼tÃ§e",
        "en": "High budget"
      }
    }
  ],
  "style": [
    {
      "id": "youth",
      "label": {
        "tr": "GenÃ§ geliÅŸtirme",
        "en": "Youth development"
      }
    },
    {
      "id": "rebuild",
      "label": {
        "tr": "Rebuild",
        "en": "Rebuild"
      }
    },
    {
      "id": "tactical",
      "label": {
        "tr": "Taktik projesi",
        "en": "Tactical project"
      }
    },
    {
      "id": "moneyball",
      "label": {
        "tr": "Moneyball",
        "en": "Moneyball"
      }
    }
  ],
  "difficulty": [
    {
      "id": "chill",
      "label": {
        "tr": "Rahat",
        "en": "Relaxed"
      }
    },
    {
      "id": "balanced",
      "label": {
        "tr": "Dengeli",
        "en": "Balanced"
      }
    },
    {
      "id": "hard",
      "label": {
        "tr": "ZorlayÄ±cÄ±",
        "en": "Hardcore"
      }
    }
  ]
};

export function optionLabel(group, id, language) {
  const found = (WIZARD_OPTIONS[group] || []).find((item) => item.id === id);
  return found ? pickLocalized(found.label, language) : id;
}

export function buildWizardResult(wizard, language) {
  const tr = language === 'tr';
  const hard = wizard.difficulty === 'hard';
  const lower = wizard.level === 'lower';
  const youth = wizard.style === 'youth';
  const money = wizard.style === 'moneyball';
  const tactical = wizard.style === 'tactical';
  const low = wizard.budget === 'low';

  return {
    title: tr ? (lower ? 'Alt Ligden AkÄ±llÄ± YÃ¼kseliÅŸ' : youth ? 'GenÃ§ Ã‡ekirdek Projesi' : money ? 'Veri OdaklÄ± Transfer Saveâ€™i' : 'KontrollÃ¼ Rebuild Saveâ€™i') : (lower ? 'Smart Lower-League Rise' : youth ? 'Youth Core Project' : money ? 'Data-Led Transfer Save' : 'Controlled Rebuild Save'),
    saveType: tr ? (hard ? 'ZorlayÄ±cÄ± uzun kariyer' : 'Dengeli sezon projesi') : (hard ? 'Hardcore long-term career' : 'Balanced season project'),
    teamProfile: tr ? (lower ? 'MaaÅŸÄ± dÃ¼ÅŸÃ¼k, stadÄ± dolmaya aÃ§Ä±k, altyapÄ± potansiyeli olan kulÃ¼p' : 'YaÅŸ ortalamasÄ± yÃ¼ksek veya kadro dengesi bozuk kulÃ¼p') : (lower ? 'Low-wage club with growth potential' : 'Club with aging squad or poor balance'),
    firstSeason: tr ? (low ? 'BÃ¼tÃ§e temizliÄŸi ve omurga kurma' : 'Kadroyu sadeleÅŸtirip Avrupa/Ã¼st sÄ±ra hedefi') : (low ? 'Clean budget and build a spine' : 'Simplify squad and chase higher finish'),
    first90: tr ? '1) MaaÅŸ fazlalÄ±klarÄ±nÄ± temizle  2) KiralÄ±k/fÄ±rsat oyuncusu bul  3) Taktik riskini azalt  4) Scout filtrelerini kaydet' : '1) Clear wage waste  2) Find loans/value players  3) Reduce tactical risk  4) Save scouting filters',
    transfer: tr ? (money ? 'DeÄŸeri dÃ¼ÅŸÃ¼k, fizik/karar profili gÃ¼Ã§lÃ¼ oyuncular' : youth ? '18-21 yaÅŸ arasÄ± geliÅŸime aÃ§Ä±k omurga oyuncularÄ±' : 'KÄ±sa vadeli iki lider + uzun vadeli iki genÃ§') : (money ? 'Undervalued players with strong physical/decision profile' : youth ? '18-21 core prospects' : 'Two short-term leaders + two long-term prospects'),
    tactic: tr ? (tactical ? 'Topa sahip olma + kontrollÃ¼ pres' : lower ? '4-4-2/4-2-3-1 orta blok, basit roller' : '4-2-3-1 dengeli pres, hÄ±zlÄ± geÃ§iÅŸ') : (tactical ? 'Possession + controlled press' : lower ? '4-4-2/4-2-3-1 mid block, simple roles' : '4-2-3-1 balanced press and transitions')
  };
}

