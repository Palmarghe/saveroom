import { getDepartment } from './departments';
import { pickLocalized } from './i18n';

export const GUIDES = [
  {
    "id": "saveStart_1",
    "cat": "saveStart",
    "pro": false,
    "title": {
      "tr": "Ä°lk Save Kontrol Listesi",
      "en": "First Save Checklist"
    },
    "summary": {
      "tr": "Ä°lk Save Kontrol Listesi, Save BaÅŸlatma departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "First Save Checklist helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Save aÃ§madan Ã¶nce hedef, zorluk, sezon sÃ¼resi ve kulÃ¼p beklentisini netleÅŸtir.",
      "en": "Define goal, difficulty, season length and club expectation before starting."
    },
    "risk": {
      "tr": "Bu kararÄ± Save BaÅŸlatma baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_2",
    "cat": "saveStart",
    "pro": false,
    "title": {
      "tr": "3 Sezonluk Kariyer Hedefi",
      "en": "3-Season Career Objective"
    },
    "summary": {
      "tr": "3 Sezonluk Kariyer Hedefi, Save BaÅŸlatma departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "3-Season Career Objective helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Ä°lk Ã¼Ã§ sezonu ayrÄ± hedeflere bÃ¶lerek saveâ€™in Ã¶mrÃ¼nÃ¼ ve yÃ¶nÃ¼nÃ¼ belirle.",
      "en": "Split the first three seasons into clear objectives."
    },
    "risk": {
      "tr": "Bu kararÄ± Save BaÅŸlatma baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_3",
    "cat": "saveStart",
    "pro": false,
    "title": {
      "tr": "Zorluk Seviyesi SeÃ§imi",
      "en": "Difficulty Level Choice"
    },
    "summary": {
      "tr": "Zorluk Seviyesi SeÃ§imi, Save BaÅŸlatma departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Difficulty Level Choice helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Kariyerin eÄŸlence mi meydan okuma mÄ± olacaÄŸÄ±nÄ± kulÃ¼p profiline gÃ¶re ayarla.",
      "en": "Match difficulty to club profile and desired challenge."
    },
    "risk": {
      "tr": "Bu kararÄ± Save BaÅŸlatma baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_4",
    "cat": "saveStart",
    "pro": true,
    "title": {
      "tr": "Save HikÃ¢yesi OluÅŸturma",
      "en": "Save Story Builder"
    },
    "summary": {
      "tr": "Save HikÃ¢yesi OluÅŸturma, Save BaÅŸlatma departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Save Story Builder helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "KulÃ¼bÃ¼n neden seÃ§ildiÄŸini ve baÅŸarÄ± tanÄ±mÄ±nÄ± hikÃ¢yeleÅŸtir.",
      "en": "Give the save a story and clear definition of success."
    },
    "risk": {
      "tr": "Bu kararÄ± Save BaÅŸlatma baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_5",
    "cat": "saveStart",
    "pro": true,
    "title": {
      "tr": "Ä°lk GÃ¼n YapÄ±lacaklar",
      "en": "Day-One Actions"
    },
    "summary": {
      "tr": "Ä°lk GÃ¼n YapÄ±lacaklar, Save BaÅŸlatma departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Day-One Actions helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "KulÃ¼be girer girmez kontrol edilecek ilk yÃ¶netim adÄ±mlarÄ±nÄ± sÄ±rala.",
      "en": "List the first management checks after taking over."
    },
    "risk": {
      "tr": "Bu kararÄ± Save BaÅŸlatma baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_1",
    "cat": "teamChoice",
    "pro": false,
    "title": {
      "tr": "TakÄ±m SeÃ§erken 7 Kriter",
      "en": "7 Criteria for Choosing a Club"
    },
    "summary": {
      "tr": "TakÄ±m SeÃ§erken 7 Kriter, TakÄ±m SeÃ§imi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "7 Criteria for Choosing a Club helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "KulÃ¼bÃ¼ popÃ¼lerliÄŸe gÃ¶re deÄŸil; bÃ¼tÃ§e, yaÅŸ, hedef, lig ve kadro yapÄ±sÄ±na gÃ¶re deÄŸerlendir.",
      "en": "Evaluate clubs by budget, age, goal, league and squad structure."
    },
    "risk": {
      "tr": "Bu kararÄ± TakÄ±m SeÃ§imi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_2",
    "cat": "teamChoice",
    "pro": false,
    "title": {
      "tr": "Fallen Giant SeÃ§imi",
      "en": "Choosing a Fallen Giant"
    },
    "summary": {
      "tr": "Fallen Giant SeÃ§imi, TakÄ±m SeÃ§imi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Choosing a Fallen Giant helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Eski bÃ¼yÃ¼k kulÃ¼plerde beklenti baskÄ±sÄ±, maaÅŸ yÃ¼kÃ¼ ve sabÄ±r sÃ¼resini Ã¶lÃ§.",
      "en": "Measure pressure, wage burden and patience at fallen giants."
    },
    "risk": {
      "tr": "Bu kararÄ± TakÄ±m SeÃ§imi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_3",
    "cat": "teamChoice",
    "pro": false,
    "title": {
      "tr": "Alt Lig KulÃ¼bÃ¼ Analizi",
      "en": "Lower-League Club Analysis"
    },
    "summary": {
      "tr": "Alt Lig KulÃ¼bÃ¼ Analizi, TakÄ±m SeÃ§imi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Lower-League Club Analysis helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Alt ligde tesis, maaÅŸ bÃ¼tÃ§esi ve oyuncu pazarÄ± eriÅŸimini karar kriteri yap.",
      "en": "Use facilities, wage budget and market access as criteria."
    },
    "risk": {
      "tr": "Bu kararÄ± TakÄ±m SeÃ§imi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_4",
    "cat": "teamChoice",
    "pro": true,
    "title": {
      "tr": "GenÃ§ Kadro Projesi",
      "en": "Young Squad Project"
    },
    "summary": {
      "tr": "GenÃ§ Kadro Projesi, TakÄ±m SeÃ§imi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Young Squad Project helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "GenÃ§ kadrolarda sÃ¼re, liderlik ve sabÄ±r gereksinimini hesapla.",
      "en": "Estimate minutes, leadership and patience needed for young squads."
    },
    "risk": {
      "tr": "Bu kararÄ± TakÄ±m SeÃ§imi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_5",
    "cat": "teamChoice",
    "pro": true,
    "title": {
      "tr": "Lig KurallarÄ± KontrolÃ¼",
      "en": "League Rules Check"
    },
    "summary": {
      "tr": "Lig KurallarÄ± KontrolÃ¼, TakÄ±m SeÃ§imi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "League Rules Check helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "YabancÄ± sÄ±nÄ±rÄ±, kayÄ±t kuralÄ± ve finans yapÄ±sÄ±nÄ± save Ã¶ncesi incele.",
      "en": "Check foreign limits, registration rules and finances before starting."
    },
    "risk": {
      "tr": "Bu kararÄ± TakÄ±m SeÃ§imi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_1",
    "cat": "squadPlan",
    "pro": false,
    "title": {
      "tr": "3 YÄ±llÄ±k Kadro OmurgasÄ±",
      "en": "3-Year Squad Spine"
    },
    "summary": {
      "tr": "3 YÄ±llÄ±k Kadro OmurgasÄ±, Kadro Planlama departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "3-Year Squad Spine helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Her pozisyon iÃ§in omurga, rotasyon ve satÄ±labilir oyuncu ayrÄ±mÄ± yap.",
      "en": "Separate core, rotation and sellable players by position."
    },
    "risk": {
      "tr": "Bu kararÄ± Kadro Planlama baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_2",
    "cat": "squadPlan",
    "pro": false,
    "title": {
      "tr": "YaÅŸ Piramidi KontrolÃ¼",
      "en": "Age Pyramid Check"
    },
    "summary": {
      "tr": "YaÅŸ Piramidi KontrolÃ¼, Kadro Planlama departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Age Pyramid Check helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Kadronun aynÄ± anda yaÅŸlanmasÄ±nÄ± Ã¶nlemek iÃ§in yaÅŸ daÄŸÄ±lÄ±mÄ±nÄ± planla.",
      "en": "Plan age spread to avoid synchronized decline."
    },
    "risk": {
      "tr": "Bu kararÄ± Kadro Planlama baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_3",
    "cat": "squadPlan",
    "pro": false,
    "title": {
      "tr": "Rol Ã‡akÄ±ÅŸmasÄ± Analizi",
      "en": "Role Conflict Analysis"
    },
    "summary": {
      "tr": "Rol Ã‡akÄ±ÅŸmasÄ± Analizi, Kadro Planlama departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Role Conflict Analysis helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "AynÄ± gÃ¶revi isteyen oyuncularÄ±n kadro dengesini bozmasÄ±nÄ± engelle.",
      "en": "Prevent role overlap from breaking squad balance."
    },
    "risk": {
      "tr": "Bu kararÄ± Kadro Planlama baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_4",
    "cat": "squadPlan",
    "pro": true,
    "title": {
      "tr": "SatÄ±lacak Oyuncu Listesi",
      "en": "Sell List Builder"
    },
    "summary": {
      "tr": "SatÄ±lacak Oyuncu Listesi, Kadro Planlama departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Sell List Builder helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "DeÄŸer kaybÄ± baÅŸlamadan satÄ±lacak oyuncularÄ± belirle.",
      "en": "Identify players to sell before value drops."
    },
    "risk": {
      "tr": "Bu kararÄ± Kadro Planlama baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_5",
    "cat": "squadPlan",
    "pro": true,
    "title": {
      "tr": "Rotasyon DerinliÄŸi PlanÄ±",
      "en": "Rotation Depth Plan"
    },
    "summary": {
      "tr": "Rotasyon DerinliÄŸi PlanÄ±, Kadro Planlama departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Rotation Depth Plan helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "YoÄŸun fikstÃ¼rde hangi pozisyonlarÄ±n yedeklenmesi gerektiÄŸini Ã§Ä±kar.",
      "en": "Identify positions needing depth for congested schedules."
    },
    "risk": {
      "tr": "Bu kararÄ± Kadro Planlama baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_1",
    "cat": "transferHub",
    "pro": false,
    "title": {
      "tr": "Transfer Ã–ncelik SÄ±rasÄ±",
      "en": "Transfer Priority Order"
    },
    "summary": {
      "tr": "Transfer Ã–ncelik SÄ±rasÄ±, Transfer Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Transfer Priority Order helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Transferleri isimle deÄŸil, kadro ihtiyacÄ± ve etki sÄ±rasÄ±yla planla.",
      "en": "Plan transfers by squad need and impact, not names."
    },
    "risk": {
      "tr": "Bu kararÄ± Transfer Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_2",
    "cat": "transferHub",
    "pro": false,
    "title": {
      "tr": "Ä°lk Para Hangi Role?",
      "en": "Where Should the First Money Go?"
    },
    "summary": {
      "tr": "Ä°lk Para Hangi Role?, Transfer Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Where Should the First Money Go? helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "KÄ±sÄ±tlÄ± bÃ¼tÃ§ede en yÃ¼ksek etki saÄŸlayan rolÃ¼ seÃ§.",
      "en": "Pick the highest-impact role under budget constraints."
    },
    "risk": {
      "tr": "Bu kararÄ± Transfer Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_3",
    "cat": "transferHub",
    "pro": false,
    "title": {
      "tr": "KiralÄ±k Oyuncu Stratejisi",
      "en": "Loan Player Strategy"
    },
    "summary": {
      "tr": "KiralÄ±k Oyuncu Stratejisi, Transfer Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Loan Player Strategy helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "KiralÄ±klarÄ± kÄ±sa vadeli etki ve maaÅŸ yÃ¼kÃ¼ne gÃ¶re deÄŸerlendir.",
      "en": "Judge loans by short-term impact and wage cost."
    },
    "risk": {
      "tr": "Bu kararÄ± Transfer Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_4",
    "cat": "transferHub",
    "pro": true,
    "title": {
      "tr": "FÄ±rsat Transferi KontrolÃ¼",
      "en": "Value Deal Check"
    },
    "summary": {
      "tr": "FÄ±rsat Transferi KontrolÃ¼, Transfer Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Value Deal Check helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Ucuz oyuncunun gerÃ§ekten ihtiyaÃ§ mÄ± yoksa kalabalÄ±k mÄ± yarattÄ±ÄŸÄ±nÄ± test et.",
      "en": "Test whether a cheap player solves a need or creates clutter."
    },
    "risk": {
      "tr": "Bu kararÄ± Transfer Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_5",
    "cat": "transferHub",
    "pro": true,
    "title": {
      "tr": "Transfer Risk Matrisi",
      "en": "Transfer Risk Matrix"
    },
    "summary": {
      "tr": "Transfer Risk Matrisi, Transfer Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Transfer Risk Matrix helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "YaÅŸ, maaÅŸ, sakatlÄ±k ve uyum riskini tek kararda birleÅŸtir.",
      "en": "Combine age, wage, injury and adaptation risk."
    },
    "risk": {
      "tr": "Bu kararÄ± Transfer Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_1",
    "cat": "scouting",
    "pro": false,
    "title": {
      "tr": "Wonderkid Arama Filtresi",
      "en": "Wonderkid Search Filter"
    },
    "summary": {
      "tr": "Wonderkid Arama Filtresi, Scouting Filtreleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Wonderkid Search Filter helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "GenÃ§ oyuncuyu sadece potansiyelle deÄŸil rol ve sÃ¼re planÄ±yla ara.",
      "en": "Search young players by role and minutes, not only potential."
    },
    "risk": {
      "tr": "Bu kararÄ± Scouting Filtreleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_2",
    "cat": "scouting",
    "pro": false,
    "title": {
      "tr": "Alt Lig Scout Filtresi",
      "en": "Lower-League Scout Filter"
    },
    "summary": {
      "tr": "Alt Lig Scout Filtresi, Scouting Filtreleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Lower-League Scout Filter helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Alt lig iÃ§in fiziksel ve zihinsel taban Ã¶zellikleri Ã¶nceliklendir.",
      "en": "Prioritize baseline physical and mental traits for lower leagues."
    },
    "risk": {
      "tr": "Bu kararÄ± Scouting Filtreleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_3",
    "cat": "scouting",
    "pro": false,
    "title": {
      "tr": "SÃ¶zleÅŸmesi Biten Oyuncular",
      "en": "Expiring Contract Search"
    },
    "summary": {
      "tr": "SÃ¶zleÅŸmesi Biten Oyuncular, Scouting Filtreleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Expiring Contract Search helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "SÃ¶zleÅŸmesi biten oyuncularÄ± maaÅŸ ve rol uyumuyla ele.",
      "en": "Evaluate expiring contracts by wage and role fit."
    },
    "risk": {
      "tr": "Bu kararÄ± Scouting Filtreleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_4",
    "cat": "scouting",
    "pro": true,
    "title": {
      "tr": "Rol BazlÄ± Tarama",
      "en": "Role-Based Search"
    },
    "summary": {
      "tr": "Rol BazlÄ± Tarama, Scouting Filtreleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Role-Based Search helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Her rol iÃ§in aranacak 3-4 kritik Ã¶zelliÄŸi belirle.",
      "en": "Define 3-4 key attributes per role."
    },
    "risk": {
      "tr": "Bu kararÄ± Scouting Filtreleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_5",
    "cat": "scouting",
    "pro": true,
    "title": {
      "tr": "Pazar DeÄŸeri AlarmÄ±",
      "en": "Market Value Alert"
    },
    "summary": {
      "tr": "Pazar DeÄŸeri AlarmÄ±, Scouting Filtreleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Market Value Alert helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "DeÄŸeri dÃ¼ÅŸÃ¼k ama rol uyumu yÃ¼ksek oyuncularÄ± yakala.",
      "en": "Find undervalued players with strong role fit."
    },
    "risk": {
      "tr": "Bu kararÄ± Scouting Filtreleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_1",
    "cat": "wonderkids",
    "pro": false,
    "title": {
      "tr": "GenÃ§ Oyuncu Dakika PlanÄ±",
      "en": "Young Player Minutes Plan"
    },
    "summary": {
      "tr": "GenÃ§ Oyuncu Dakika PlanÄ±, Wonderkid & GeliÅŸim departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Young Player Minutes Plan helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "GeliÅŸimin gerÃ§ek anahtarÄ± olan maÃ§ sÃ¼resini sezon iÃ§ine daÄŸÄ±t.",
      "en": "Plan match minutes as the real driver of development."
    },
    "risk": {
      "tr": "Bu kararÄ± Wonderkid & GeliÅŸim baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_2",
    "cat": "wonderkids",
    "pro": false,
    "title": {
      "tr": "Potansiyel mi Rol Uyumu mu?",
      "en": "Potential or Role Fit?"
    },
    "summary": {
      "tr": "Potansiyel mi Rol Uyumu mu?, Wonderkid & GeliÅŸim departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Potential or Role Fit? helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "YÃ¼ksek potansiyelin taktiÄŸine uymuyorsa deÄŸer kaybedebileceÄŸini gÃ¶r.",
      "en": "Recognize when high potential fails due to poor role fit."
    },
    "risk": {
      "tr": "Bu kararÄ± Wonderkid & GeliÅŸim baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_3",
    "cat": "wonderkids",
    "pro": false,
    "title": {
      "tr": "KiralÄ±k GÃ¶nderme KararÄ±",
      "en": "Loan Decision"
    },
    "summary": {
      "tr": "KiralÄ±k GÃ¶nderme KararÄ±, Wonderkid & GeliÅŸim departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Loan Decision helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "GenÃ§ oyuncunun kalmasÄ± mÄ± kiralanmasÄ± mÄ± gerektiÄŸini belirle.",
      "en": "Decide whether a prospect should stay or go on loan."
    },
    "risk": {
      "tr": "Bu kararÄ± Wonderkid & GeliÅŸim baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_4",
    "cat": "wonderkids",
    "pro": true,
    "title": {
      "tr": "Mentor Grubu Kurma",
      "en": "Mentoring Group Setup"
    },
    "summary": {
      "tr": "Mentor Grubu Kurma, Wonderkid & GeliÅŸim departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Mentoring Group Setup helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "KiÅŸilik ve liderliÄŸi genÃ§ geliÅŸimine baÄŸla.",
      "en": "Connect personality and leadership to development."
    },
    "risk": {
      "tr": "Bu kararÄ± Wonderkid & GeliÅŸim baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_5",
    "cat": "wonderkids",
    "pro": true,
    "title": {
      "tr": "GeliÅŸim Riski KontrolÃ¼",
      "en": "Development Risk Check"
    },
    "summary": {
      "tr": "GeliÅŸim Riski KontrolÃ¼, Wonderkid & GeliÅŸim departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Development Risk Check helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "SakatlÄ±k, sÃ¼re, tesis ve kiÅŸilik riskini birlikte deÄŸerlendir.",
      "en": "Evaluate injury, minutes, facilities and personality together."
    },
    "risk": {
      "tr": "Bu kararÄ± Wonderkid & GeliÅŸim baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_1",
    "cat": "tactics",
    "pro": false,
    "title": {
      "tr": "TaktiÄŸim Neden Ã‡alÄ±ÅŸmÄ±yor?",
      "en": "Why Is My Tactic Failing?"
    },
    "summary": {
      "tr": "TaktiÄŸim Neden Ã‡alÄ±ÅŸmÄ±yor?, Taktik OdasÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Why Is My Tactic Failing? helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Formasyona deÄŸil; rol dengesi, tempo ve savunma yÃ¼ksekliÄŸine bak.",
      "en": "Look beyond formation: roles, tempo and line height."
    },
    "risk": {
      "tr": "Bu kararÄ± Taktik OdasÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_2",
    "cat": "tactics",
    "pro": false,
    "title": {
      "tr": "Pres AyarÄ± KontrolÃ¼",
      "en": "Pressing Setup Check"
    },
    "summary": {
      "tr": "Pres AyarÄ± KontrolÃ¼, Taktik OdasÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Pressing Setup Check helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Pres yoÄŸunluÄŸunu kondisyon, lig seviyesi ve savunma Ã§izgisiyle eÅŸleÅŸtir.",
      "en": "Match pressing to condition, league level and defensive line."
    },
    "risk": {
      "tr": "Bu kararÄ± Taktik OdasÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_3",
    "cat": "tactics",
    "pro": false,
    "title": {
      "tr": "GeÃ§iÅŸ Oyunu PlanÄ±",
      "en": "Transition Plan"
    },
    "summary": {
      "tr": "GeÃ§iÅŸ Oyunu PlanÄ±, Taktik OdasÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Transition Plan helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Topu kazanÄ±nca ve kaybedince takÄ±mÄ±n ne yapacaÄŸÄ±nÄ± netleÅŸtir.",
      "en": "Define behavior after winning and losing the ball."
    },
    "risk": {
      "tr": "Bu kararÄ± Taktik OdasÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_4",
    "cat": "tactics",
    "pro": true,
    "title": {
      "tr": "Rol Dengesi HaritasÄ±",
      "en": "Role Balance Map"
    },
    "summary": {
      "tr": "Rol Dengesi HaritasÄ±, Taktik OdasÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Role Balance Map helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "HÃ¼cum eden, destekleyen ve gÃ¼vence veren rolleri dengele.",
      "en": "Balance attacking, supporting and securing roles."
    },
    "risk": {
      "tr": "Bu kararÄ± Taktik OdasÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_5",
    "cat": "tactics",
    "pro": true,
    "title": {
      "tr": "Plan B Taktik Kurulumu",
      "en": "Plan B Setup"
    },
    "summary": {
      "tr": "Plan B Taktik Kurulumu, Taktik OdasÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Plan B Setup helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "KÃ¶tÃ¼ giden maÃ§ta tamamen taktik deÄŸiÅŸtirmeden alternatif hazÄ±rla.",
      "en": "Prepare alternatives without rebuilding the whole tactic."
    },
    "risk": {
      "tr": "Bu kararÄ± Taktik OdasÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_1",
    "cat": "matchday",
    "pro": false,
    "title": {
      "tr": "Ã‡ok Gol Yiyorum",
      "en": "I Concede Too Many Goals"
    },
    "summary": {
      "tr": "Ã‡ok Gol Yiyorum, MaÃ§ GÃ¼nÃ¼ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "I Concede Too Many Goals helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "MaÃ§ iÃ§inde savunma Ã§izgisi, pres ve rol riskini hÄ±zlÄ± kontrol et.",
      "en": "Quickly check line, press and role risk in match."
    },
    "risk": {
      "tr": "Bu kararÄ± MaÃ§ GÃ¼nÃ¼ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_2",
    "cat": "matchday",
    "pro": false,
    "title": {
      "tr": "Topa Sahibim Ama Gol Yok",
      "en": "Possession Without Goals"
    },
    "summary": {
      "tr": "Topa Sahibim Ama Gol Yok, MaÃ§ GÃ¼nÃ¼ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Possession Without Goals helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Topa sahip olup Ã¼retim yapamama sorununu ÅŸut kalitesiyle baÄŸla.",
      "en": "Connect sterile possession to shot quality."
    },
    "risk": {
      "tr": "Bu kararÄ± MaÃ§ GÃ¼nÃ¼ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_3",
    "cat": "matchday",
    "pro": false,
    "title": {
      "tr": "Son 20 Dakika Hamlesi",
      "en": "Final 20-Minute Move"
    },
    "summary": {
      "tr": "Son 20 Dakika Hamlesi, MaÃ§ GÃ¼nÃ¼ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Final 20-Minute Move helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Skora gÃ¶re tempo, risk ve oyuncu deÄŸiÅŸikliÄŸi kararÄ±nÄ± ver.",
      "en": "Choose tempo, risk and substitutions by score state."
    },
    "risk": {
      "tr": "Bu kararÄ± MaÃ§ GÃ¼nÃ¼ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_4",
    "cat": "matchday",
    "pro": true,
    "title": {
      "tr": "Rakip Blok KÄ±rma",
      "en": "Breaking a Defensive Block"
    },
    "summary": {
      "tr": "Rakip Blok KÄ±rma, MaÃ§ GÃ¼nÃ¼ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Breaking a Defensive Block helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Dar savunmaya karÅŸÄ± geniÅŸlik, koÅŸu ve tempo Ã§Ã¶zÃ¼mÃ¼ Ã¼ret.",
      "en": "Use width, runs and tempo against compact defenses."
    },
    "risk": {
      "tr": "Bu kararÄ± MaÃ§ GÃ¼nÃ¼ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_5",
    "cat": "matchday",
    "pro": true,
    "title": {
      "tr": "KÄ±rmÄ±zÄ± Kart SonrasÄ± Plan",
      "en": "Red Card Response"
    },
    "summary": {
      "tr": "KÄ±rmÄ±zÄ± Kart SonrasÄ± Plan, MaÃ§ GÃ¼nÃ¼ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Red Card Response helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Eksik kalÄ±nca koruyacaÄŸÄ±n alanÄ± ve feda edeceÄŸin rolÃ¼ seÃ§.",
      "en": "Choose what to protect and what to sacrifice after a red card."
    },
    "risk": {
      "tr": "Bu kararÄ± MaÃ§ GÃ¼nÃ¼ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_1",
    "cat": "setpieces",
    "pro": false,
    "title": {
      "tr": "HÃ¼cum Korner PlanÄ±",
      "en": "Attacking Corner Plan"
    },
    "summary": {
      "tr": "HÃ¼cum Korner PlanÄ±, Duran Toplar departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Attacking Corner Plan helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Boy, gÃ¼Ã§ ve ikinci top planÄ±yla kornerden dÃ¼zenli tehdit Ã¼ret.",
      "en": "Use height, strength and second balls to create threat."
    },
    "risk": {
      "tr": "Bu kararÄ± Duran Toplar baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_2",
    "cat": "setpieces",
    "pro": false,
    "title": {
      "tr": "Savunma Korner PlanÄ±",
      "en": "Defensive Corner Plan"
    },
    "summary": {
      "tr": "Savunma Korner PlanÄ±, Duran Toplar departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Defensive Corner Plan helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "En iyi hava toplarÄ±nÄ± doÄŸru bÃ¶lgelere yerleÅŸtir.",
      "en": "Place best aerial players in the right zones."
    },
    "risk": {
      "tr": "Bu kararÄ± Duran Toplar baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_3",
    "cat": "setpieces",
    "pro": false,
    "title": {
      "tr": "Serbest VuruÅŸ RollerÄ±",
      "en": "Free-Kick Roles"
    },
    "summary": {
      "tr": "Serbest VuruÅŸ RollerÄ±, Duran Toplar departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Free-Kick Roles helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Vurucu, koÅŸucu ve seken top oyuncusunu ayÄ±r.",
      "en": "Separate taker, runner and rebound player."
    },
    "risk": {
      "tr": "Bu kararÄ± Duran Toplar baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_4",
    "cat": "setpieces",
    "pro": true,
    "title": {
      "tr": "TaÃ§ Organizasyonu",
      "en": "Throw-In Organization"
    },
    "summary": {
      "tr": "TaÃ§ Organizasyonu, Duran Toplar departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Throw-In Organization helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "TaÃ§larÄ± top kaybÄ± deÄŸil, gÃ¼venli Ã§Ä±kÄ±ÅŸ aracÄ± yap.",
      "en": "Turn throw-ins into safe progression."
    },
    "risk": {
      "tr": "Bu kararÄ± Duran Toplar baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_5",
    "cat": "setpieces",
    "pro": true,
    "title": {
      "tr": "Duran Top Risk KontrolÃ¼",
      "en": "Set-Piece Risk Check"
    },
    "summary": {
      "tr": "Duran Top Risk KontrolÃ¼, Duran Toplar departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Set-Piece Risk Check helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Kontra yeme riskine karÅŸÄ± arkada kalan oyuncu sayÄ±sÄ±nÄ± ayarla.",
      "en": "Protect against counters with proper rest defense."
    },
    "risk": {
      "tr": "Bu kararÄ± Duran Toplar baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_1",
    "cat": "training",
    "pro": false,
    "title": {
      "tr": "HaftalÄ±k Antrenman Ã–nceliÄŸi",
      "en": "Weekly Training Priority"
    },
    "summary": {
      "tr": "HaftalÄ±k Antrenman Ã–nceliÄŸi, Antrenman departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Weekly Training Priority helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "HaftayÄ± maÃ§ sayÄ±sÄ±, taktik hedef ve fiziksel riskle planla.",
      "en": "Plan the week around fixtures, tactical goals and physical risk."
    },
    "risk": {
      "tr": "Bu kararÄ± Antrenman baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_2",
    "cat": "training",
    "pro": false,
    "title": {
      "tr": "GenÃ§ GeliÅŸim ProgramÄ±",
      "en": "Youth Development Program"
    },
    "summary": {
      "tr": "GenÃ§ GeliÅŸim ProgramÄ±, Antrenman departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Youth Development Program helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "GenÃ§ oyuncunun rol, bireysel antrenman ve maÃ§ sÃ¼resini baÄŸla.",
      "en": "Connect role, individual training and minutes."
    },
    "risk": {
      "tr": "Bu kararÄ± Antrenman baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_3",
    "cat": "training",
    "pro": false,
    "title": {
      "tr": "YoÄŸun FikstÃ¼rde Antrenman",
      "en": "Training During Congestion"
    },
    "summary": {
      "tr": "YoÄŸun FikstÃ¼rde Antrenman, Antrenman departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Training During Congestion helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "MaÃ§ sayÄ±sÄ± artÄ±nca yÃ¼kÃ¼ azaltÄ±p keskinliÄŸi koru.",
      "en": "Reduce load while keeping sharpness during congestion."
    },
    "risk": {
      "tr": "Bu kararÄ± Antrenman baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_4",
    "cat": "training",
    "pro": true,
    "title": {
      "tr": "Taktik TanÄ±dÄ±klÄ±ÄŸÄ± ArtÄ±rma",
      "en": "Tactical Familiarity Boost"
    },
    "summary": {
      "tr": "Taktik TanÄ±dÄ±klÄ±ÄŸÄ± ArtÄ±rma, Antrenman departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Tactical Familiarity Boost helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "Yeni sistemi hÄ±zlÄ± Ã¶ÄŸretmek iÃ§in doÄŸru modÃ¼lleri seÃ§.",
      "en": "Use modules that speed up tactical familiarity."
    },
    "risk": {
      "tr": "Bu kararÄ± Antrenman baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_5",
    "cat": "training",
    "pro": true,
    "title": {
      "tr": "SakatlÄ±k Riskini Azaltma",
      "en": "Injury Risk Reduction"
    },
    "summary": {
      "tr": "SakatlÄ±k Riskini Azaltma, Antrenman departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Injury Risk Reduction helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "AÅŸÄ±rÄ± yÃ¼k, dÃ¼ÅŸÃ¼k kondisyon ve yoÄŸun maÃ§ takvimini dengele.",
      "en": "Balance overload, low condition and match load."
    },
    "risk": {
      "tr": "Bu kararÄ± Antrenman baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_1",
    "cat": "finance",
    "pro": false,
    "title": {
      "tr": "MaaÅŸ BÃ¼tÃ§esi KontrolÃ¼",
      "en": "Wage Budget Control"
    },
    "summary": {
      "tr": "MaaÅŸ BÃ¼tÃ§esi KontrolÃ¼, Finans & MaaÅŸ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Wage Budget Control helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "MaaÅŸ yapÄ±sÄ±nÄ± yÄ±ldÄ±z oyuncu, rotasyon ve genÃ§ oyuncu seviyelerine ayÄ±r.",
      "en": "Split wage structure into star, rotation and prospect tiers."
    },
    "risk": {
      "tr": "Bu kararÄ± Finans & MaaÅŸ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_2",
    "cat": "finance",
    "pro": false,
    "title": {
      "tr": "SatÄ±ÅŸ ZamanÄ± KararÄ±",
      "en": "When to Sell"
    },
    "summary": {
      "tr": "SatÄ±ÅŸ ZamanÄ± KararÄ±, Finans & MaaÅŸ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "When to Sell helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "DeÄŸer dÃ¼ÅŸmeden ve kontrat krizi baÅŸlamadan satÄ±ÅŸ penceresini yakala.",
      "en": "Sell before value drops and contract pressure rises."
    },
    "risk": {
      "tr": "Bu kararÄ± Finans & MaaÅŸ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_3",
    "cat": "finance",
    "pro": false,
    "title": {
      "tr": "Transfer BÃ¼tÃ§esi DaÄŸÄ±tÄ±mÄ±",
      "en": "Transfer Budget Allocation"
    },
    "summary": {
      "tr": "Transfer BÃ¼tÃ§esi DaÄŸÄ±tÄ±mÄ±, Finans & MaaÅŸ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Transfer Budget Allocation helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "BÃ¼tÃ§eyi tek yÄ±ldÄ±z yerine birden Ã§ok ihtiyaÃ§ arasÄ±nda bÃ¶l.",
      "en": "Split budget across needs instead of one star."
    },
    "risk": {
      "tr": "Bu kararÄ± Finans & MaaÅŸ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_4",
    "cat": "finance",
    "pro": true,
    "title": {
      "tr": "Finansal Fair Play KontrolÃ¼",
      "en": "Financial Fair Play Check"
    },
    "summary": {
      "tr": "Finansal Fair Play KontrolÃ¼, Finans & MaaÅŸ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Financial Fair Play Check helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "HarcamayÄ± gelir ve maaÅŸ yÃ¼kÃ¼yle birlikte oku.",
      "en": "Read spending with revenue and wage load."
    },
    "risk": {
      "tr": "Bu kararÄ± Finans & MaaÅŸ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_5",
    "cat": "finance",
    "pro": true,
    "title": {
      "tr": "MaaÅŸ TavanÄ± Modeli",
      "en": "Wage Cap Model"
    },
    "summary": {
      "tr": "MaaÅŸ TavanÄ± Modeli, Finans & MaaÅŸ departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Wage Cap Model helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "KulÃ¼bÃ¼n seviyesine uygun maaÅŸ sÄ±nÄ±rlarÄ± belirle.",
      "en": "Set wage ceilings appropriate to club level."
    },
    "risk": {
      "tr": "Bu kararÄ± Finans & MaaÅŸ baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_1",
    "cat": "contracts",
    "pro": false,
    "title": {
      "tr": "SÃ¶zleÅŸme Yenileme KararÄ±",
      "en": "Contract Renewal Decision"
    },
    "summary": {
      "tr": "SÃ¶zleÅŸme Yenileme KararÄ±, SÃ¶zleÅŸmeler departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Contract Renewal Decision helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Oyuncunun yaÅŸÄ±, rolÃ¼, maaÅŸÄ± ve satÄ±ÅŸ deÄŸerini birlikte deÄŸerlendir.",
      "en": "Evaluate age, role, wage and resale value together."
    },
    "risk": {
      "tr": "Bu kararÄ± SÃ¶zleÅŸmeler baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_2",
    "cat": "contracts",
    "pro": false,
    "title": {
      "tr": "GenÃ§ Oyuncu KontratÄ±",
      "en": "Prospect Contract"
    },
    "summary": {
      "tr": "GenÃ§ Oyuncu KontratÄ±, SÃ¶zleÅŸmeler departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Prospect Contract helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "GenÃ§ oyuncuyu uzun vadeli ama esnek kontratla baÄŸla.",
      "en": "Secure young players with long but flexible contracts."
    },
    "risk": {
      "tr": "Bu kararÄ± SÃ¶zleÅŸmeler baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_3",
    "cat": "contracts",
    "pro": false,
    "title": {
      "tr": "YaÅŸlÄ± Oyuncu Uzatma Riski",
      "en": "Veteran Extension Risk"
    },
    "summary": {
      "tr": "YaÅŸlÄ± Oyuncu Uzatma Riski, SÃ¶zleÅŸmeler departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Veteran Extension Risk helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "PerformansÄ± dÃ¼ÅŸmeden Ã¶nce sÃ¶zleÅŸme sÃ¼resini sÄ±nÄ±rlÄ± tut.",
      "en": "Limit extension length before decline begins."
    },
    "risk": {
      "tr": "Bu kararÄ± SÃ¶zleÅŸmeler baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_4",
    "cat": "contracts",
    "pro": true,
    "title": {
      "tr": "Serbest Kalma Maddesi",
      "en": "Release Clause Logic"
    },
    "summary": {
      "tr": "Serbest Kalma Maddesi, SÃ¶zleÅŸmeler departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Release Clause Logic helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Maddenin kulÃ¼bÃ¼ koruyup korumadÄ±ÄŸÄ±nÄ± kontrol et.",
      "en": "Check whether the clause protects the club."
    },
    "risk": {
      "tr": "Bu kararÄ± SÃ¶zleÅŸmeler baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_5",
    "cat": "contracts",
    "pro": true,
    "title": {
      "tr": "MaaÅŸ ArtÄ±ÅŸÄ± PazarlÄ±ÄŸÄ±",
      "en": "Wage Rise Negotiation"
    },
    "summary": {
      "tr": "MaaÅŸ ArtÄ±ÅŸÄ± PazarlÄ±ÄŸÄ±, SÃ¶zleÅŸmeler departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Wage Rise Negotiation helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "MaaÅŸ artÄ±ÅŸÄ±nÄ± rol ve takÄ±m statÃ¼sÃ¼yle sÄ±nÄ±rla.",
      "en": "Limit wage rises by role and squad status."
    },
    "risk": {
      "tr": "Bu kararÄ± SÃ¶zleÅŸmeler baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_1",
    "cat": "staff",
    "pro": false,
    "title": {
      "tr": "Ä°lk DeÄŸiÅŸecek Personel",
      "en": "First Staff Replacement"
    },
    "summary": {
      "tr": "Ä°lk DeÄŸiÅŸecek Personel, Personel departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "First Staff Replacement helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "KulÃ¼p seviyesine gÃ¶re en kritik personel aÃ§Ä±ÄŸÄ±nÄ± belirle.",
      "en": "Identify the most critical staff gap by club level."
    },
    "risk": {
      "tr": "Bu kararÄ± Personel baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_2",
    "cat": "staff",
    "pro": false,
    "title": {
      "tr": "Scout Ekibi Kurma",
      "en": "Building a Scout Team"
    },
    "summary": {
      "tr": "Scout Ekibi Kurma, Personel departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Building a Scout Team helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "BÃ¶lge, yetenek deÄŸerlendirme ve bÃ¼tÃ§e bilgisine gÃ¶re scout seÃ§.",
      "en": "Choose scouts by region, judging ability and budget knowledge."
    },
    "risk": {
      "tr": "Bu kararÄ± Personel baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_3",
    "cat": "staff",
    "pro": false,
    "title": {
      "tr": "AntrenÃ¶r Rol DaÄŸÄ±lÄ±mÄ±",
      "en": "Coach Role Distribution"
    },
    "summary": {
      "tr": "AntrenÃ¶r Rol DaÄŸÄ±lÄ±mÄ±, Personel departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Coach Role Distribution helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "AntrenÃ¶rleri yÄ±ldÄ±z sayÄ±sÄ±na deÄŸil sorumluluk paylaÅŸÄ±mÄ±na gÃ¶re deÄŸerlendir.",
      "en": "Judge coaches by responsibility coverage, not just stars."
    },
    "risk": {
      "tr": "Bu kararÄ± Personel baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_4",
    "cat": "staff",
    "pro": true,
    "title": {
      "tr": "Fizyo ve Spor Bilimci",
      "en": "Physio and Sports Scientist"
    },
    "summary": {
      "tr": "Fizyo ve Spor Bilimci, Personel departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Physio and Sports Scientist helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "SakatlÄ±k riskini azaltacak saÄŸlÄ±k departmanÄ± kur.",
      "en": "Build a medical department to reduce injury risk."
    },
    "risk": {
      "tr": "Bu kararÄ± Personel baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_5",
    "cat": "staff",
    "pro": true,
    "title": {
      "tr": "AltyapÄ± Sorumlusu Profili",
      "en": "Head of Youth Development Profile"
    },
    "summary": {
      "tr": "AltyapÄ± Sorumlusu Profili, Personel departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Head of Youth Development Profile helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "GenÃ§ giriÅŸlerinin karakterini ve profilini etkileyen kiÅŸiyi seÃ§.",
      "en": "Choose the person shaping youth intake profile."
    },
    "risk": {
      "tr": "Bu kararÄ± Personel baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_1",
    "cat": "academy",
    "pro": false,
    "title": {
      "tr": "AltyapÄ±dan A TakÄ±ma Yol",
      "en": "Youth-to-First-Team Path"
    },
    "summary": {
      "tr": "AltyapÄ±dan A TakÄ±ma Yol, AltyapÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Youth-to-First-Team Path helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "GenÃ§ oyuncunun U19â€™dan A takÄ±ma geÃ§iÅŸini aÅŸamalÄ± planla.",
      "en": "Plan staged progression from youth team to first team."
    },
    "risk": {
      "tr": "Bu kararÄ± AltyapÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_2",
    "cat": "academy",
    "pro": false,
    "title": {
      "tr": "Tesis YatÄ±rÄ±mÄ± Ã–nceliÄŸi",
      "en": "Facility Investment Priority"
    },
    "summary": {
      "tr": "Tesis YatÄ±rÄ±mÄ± Ã–nceliÄŸi, AltyapÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Facility Investment Priority helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "Hangi altyapÄ± yatÄ±rÄ±mÄ±nÄ±n save hedefine uygun olduÄŸunu seÃ§.",
      "en": "Choose the academy investment that fits the save goal."
    },
    "risk": {
      "tr": "Bu kararÄ± AltyapÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_3",
    "cat": "academy",
    "pro": false,
    "title": {
      "tr": "GenÃ§ Oyuncu SeÃ§me Kriteri",
      "en": "Prospect Selection Criteria"
    },
    "summary": {
      "tr": "GenÃ§ Oyuncu SeÃ§me Kriteri, AltyapÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Prospect Selection Criteria helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "Sadece potansiyele deÄŸil kiÅŸilik, rol ve fiziksel tabana bak.",
      "en": "Look beyond potential: personality, role and physical base."
    },
    "risk": {
      "tr": "Bu kararÄ± AltyapÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_4",
    "cat": "academy",
    "pro": true,
    "title": {
      "tr": "B TakÄ±m KullanÄ±mÄ±",
      "en": "Using the B Team"
    },
    "summary": {
      "tr": "B TakÄ±m KullanÄ±mÄ±, AltyapÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Using the B Team helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "B takÄ±mÄ± geliÅŸim ve maÃ§ kondisyonu aracÄ± olarak kullan.",
      "en": "Use B team as a development and sharpness tool."
    },
    "risk": {
      "tr": "Bu kararÄ± AltyapÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_5",
    "cat": "academy",
    "pro": true,
    "title": {
      "tr": "AltyapÄ± Challenge PlanÄ±",
      "en": "Youth Academy Challenge Plan"
    },
    "summary": {
      "tr": "AltyapÄ± Challenge PlanÄ±, AltyapÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Youth Academy Challenge Plan helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "AltyapÄ± odaklÄ± save iÃ§in sabÄ±r ve baÅŸarÄ± kriterleri koy.",
      "en": "Set patience and success criteria for academy saves."
    },
    "risk": {
      "tr": "Bu kararÄ± AltyapÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_1",
    "cat": "dynamics",
    "pro": false,
    "title": {
      "tr": "Moral DÃ¼ÅŸÃ¼ÅŸÃ¼nÃ¼ Durdur",
      "en": "Stop a Morale Drop"
    },
    "summary": {
      "tr": "Moral DÃ¼ÅŸÃ¼ÅŸÃ¼nÃ¼ Durdur, Moral & TakÄ±m DinamiÄŸi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Stop a Morale Drop helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "KÃ¶tÃ¼ seride konuÅŸma, rol ve kaptanlÄ±k etkisini birlikte kullan.",
      "en": "Use talks, roles and leadership together during bad runs."
    },
    "risk": {
      "tr": "Bu kararÄ± Moral & TakÄ±m DinamiÄŸi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_2",
    "cat": "dynamics",
    "pro": false,
    "title": {
      "tr": "Liderlik Grubu YÃ¶netimi",
      "en": "Leadership Group Management"
    },
    "summary": {
      "tr": "Liderlik Grubu YÃ¶netimi, Moral & TakÄ±m DinamiÄŸi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Leadership Group Management helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "TakÄ±m iÃ§i liderleri vaat ve kriz yÃ¶netimine dahil et.",
      "en": "Use team leaders in promises and crisis handling."
    },
    "risk": {
      "tr": "Bu kararÄ± Moral & TakÄ±m DinamiÄŸi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_3",
    "cat": "dynamics",
    "pro": false,
    "title": {
      "tr": "Vaat Krizi Ã‡Ã¶zÃ¼mÃ¼",
      "en": "Promise Crisis Solution"
    },
    "summary": {
      "tr": "Vaat Krizi Ã‡Ã¶zÃ¼mÃ¼, Moral & TakÄ±m DinamiÄŸi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Promise Crisis Solution helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "TutamayacaÄŸÄ±n vaatleri bÃ¼yÃ¼meden yÃ¶net.",
      "en": "Manage risky promises before they escalate."
    },
    "risk": {
      "tr": "Bu kararÄ± Moral & TakÄ±m DinamiÄŸi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_4",
    "cat": "dynamics",
    "pro": true,
    "title": {
      "tr": "Yeni Transfer Uyumu",
      "en": "New Signing Adaptation"
    },
    "summary": {
      "tr": "Yeni Transfer Uyumu, Moral & TakÄ±m DinamiÄŸi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "New Signing Adaptation helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "Yeni oyuncunun dil, kiÅŸilik ve sÃ¼re ihtiyacÄ±nÄ± takip et.",
      "en": "Track language, personality and minutes needs."
    },
    "risk": {
      "tr": "Bu kararÄ± Moral & TakÄ±m DinamiÄŸi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_5",
    "cat": "dynamics",
    "pro": true,
    "title": {
      "tr": "Soyunma OdasÄ± Dengesi",
      "en": "Dressing Room Balance"
    },
    "summary": {
      "tr": "Soyunma OdasÄ± Dengesi, Moral & TakÄ±m DinamiÄŸi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Dressing Room Balance helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "YÄ±ldÄ±z statÃ¼sÃ¼, kaptanlÄ±k ve sÃ¼re beklentilerini dengele.",
      "en": "Balance star status, captaincy and minutes expectations."
    },
    "risk": {
      "tr": "Bu kararÄ± Moral & TakÄ±m DinamiÄŸi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_1",
    "cat": "injuryRotation",
    "pro": false,
    "title": {
      "tr": "YoÄŸun FikstÃ¼r Rotasyonu",
      "en": "Heavy Fixture Rotation"
    },
    "summary": {
      "tr": "YoÄŸun FikstÃ¼r Rotasyonu, SakatlÄ±k & Rotasyon departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Heavy Fixture Rotation helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "OyuncularÄ± sadece kondisyonla deÄŸil maÃ§ keskinliÄŸiyle de deÄŸerlendir.",
      "en": "Judge players by both condition and match sharpness."
    },
    "risk": {
      "tr": "Bu kararÄ± SakatlÄ±k & Rotasyon baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_2",
    "cat": "injuryRotation",
    "pro": false,
    "title": {
      "tr": "SakatlÄ±k SonrasÄ± DÃ¶nÃ¼ÅŸ",
      "en": "Return From Injury"
    },
    "summary": {
      "tr": "SakatlÄ±k SonrasÄ± DÃ¶nÃ¼ÅŸ, SakatlÄ±k & Rotasyon departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Return From Injury helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Oyuncuyu ilk maÃ§ta tam yÃ¼kle oynatma riskini azalt.",
      "en": "Reduce risk of full load immediately after injury."
    },
    "risk": {
      "tr": "Bu kararÄ± SakatlÄ±k & Rotasyon baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_3",
    "cat": "injuryRotation",
    "pro": false,
    "title": {
      "tr": "Yorgunluk AlarmÄ±",
      "en": "Fatigue Alert"
    },
    "summary": {
      "tr": "Yorgunluk AlarmÄ±, SakatlÄ±k & Rotasyon departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Fatigue Alert helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "AynÄ± oyuncuya Ã¼st Ã¼ste yÃ¼k bindirmeyi erken fark et.",
      "en": "Spot repeated overload before injuries happen."
    },
    "risk": {
      "tr": "Bu kararÄ± SakatlÄ±k & Rotasyon baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_4",
    "cat": "injuryRotation",
    "pro": true,
    "title": {
      "tr": "Rotasyon HiyerarÅŸisi",
      "en": "Rotation Hierarchy"
    },
    "summary": {
      "tr": "Rotasyon HiyerarÅŸisi, SakatlÄ±k & Rotasyon departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Rotation Hierarchy helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Hangi oyuncunun hangi maÃ§ta dinleneceÄŸini Ã¶nceden belirle.",
      "en": "Pre-plan who rests in which match."
    },
    "risk": {
      "tr": "Bu kararÄ± SakatlÄ±k & Rotasyon baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_5",
    "cat": "injuryRotation",
    "pro": true,
    "title": {
      "tr": "GenÃ§ Oyuncu YÃ¼k KontrolÃ¼",
      "en": "Young Player Load Control"
    },
    "summary": {
      "tr": "GenÃ§ Oyuncu YÃ¼k KontrolÃ¼, SakatlÄ±k & Rotasyon departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Young Player Load Control helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "GenÃ§leri fazla maÃ§la geliÅŸtirmeye Ã§alÄ±ÅŸÄ±rken sakatlÄ±k riskini yÃ¶net.",
      "en": "Avoid injury risk from overplaying prospects."
    },
    "risk": {
      "tr": "Bu kararÄ± SakatlÄ±k & Rotasyon baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_1",
    "cat": "dataAnalysis",
    "pro": false,
    "title": {
      "tr": "xG ve Åut Kalitesi Okuma",
      "en": "Reading xG and Shot Quality"
    },
    "summary": {
      "tr": "xG ve Åut Kalitesi Okuma, Veri Analizi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Reading xG and Shot Quality helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Skoru deÄŸil, pozisyon kalitesini ve tekrar eden eÄŸilimleri yorumla.",
      "en": "Read chance quality and recurring patterns, not only score."
    },
    "risk": {
      "tr": "Bu kararÄ± Veri Analizi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_2",
    "cat": "dataAnalysis",
    "pro": false,
    "title": {
      "tr": "Pas Ä°lerlemesi Analizi",
      "en": "Progressive Passing Analysis"
    },
    "summary": {
      "tr": "Pas Ä°lerlemesi Analizi, Veri Analizi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Progressive Passing Analysis helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Topun gerÃ§ekten ileri taÅŸÄ±nÄ±p taÅŸÄ±nmadÄ±ÄŸÄ±nÄ± kontrol et.",
      "en": "Check whether the ball is actually progressing."
    },
    "risk": {
      "tr": "Bu kararÄ± Veri Analizi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_3",
    "cat": "dataAnalysis",
    "pro": false,
    "title": {
      "tr": "Pres Verisi Yorumu",
      "en": "Pressing Data Interpretation"
    },
    "summary": {
      "tr": "Pres Verisi Yorumu, Veri Analizi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Pressing Data Interpretation helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Top kazanma bÃ¶lgelerini taktik riskle iliÅŸkilendir.",
      "en": "Relate ball-winning zones to tactical risk."
    },
    "risk": {
      "tr": "Bu kararÄ± Veri Analizi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_4",
    "cat": "dataAnalysis",
    "pro": true,
    "title": {
      "tr": "Rakip Analiz KartÄ±",
      "en": "Opponent Analysis Card"
    },
    "summary": {
      "tr": "Rakip Analiz KartÄ±, Veri Analizi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Opponent Analysis Card helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Rakibin zayÄ±f yÃ¶nÃ¼nÃ¼ maÃ§ planÄ±na dÃ¶nÃ¼ÅŸtÃ¼r.",
      "en": "Turn opponent weakness into a match plan."
    },
    "risk": {
      "tr": "Bu kararÄ± Veri Analizi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_5",
    "cat": "dataAnalysis",
    "pro": true,
    "title": {
      "tr": "Trend mi TesadÃ¼f mÃ¼?",
      "en": "Trend or Noise?"
    },
    "summary": {
      "tr": "Trend mi TesadÃ¼f mÃ¼?, Veri Analizi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Trend or Noise? helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Tek maÃ§lÄ±k veriyi sezon trendinden ayÄ±r.",
      "en": "Separate one-match data from season trend."
    },
    "risk": {
      "tr": "Bu kararÄ± Veri Analizi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_1",
    "cat": "challenges",
    "pro": false,
    "title": {
      "tr": "Sadece AltyapÄ± Challenge",
      "en": "Youth Academy Only Challenge"
    },
    "summary": {
      "tr": "Sadece AltyapÄ± Challenge, Challenge ModlarÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Youth Academy Only Challenge helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Transfer yapmadan geliÅŸim ve sabÄ±r odaklÄ± kariyer kur.",
      "en": "Build a patience and development career without transfers."
    },
    "risk": {
      "tr": "Bu kararÄ± Challenge ModlarÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_2",
    "cat": "challenges",
    "pro": false,
    "title": {
      "tr": "Moneyball Kariyer",
      "en": "Moneyball Career"
    },
    "summary": {
      "tr": "Moneyball Kariyer, Challenge ModlarÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Moneyball Career helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Ä°sim yerine deÄŸer, veri ve dÃ¼ÅŸÃ¼k maliyetli rol uyumuyla ilerle.",
      "en": "Progress through value, data and low-cost role fit."
    },
    "risk": {
      "tr": "Bu kararÄ± Challenge ModlarÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_3",
    "cat": "challenges",
    "pro": false,
    "title": {
      "tr": "Fallen Giant Kurtarma",
      "en": "Fallen Giant Rescue"
    },
    "summary": {
      "tr": "Fallen Giant Kurtarma, Challenge ModlarÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Fallen Giant Rescue helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "BÃ¼yÃ¼k geÃ§miÅŸi olan kulÃ¼bÃ¼ finans ve kadro temizliÄŸiyle ayaÄŸa kaldÄ±r.",
      "en": "Revive a historic club through finance and squad cleanup."
    },
    "risk": {
      "tr": "Bu kararÄ± Challenge ModlarÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_4",
    "cat": "challenges",
    "pro": true,
    "title": {
      "tr": "Tek Ãœlke Transfer KuralÄ±",
      "en": "Single-Nation Transfer Rule"
    },
    "summary": {
      "tr": "Tek Ãœlke Transfer KuralÄ±, Challenge ModlarÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Single-Nation Transfer Rule helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Transfer havuzunu daraltarak saveâ€™e kimlik kazandÄ±r.",
      "en": "Give identity by narrowing the transfer pool."
    },
    "risk": {
      "tr": "Bu kararÄ± Challenge ModlarÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_5",
    "cat": "challenges",
    "pro": true,
    "title": {
      "tr": "5 YÄ±l Avrupa PlanÄ±",
      "en": "5-Year Europe Plan"
    },
    "summary": {
      "tr": "5 YÄ±l Avrupa PlanÄ±, Challenge ModlarÄ± departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "5-Year Europe Plan helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Orta seviye kulÃ¼bÃ¼ aÅŸamalÄ± Avrupa hedeflerine taÅŸÄ±.",
      "en": "Move a mid-level club toward Europe step by step."
    },
    "risk": {
      "tr": "Bu kararÄ± Challenge ModlarÄ± baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_1",
    "cat": "leagueGuides",
    "pro": false,
    "title": {
      "tr": "TÃ¼rkiyeâ€™den Avrupaâ€™ya",
      "en": "From Turkey to Europe"
    },
    "summary": {
      "tr": "TÃ¼rkiyeâ€™den Avrupaâ€™ya, Lig / Ãœlke Rehberleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "From Turkey to Europe helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "YabancÄ± sÄ±nÄ±rÄ±, maaÅŸ dengesi ve Avrupa gelirlerini birlikte planla.",
      "en": "Plan foreign limits, wage balance and European income together."
    },
    "risk": {
      "tr": "Bu kararÄ± Lig / Ãœlke Rehberleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_2",
    "cat": "leagueGuides",
    "pro": false,
    "title": {
      "tr": "Ä°ngiltere Alt Ligleri",
      "en": "English Lower Leagues"
    },
    "summary": {
      "tr": "Ä°ngiltere Alt Ligleri, Lig / Ãœlke Rehberleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "English Lower Leagues helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Fizik, tempo ve kiralÄ±k pazarÄ± alt lig baÅŸarÄ±sÄ±nda Ã¶ne Ã§Ä±kar.",
      "en": "Physicality, tempo and loans drive lower-league success."
    },
    "risk": {
      "tr": "Bu kararÄ± Lig / Ãœlke Rehberleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_3",
    "cat": "leagueGuides",
    "pro": false,
    "title": {
      "tr": "Ä°spanya KayÄ±t KurallarÄ±",
      "en": "Spain Registration Rules"
    },
    "summary": {
      "tr": "Ä°spanya KayÄ±t KurallarÄ±, Lig / Ãœlke Rehberleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Spain Registration Rules helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "MaaÅŸ limiti ve kayÄ±t yÃ¶netimini transferden Ã¶nce dÃ¼ÅŸÃ¼n.",
      "en": "Think wage limits and registration before transfers."
    },
    "risk": {
      "tr": "Bu kararÄ± Lig / Ãœlke Rehberleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_4",
    "cat": "leagueGuides",
    "pro": true,
    "title": {
      "tr": "Almanya GenÃ§ GeliÅŸimi",
      "en": "Germany Youth Development"
    },
    "summary": {
      "tr": "Almanya GenÃ§ GeliÅŸimi, Lig / Ãœlke Rehberleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Germany Youth Development helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Tesis, sÃ¼re ve lig yapÄ±sÄ±nÄ± genÃ§ geliÅŸimiyle baÄŸla.",
      "en": "Connect facilities, minutes and league structure to youth growth."
    },
    "risk": {
      "tr": "Bu kararÄ± Lig / Ãœlke Rehberleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_5",
    "cat": "leagueGuides",
    "pro": true,
    "title": {
      "tr": "GÃ¼ney Amerika Scout PazarÄ±",
      "en": "South America Scout Market"
    },
    "summary": {
      "tr": "GÃ¼ney Amerika Scout PazarÄ±, Lig / Ãœlke Rehberleri departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "South America Scout Market helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Potansiyel, fiyat ve adaptasyon riskini birlikte deÄŸerlendir.",
      "en": "Balance potential, price and adaptation risk."
    },
    "risk": {
      "tr": "Bu kararÄ± Lig / Ãœlke Rehberleri baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_1",
    "cat": "crisis",
    "pro": false,
    "title": {
      "tr": "5 MaÃ§lÄ±k Kriz ProtokolÃ¼",
      "en": "5-Match Crisis Protocol"
    },
    "summary": {
      "tr": "5 MaÃ§lÄ±k Kriz ProtokolÃ¼, Kriz Ã‡Ã¶zÃ¼m Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "5-Match Crisis Protocol helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "KÃ¶tÃ¼ seride taktiÄŸi yÄ±kmadan riski azaltan plan uygula.",
      "en": "Apply a risk-reduction plan without destroying the tactic."
    },
    "risk": {
      "tr": "Bu kararÄ± Kriz Ã‡Ã¶zÃ¼m Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_2",
    "cat": "crisis",
    "pro": false,
    "title": {
      "tr": "Gol Atamama Krizi",
      "en": "Scoring Drought Crisis"
    },
    "summary": {
      "tr": "Gol Atamama Krizi, Kriz Ã‡Ã¶zÃ¼m Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Scoring Drought Crisis helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Åut kalitesi, forvet rolÃ¼ ve destek koÅŸularÄ±nÄ± kontrol et.",
      "en": "Check shot quality, striker role and support runs."
    },
    "risk": {
      "tr": "Bu kararÄ± Kriz Ã‡Ã¶zÃ¼m Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_3",
    "cat": "crisis",
    "pro": false,
    "title": {
      "tr": "Savunma Ã‡Ã¶kÃ¼ÅŸÃ¼",
      "en": "Defensive Collapse"
    },
    "summary": {
      "tr": "Savunma Ã‡Ã¶kÃ¼ÅŸÃ¼, Kriz Ã‡Ã¶zÃ¼m Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Defensive Collapse helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Ã‡izgi, pres, bek rolleri ve orta saha gÃ¼venliÄŸini sÄ±rayla test et.",
      "en": "Test line, press, fullbacks and midfield security in order."
    },
    "risk": {
      "tr": "Bu kararÄ± Kriz Ã‡Ã¶zÃ¼m Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_4",
    "cat": "crisis",
    "pro": true,
    "title": {
      "tr": "TakÄ±m Moral Krizi",
      "en": "Team Morale Crisis"
    },
    "summary": {
      "tr": "TakÄ±m Moral Krizi, Kriz Ã‡Ã¶zÃ¼m Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Team Morale Crisis helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "KonuÅŸma, kaptanlÄ±k ve kolay maÃ§ planÄ±yla gÃ¼veni geri kazan.",
      "en": "Use talks, leadership and easier match plans to rebuild confidence."
    },
    "risk": {
      "tr": "Bu kararÄ± Kriz Ã‡Ã¶zÃ¼m Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_5",
    "cat": "crisis",
    "pro": true,
    "title": {
      "tr": "BÃ¼yÃ¼k MaÃ§ Sendromu",
      "en": "Big Match Problem"
    },
    "summary": {
      "tr": "BÃ¼yÃ¼k MaÃ§ Sendromu, Kriz Ã‡Ã¶zÃ¼m Merkezi departmanÄ±nda hÄ±zlÄ± karar vermek iÃ§in kullanÄ±lÄ±r.",
      "en": "Big Match Problem helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "GÃ¼Ã§lÃ¼ rakiplere karÅŸÄ± risk seviyesini ve geÃ§iÅŸ savunmasÄ±nÄ± ayarla.",
      "en": "Adjust risk and rest defense against stronger opponents."
    },
    "risk": {
      "tr": "Bu kararÄ± Kriz Ã‡Ã¶zÃ¼m Merkezi baÄŸlamÄ±ndan koparÄ±rsan planÄ±n diÄŸer alanlarÄ±yla Ã§eliÅŸebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanÄ±mda bu rehber PlanlarÄ±m ekranÄ±nda sezon hedefi, not ve takip aksiyonuyla birlikte kullanÄ±lmalÄ±.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  }
];

export function getGuideTitle(guide, language) {
  return pickLocalized(guide.title, language) || guide.id;
}

export function getGuideText(guide, language, field = 'summary') {
  if (guide[field]) return pickLocalized(guide[field], language);
  const department = getDepartment(guide.cat);
  if (field === 'detail' && department.purpose) return pickLocalized(department.purpose, language);
  if (field === 'risk' && department.question) return pickLocalized(department.question, language);
  if (field === 'insight' && department.next) return pickLocalized(department.next, language);
  return '';
}

export function getGuidesByDepartment(departmentId) {
  return GUIDES.filter((guide) => guide.cat === departmentId);
}

export function searchGuides(query, language) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return GUIDES.filter((guide) => {
    const department = getDepartment(guide.cat);
    const haystack = [
      getGuideTitle(guide, language),
      getGuideText(guide, language, 'summary'),
      pickLocalized(department.title, language)
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

