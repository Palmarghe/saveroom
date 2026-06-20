import { pickLocalized } from './i18n';

export const WIZARD_OPTIONS = {
  "level": [
    {
      "id": "elite",
      "label": {
        "tr": "Elit kulüp",
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
        "tr": "Düşük bütçe",
        "en": "Low budget"
      }
    },
    {
      "id": "medium",
      "label": {
        "tr": "Dengeli bütçe",
        "en": "Balanced budget"
      }
    },
    {
      "id": "high",
      "label": {
        "tr": "Yüksek bütçe",
        "en": "High budget"
      }
    }
  ],
  "style": [
    {
      "id": "youth",
      "label": {
        "tr": "Genç geliştirme",
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
        "tr": "Zorlayıcı",
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
    title: tr ? (lower ? 'Alt Ligden Akıllı Yükseliş' : youth ? 'Genç Çekirdek Projesi' : money ? 'Veri Odaklı Transfer Save’i' : 'Kontrollü Rebuild Save’i') : (lower ? 'Smart Lower-League Rise' : youth ? 'Youth Core Project' : money ? 'Data-Led Transfer Save' : 'Controlled Rebuild Save'),
    saveType: tr ? (hard ? 'Zorlayıcı uzun kariyer' : 'Dengeli sezon projesi') : (hard ? 'Hardcore long-term career' : 'Balanced season project'),
    teamProfile: tr ? (lower ? 'Maaşı düşük, stadı dolmaya açık, altyapı potansiyeli olan kulüp' : 'Yaş ortalaması yüksek veya kadro dengesi bozuk kulüp') : (lower ? 'Low-wage club with growth potential' : 'Club with aging squad or poor balance'),
    firstSeason: tr ? (low ? 'Bütçe temizliği ve omurga kurma' : 'Kadroyu sadeleştirip Avrupa/üst sıra hedefi') : (low ? 'Clean budget and build a spine' : 'Simplify squad and chase higher finish'),
    first90: tr ? '1) Maaş fazlalıklarını temizle  2) Kiralık/fırsat oyuncusu bul  3) Taktik riskini azalt  4) Scout filtrelerini kaydet' : '1) Clear wage waste  2) Find loans/value players  3) Reduce tactical risk  4) Save scouting filters',
    transfer: tr ? (money ? 'Değeri düşük, fizik/karar profili güçlü oyuncular' : youth ? '18-21 yaş arası gelişime açık omurga oyuncuları' : 'Kısa vadeli iki lider + uzun vadeli iki genç') : (money ? 'Undervalued players with strong physical/decision profile' : youth ? '18-21 core prospects' : 'Two short-term leaders + two long-term prospects'),
    tactic: tr ? (tactical ? 'Topa sahip olma + kontrollü pres' : lower ? '4-4-2/4-2-3-1 orta blok, basit roller' : '4-2-3-1 dengeli pres, hızlı geçiş') : (tactical ? 'Possession + controlled press' : lower ? '4-4-2/4-2-3-1 mid block, simple roles' : '4-2-3-1 balanced press and transitions')
  };
}
