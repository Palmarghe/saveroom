import { getDepartment } from './departments';
import { pickLocalized } from './i18n';

export const GUIDES = [
  {
    "id": "saveStart_1",
    "cat": "saveStart",
    "pro": false,
    "title": {
      "tr": "İlk Save Kontrol Listesi",
      "en": "First Save Checklist"
    },
    "summary": {
      "tr": "İlk Save Kontrol Listesi, Save Başlatma departmanında hızlı karar vermek için kullanılır.",
      "en": "First Save Checklist helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Save açmadan önce hedef, zorluk, sezon süresi ve kulüp beklentisini netleştir.",
      "en": "Define goal, difficulty, season length and club expectation before starting."
    },
    "risk": {
      "tr": "Bu kararı Save Başlatma bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "3 Sezonluk Kariyer Hedefi, Save Başlatma departmanında hızlı karar vermek için kullanılır.",
      "en": "3-Season Career Objective helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "İlk üç sezonu ayrı hedeflere bölerek save’in ömrünü ve yönünü belirle.",
      "en": "Split the first three seasons into clear objectives."
    },
    "risk": {
      "tr": "Bu kararı Save Başlatma bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_3",
    "cat": "saveStart",
    "pro": false,
    "title": {
      "tr": "Zorluk Seviyesi Seçimi",
      "en": "Difficulty Level Choice"
    },
    "summary": {
      "tr": "Zorluk Seviyesi Seçimi, Save Başlatma departmanında hızlı karar vermek için kullanılır.",
      "en": "Difficulty Level Choice helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Kariyerin eğlence mi meydan okuma mı olacağını kulüp profiline göre ayarla.",
      "en": "Match difficulty to club profile and desired challenge."
    },
    "risk": {
      "tr": "Bu kararı Save Başlatma bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_4",
    "cat": "saveStart",
    "pro": true,
    "title": {
      "tr": "Save Hikâyesi Oluşturma",
      "en": "Save Story Builder"
    },
    "summary": {
      "tr": "Save Hikâyesi Oluşturma, Save Başlatma departmanında hızlı karar vermek için kullanılır.",
      "en": "Save Story Builder helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Kulübün neden seçildiğini ve başarı tanımını hikâyeleştir.",
      "en": "Give the save a story and clear definition of success."
    },
    "risk": {
      "tr": "Bu kararı Save Başlatma bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "saveStart_5",
    "cat": "saveStart",
    "pro": true,
    "title": {
      "tr": "İlk Gün Yapılacaklar",
      "en": "Day-One Actions"
    },
    "summary": {
      "tr": "İlk Gün Yapılacaklar, Save Başlatma departmanında hızlı karar vermek için kullanılır.",
      "en": "Day-One Actions helps you make a faster decision inside the Save Setup department."
    },
    "detail": {
      "tr": "Kulübe girer girmez kontrol edilecek ilk yönetim adımlarını sırala.",
      "en": "List the first management checks after taking over."
    },
    "risk": {
      "tr": "Bu kararı Save Başlatma bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Save Setup context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_1",
    "cat": "teamChoice",
    "pro": false,
    "title": {
      "tr": "Takım Seçerken 7 Kriter",
      "en": "7 Criteria for Choosing a Club"
    },
    "summary": {
      "tr": "Takım Seçerken 7 Kriter, Takım Seçimi departmanında hızlı karar vermek için kullanılır.",
      "en": "7 Criteria for Choosing a Club helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Kulübü popülerliğe göre değil; bütçe, yaş, hedef, lig ve kadro yapısına göre değerlendir.",
      "en": "Evaluate clubs by budget, age, goal, league and squad structure."
    },
    "risk": {
      "tr": "Bu kararı Takım Seçimi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_2",
    "cat": "teamChoice",
    "pro": false,
    "title": {
      "tr": "Fallen Giant Seçimi",
      "en": "Choosing a Fallen Giant"
    },
    "summary": {
      "tr": "Fallen Giant Seçimi, Takım Seçimi departmanında hızlı karar vermek için kullanılır.",
      "en": "Choosing a Fallen Giant helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Eski büyük kulüplerde beklenti baskısı, maaş yükü ve sabır süresini ölç.",
      "en": "Measure pressure, wage burden and patience at fallen giants."
    },
    "risk": {
      "tr": "Bu kararı Takım Seçimi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_3",
    "cat": "teamChoice",
    "pro": false,
    "title": {
      "tr": "Alt Lig Kulübü Analizi",
      "en": "Lower-League Club Analysis"
    },
    "summary": {
      "tr": "Alt Lig Kulübü Analizi, Takım Seçimi departmanında hızlı karar vermek için kullanılır.",
      "en": "Lower-League Club Analysis helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Alt ligde tesis, maaş bütçesi ve oyuncu pazarı erişimini karar kriteri yap.",
      "en": "Use facilities, wage budget and market access as criteria."
    },
    "risk": {
      "tr": "Bu kararı Takım Seçimi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_4",
    "cat": "teamChoice",
    "pro": true,
    "title": {
      "tr": "Genç Kadro Projesi",
      "en": "Young Squad Project"
    },
    "summary": {
      "tr": "Genç Kadro Projesi, Takım Seçimi departmanında hızlı karar vermek için kullanılır.",
      "en": "Young Squad Project helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Genç kadrolarda süre, liderlik ve sabır gereksinimini hesapla.",
      "en": "Estimate minutes, leadership and patience needed for young squads."
    },
    "risk": {
      "tr": "Bu kararı Takım Seçimi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "teamChoice_5",
    "cat": "teamChoice",
    "pro": true,
    "title": {
      "tr": "Lig Kuralları Kontrolü",
      "en": "League Rules Check"
    },
    "summary": {
      "tr": "Lig Kuralları Kontrolü, Takım Seçimi departmanında hızlı karar vermek için kullanılır.",
      "en": "League Rules Check helps you make a faster decision inside the Team Selection department."
    },
    "detail": {
      "tr": "Yabancı sınırı, kayıt kuralı ve finans yapısını save öncesi incele.",
      "en": "Check foreign limits, registration rules and finances before starting."
    },
    "risk": {
      "tr": "Bu kararı Takım Seçimi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Team Selection context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_1",
    "cat": "squadPlan",
    "pro": false,
    "title": {
      "tr": "3 Yıllık Kadro Omurgası",
      "en": "3-Year Squad Spine"
    },
    "summary": {
      "tr": "3 Yıllık Kadro Omurgası, Kadro Planlama departmanında hızlı karar vermek için kullanılır.",
      "en": "3-Year Squad Spine helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Her pozisyon için omurga, rotasyon ve satılabilir oyuncu ayrımı yap.",
      "en": "Separate core, rotation and sellable players by position."
    },
    "risk": {
      "tr": "Bu kararı Kadro Planlama bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_2",
    "cat": "squadPlan",
    "pro": false,
    "title": {
      "tr": "Yaş Piramidi Kontrolü",
      "en": "Age Pyramid Check"
    },
    "summary": {
      "tr": "Yaş Piramidi Kontrolü, Kadro Planlama departmanında hızlı karar vermek için kullanılır.",
      "en": "Age Pyramid Check helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Kadronun aynı anda yaşlanmasını önlemek için yaş dağılımını planla.",
      "en": "Plan age spread to avoid synchronized decline."
    },
    "risk": {
      "tr": "Bu kararı Kadro Planlama bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_3",
    "cat": "squadPlan",
    "pro": false,
    "title": {
      "tr": "Rol Çakışması Analizi",
      "en": "Role Conflict Analysis"
    },
    "summary": {
      "tr": "Rol Çakışması Analizi, Kadro Planlama departmanında hızlı karar vermek için kullanılır.",
      "en": "Role Conflict Analysis helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Aynı görevi isteyen oyuncuların kadro dengesini bozmasını engelle.",
      "en": "Prevent role overlap from breaking squad balance."
    },
    "risk": {
      "tr": "Bu kararı Kadro Planlama bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_4",
    "cat": "squadPlan",
    "pro": true,
    "title": {
      "tr": "Satılacak Oyuncu Listesi",
      "en": "Sell List Builder"
    },
    "summary": {
      "tr": "Satılacak Oyuncu Listesi, Kadro Planlama departmanında hızlı karar vermek için kullanılır.",
      "en": "Sell List Builder helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Değer kaybı başlamadan satılacak oyuncuları belirle.",
      "en": "Identify players to sell before value drops."
    },
    "risk": {
      "tr": "Bu kararı Kadro Planlama bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "squadPlan_5",
    "cat": "squadPlan",
    "pro": true,
    "title": {
      "tr": "Rotasyon Derinliği Planı",
      "en": "Rotation Depth Plan"
    },
    "summary": {
      "tr": "Rotasyon Derinliği Planı, Kadro Planlama departmanında hızlı karar vermek için kullanılır.",
      "en": "Rotation Depth Plan helps you make a faster decision inside the Squad Planning department."
    },
    "detail": {
      "tr": "Yoğun fikstürde hangi pozisyonların yedeklenmesi gerektiğini çıkar.",
      "en": "Identify positions needing depth for congested schedules."
    },
    "risk": {
      "tr": "Bu kararı Kadro Planlama bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Squad Planning context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_1",
    "cat": "transferHub",
    "pro": false,
    "title": {
      "tr": "Transfer Öncelik Sırası",
      "en": "Transfer Priority Order"
    },
    "summary": {
      "tr": "Transfer Öncelik Sırası, Transfer Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Transfer Priority Order helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Transferleri isimle değil, kadro ihtiyacı ve etki sırasıyla planla.",
      "en": "Plan transfers by squad need and impact, not names."
    },
    "risk": {
      "tr": "Bu kararı Transfer Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_2",
    "cat": "transferHub",
    "pro": false,
    "title": {
      "tr": "İlk Para Hangi Role?",
      "en": "Where Should the First Money Go?"
    },
    "summary": {
      "tr": "İlk Para Hangi Role?, Transfer Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Where Should the First Money Go? helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Kısıtlı bütçede en yüksek etki sağlayan rolü seç.",
      "en": "Pick the highest-impact role under budget constraints."
    },
    "risk": {
      "tr": "Bu kararı Transfer Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_3",
    "cat": "transferHub",
    "pro": false,
    "title": {
      "tr": "Kiralık Oyuncu Stratejisi",
      "en": "Loan Player Strategy"
    },
    "summary": {
      "tr": "Kiralık Oyuncu Stratejisi, Transfer Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Loan Player Strategy helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Kiralıkları kısa vadeli etki ve maaş yüküne göre değerlendir.",
      "en": "Judge loans by short-term impact and wage cost."
    },
    "risk": {
      "tr": "Bu kararı Transfer Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "transferHub_4",
    "cat": "transferHub",
    "pro": true,
    "title": {
      "tr": "Fırsat Transferi Kontrolü",
      "en": "Value Deal Check"
    },
    "summary": {
      "tr": "Fırsat Transferi Kontrolü, Transfer Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Value Deal Check helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Ucuz oyuncunun gerçekten ihtiyaç mı yoksa kalabalık mı yarattığını test et.",
      "en": "Test whether a cheap player solves a need or creates clutter."
    },
    "risk": {
      "tr": "Bu kararı Transfer Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Transfer Risk Matrisi, Transfer Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Transfer Risk Matrix helps you make a faster decision inside the Transfer Hub department."
    },
    "detail": {
      "tr": "Yaş, maaş, sakatlık ve uyum riskini tek kararda birleştir.",
      "en": "Combine age, wage, injury and adaptation risk."
    },
    "risk": {
      "tr": "Bu kararı Transfer Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Transfer Hub context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Wonderkid Arama Filtresi, Scouting Filtreleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Wonderkid Search Filter helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Genç oyuncuyu sadece potansiyelle değil rol ve süre planıyla ara.",
      "en": "Search young players by role and minutes, not only potential."
    },
    "risk": {
      "tr": "Bu kararı Scouting Filtreleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Alt Lig Scout Filtresi, Scouting Filtreleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Lower-League Scout Filter helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Alt lig için fiziksel ve zihinsel taban özellikleri önceliklendir.",
      "en": "Prioritize baseline physical and mental traits for lower leagues."
    },
    "risk": {
      "tr": "Bu kararı Scouting Filtreleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_3",
    "cat": "scouting",
    "pro": false,
    "title": {
      "tr": "Sözleşmesi Biten Oyuncular",
      "en": "Expiring Contract Search"
    },
    "summary": {
      "tr": "Sözleşmesi Biten Oyuncular, Scouting Filtreleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Expiring Contract Search helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Sözleşmesi biten oyuncuları maaş ve rol uyumuyla ele.",
      "en": "Evaluate expiring contracts by wage and role fit."
    },
    "risk": {
      "tr": "Bu kararı Scouting Filtreleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_4",
    "cat": "scouting",
    "pro": true,
    "title": {
      "tr": "Rol Bazlı Tarama",
      "en": "Role-Based Search"
    },
    "summary": {
      "tr": "Rol Bazlı Tarama, Scouting Filtreleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Role-Based Search helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Her rol için aranacak 3-4 kritik özelliği belirle.",
      "en": "Define 3-4 key attributes per role."
    },
    "risk": {
      "tr": "Bu kararı Scouting Filtreleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "scouting_5",
    "cat": "scouting",
    "pro": true,
    "title": {
      "tr": "Pazar Değeri Alarmı",
      "en": "Market Value Alert"
    },
    "summary": {
      "tr": "Pazar Değeri Alarmı, Scouting Filtreleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Market Value Alert helps you make a faster decision inside the Scouting Filters department."
    },
    "detail": {
      "tr": "Değeri düşük ama rol uyumu yüksek oyuncuları yakala.",
      "en": "Find undervalued players with strong role fit."
    },
    "risk": {
      "tr": "Bu kararı Scouting Filtreleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Scouting Filters context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_1",
    "cat": "wonderkids",
    "pro": false,
    "title": {
      "tr": "Genç Oyuncu Dakika Planı",
      "en": "Young Player Minutes Plan"
    },
    "summary": {
      "tr": "Genç Oyuncu Dakika Planı, Wonderkid & Gelişim departmanında hızlı karar vermek için kullanılır.",
      "en": "Young Player Minutes Plan helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "Gelişimin gerçek anahtarı olan maç süresini sezon içine dağıt.",
      "en": "Plan match minutes as the real driver of development."
    },
    "risk": {
      "tr": "Bu kararı Wonderkid & Gelişim bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Potansiyel mi Rol Uyumu mu?, Wonderkid & Gelişim departmanında hızlı karar vermek için kullanılır.",
      "en": "Potential or Role Fit? helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "Yüksek potansiyelin taktiğine uymuyorsa değer kaybedebileceğini gör.",
      "en": "Recognize when high potential fails due to poor role fit."
    },
    "risk": {
      "tr": "Bu kararı Wonderkid & Gelişim bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_3",
    "cat": "wonderkids",
    "pro": false,
    "title": {
      "tr": "Kiralık Gönderme Kararı",
      "en": "Loan Decision"
    },
    "summary": {
      "tr": "Kiralık Gönderme Kararı, Wonderkid & Gelişim departmanında hızlı karar vermek için kullanılır.",
      "en": "Loan Decision helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "Genç oyuncunun kalması mı kiralanması mı gerektiğini belirle.",
      "en": "Decide whether a prospect should stay or go on loan."
    },
    "risk": {
      "tr": "Bu kararı Wonderkid & Gelişim bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Mentor Grubu Kurma, Wonderkid & Gelişim departmanında hızlı karar vermek için kullanılır.",
      "en": "Mentoring Group Setup helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "Kişilik ve liderliği genç gelişimine bağla.",
      "en": "Connect personality and leadership to development."
    },
    "risk": {
      "tr": "Bu kararı Wonderkid & Gelişim bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "wonderkids_5",
    "cat": "wonderkids",
    "pro": true,
    "title": {
      "tr": "Gelişim Riski Kontrolü",
      "en": "Development Risk Check"
    },
    "summary": {
      "tr": "Gelişim Riski Kontrolü, Wonderkid & Gelişim departmanında hızlı karar vermek için kullanılır.",
      "en": "Development Risk Check helps you make a faster decision inside the Wonderkids & Growth department."
    },
    "detail": {
      "tr": "Sakatlık, süre, tesis ve kişilik riskini birlikte değerlendir.",
      "en": "Evaluate injury, minutes, facilities and personality together."
    },
    "risk": {
      "tr": "Bu kararı Wonderkid & Gelişim bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Wonderkids & Growth context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_1",
    "cat": "tactics",
    "pro": false,
    "title": {
      "tr": "Taktiğim Neden Çalışmıyor?",
      "en": "Why Is My Tactic Failing?"
    },
    "summary": {
      "tr": "Taktiğim Neden Çalışmıyor?, Taktik Odası departmanında hızlı karar vermek için kullanılır.",
      "en": "Why Is My Tactic Failing? helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Formasyona değil; rol dengesi, tempo ve savunma yüksekliğine bak.",
      "en": "Look beyond formation: roles, tempo and line height."
    },
    "risk": {
      "tr": "Bu kararı Taktik Odası bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_2",
    "cat": "tactics",
    "pro": false,
    "title": {
      "tr": "Pres Ayarı Kontrolü",
      "en": "Pressing Setup Check"
    },
    "summary": {
      "tr": "Pres Ayarı Kontrolü, Taktik Odası departmanında hızlı karar vermek için kullanılır.",
      "en": "Pressing Setup Check helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Pres yoğunluğunu kondisyon, lig seviyesi ve savunma çizgisiyle eşleştir.",
      "en": "Match pressing to condition, league level and defensive line."
    },
    "risk": {
      "tr": "Bu kararı Taktik Odası bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_3",
    "cat": "tactics",
    "pro": false,
    "title": {
      "tr": "Geçiş Oyunu Planı",
      "en": "Transition Plan"
    },
    "summary": {
      "tr": "Geçiş Oyunu Planı, Taktik Odası departmanında hızlı karar vermek için kullanılır.",
      "en": "Transition Plan helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Topu kazanınca ve kaybedince takımın ne yapacağını netleştir.",
      "en": "Define behavior after winning and losing the ball."
    },
    "risk": {
      "tr": "Bu kararı Taktik Odası bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "tactics_4",
    "cat": "tactics",
    "pro": true,
    "title": {
      "tr": "Rol Dengesi Haritası",
      "en": "Role Balance Map"
    },
    "summary": {
      "tr": "Rol Dengesi Haritası, Taktik Odası departmanında hızlı karar vermek için kullanılır.",
      "en": "Role Balance Map helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Hücum eden, destekleyen ve güvence veren rolleri dengele.",
      "en": "Balance attacking, supporting and securing roles."
    },
    "risk": {
      "tr": "Bu kararı Taktik Odası bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Plan B Taktik Kurulumu, Taktik Odası departmanında hızlı karar vermek için kullanılır.",
      "en": "Plan B Setup helps you make a faster decision inside the Tactic Room department."
    },
    "detail": {
      "tr": "Kötü giden maçta tamamen taktik değiştirmeden alternatif hazırla.",
      "en": "Prepare alternatives without rebuilding the whole tactic."
    },
    "risk": {
      "tr": "Bu kararı Taktik Odası bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Tactic Room context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_1",
    "cat": "matchday",
    "pro": false,
    "title": {
      "tr": "Çok Gol Yiyorum",
      "en": "I Concede Too Many Goals"
    },
    "summary": {
      "tr": "Çok Gol Yiyorum, Maç Günü departmanında hızlı karar vermek için kullanılır.",
      "en": "I Concede Too Many Goals helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Maç içinde savunma çizgisi, pres ve rol riskini hızlı kontrol et.",
      "en": "Quickly check line, press and role risk in match."
    },
    "risk": {
      "tr": "Bu kararı Maç Günü bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Topa Sahibim Ama Gol Yok, Maç Günü departmanında hızlı karar vermek için kullanılır.",
      "en": "Possession Without Goals helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Topa sahip olup üretim yapamama sorununu şut kalitesiyle bağla.",
      "en": "Connect sterile possession to shot quality."
    },
    "risk": {
      "tr": "Bu kararı Maç Günü bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Son 20 Dakika Hamlesi, Maç Günü departmanında hızlı karar vermek için kullanılır.",
      "en": "Final 20-Minute Move helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Skora göre tempo, risk ve oyuncu değişikliği kararını ver.",
      "en": "Choose tempo, risk and substitutions by score state."
    },
    "risk": {
      "tr": "Bu kararı Maç Günü bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_4",
    "cat": "matchday",
    "pro": true,
    "title": {
      "tr": "Rakip Blok Kırma",
      "en": "Breaking a Defensive Block"
    },
    "summary": {
      "tr": "Rakip Blok Kırma, Maç Günü departmanında hızlı karar vermek için kullanılır.",
      "en": "Breaking a Defensive Block helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Dar savunmaya karşı genişlik, koşu ve tempo çözümü üret.",
      "en": "Use width, runs and tempo against compact defenses."
    },
    "risk": {
      "tr": "Bu kararı Maç Günü bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "matchday_5",
    "cat": "matchday",
    "pro": true,
    "title": {
      "tr": "Kırmızı Kart Sonrası Plan",
      "en": "Red Card Response"
    },
    "summary": {
      "tr": "Kırmızı Kart Sonrası Plan, Maç Günü departmanında hızlı karar vermek için kullanılır.",
      "en": "Red Card Response helps you make a faster decision inside the Matchday department."
    },
    "detail": {
      "tr": "Eksik kalınca koruyacağın alanı ve feda edeceğin rolü seç.",
      "en": "Choose what to protect and what to sacrifice after a red card."
    },
    "risk": {
      "tr": "Bu kararı Maç Günü bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Matchday context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_1",
    "cat": "setpieces",
    "pro": false,
    "title": {
      "tr": "Hücum Korner Planı",
      "en": "Attacking Corner Plan"
    },
    "summary": {
      "tr": "Hücum Korner Planı, Duran Toplar departmanında hızlı karar vermek için kullanılır.",
      "en": "Attacking Corner Plan helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Boy, güç ve ikinci top planıyla kornerden düzenli tehdit üret.",
      "en": "Use height, strength and second balls to create threat."
    },
    "risk": {
      "tr": "Bu kararı Duran Toplar bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_2",
    "cat": "setpieces",
    "pro": false,
    "title": {
      "tr": "Savunma Korner Planı",
      "en": "Defensive Corner Plan"
    },
    "summary": {
      "tr": "Savunma Korner Planı, Duran Toplar departmanında hızlı karar vermek için kullanılır.",
      "en": "Defensive Corner Plan helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "En iyi hava toplarını doğru bölgelere yerleştir.",
      "en": "Place best aerial players in the right zones."
    },
    "risk": {
      "tr": "Bu kararı Duran Toplar bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_3",
    "cat": "setpieces",
    "pro": false,
    "title": {
      "tr": "Serbest Vuruş Rollerı",
      "en": "Free-Kick Roles"
    },
    "summary": {
      "tr": "Serbest Vuruş Rollerı, Duran Toplar departmanında hızlı karar vermek için kullanılır.",
      "en": "Free-Kick Roles helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Vurucu, koşucu ve seken top oyuncusunu ayır.",
      "en": "Separate taker, runner and rebound player."
    },
    "risk": {
      "tr": "Bu kararı Duran Toplar bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_4",
    "cat": "setpieces",
    "pro": true,
    "title": {
      "tr": "Taç Organizasyonu",
      "en": "Throw-In Organization"
    },
    "summary": {
      "tr": "Taç Organizasyonu, Duran Toplar departmanında hızlı karar vermek için kullanılır.",
      "en": "Throw-In Organization helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Taçları top kaybı değil, güvenli çıkış aracı yap.",
      "en": "Turn throw-ins into safe progression."
    },
    "risk": {
      "tr": "Bu kararı Duran Toplar bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "setpieces_5",
    "cat": "setpieces",
    "pro": true,
    "title": {
      "tr": "Duran Top Risk Kontrolü",
      "en": "Set-Piece Risk Check"
    },
    "summary": {
      "tr": "Duran Top Risk Kontrolü, Duran Toplar departmanında hızlı karar vermek için kullanılır.",
      "en": "Set-Piece Risk Check helps you make a faster decision inside the Set Pieces department."
    },
    "detail": {
      "tr": "Kontra yeme riskine karşı arkada kalan oyuncu sayısını ayarla.",
      "en": "Protect against counters with proper rest defense."
    },
    "risk": {
      "tr": "Bu kararı Duran Toplar bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Set Pieces context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_1",
    "cat": "training",
    "pro": false,
    "title": {
      "tr": "Haftalık Antrenman Önceliği",
      "en": "Weekly Training Priority"
    },
    "summary": {
      "tr": "Haftalık Antrenman Önceliği, Antrenman departmanında hızlı karar vermek için kullanılır.",
      "en": "Weekly Training Priority helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "Haftayı maç sayısı, taktik hedef ve fiziksel riskle planla.",
      "en": "Plan the week around fixtures, tactical goals and physical risk."
    },
    "risk": {
      "tr": "Bu kararı Antrenman bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_2",
    "cat": "training",
    "pro": false,
    "title": {
      "tr": "Genç Gelişim Programı",
      "en": "Youth Development Program"
    },
    "summary": {
      "tr": "Genç Gelişim Programı, Antrenman departmanında hızlı karar vermek için kullanılır.",
      "en": "Youth Development Program helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "Genç oyuncunun rol, bireysel antrenman ve maç süresini bağla.",
      "en": "Connect role, individual training and minutes."
    },
    "risk": {
      "tr": "Bu kararı Antrenman bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_3",
    "cat": "training",
    "pro": false,
    "title": {
      "tr": "Yoğun Fikstürde Antrenman",
      "en": "Training During Congestion"
    },
    "summary": {
      "tr": "Yoğun Fikstürde Antrenman, Antrenman departmanında hızlı karar vermek için kullanılır.",
      "en": "Training During Congestion helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "Maç sayısı artınca yükü azaltıp keskinliği koru.",
      "en": "Reduce load while keeping sharpness during congestion."
    },
    "risk": {
      "tr": "Bu kararı Antrenman bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_4",
    "cat": "training",
    "pro": true,
    "title": {
      "tr": "Taktik Tanıdıklığı Artırma",
      "en": "Tactical Familiarity Boost"
    },
    "summary": {
      "tr": "Taktik Tanıdıklığı Artırma, Antrenman departmanında hızlı karar vermek için kullanılır.",
      "en": "Tactical Familiarity Boost helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "Yeni sistemi hızlı öğretmek için doğru modülleri seç.",
      "en": "Use modules that speed up tactical familiarity."
    },
    "risk": {
      "tr": "Bu kararı Antrenman bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "training_5",
    "cat": "training",
    "pro": true,
    "title": {
      "tr": "Sakatlık Riskini Azaltma",
      "en": "Injury Risk Reduction"
    },
    "summary": {
      "tr": "Sakatlık Riskini Azaltma, Antrenman departmanında hızlı karar vermek için kullanılır.",
      "en": "Injury Risk Reduction helps you make a faster decision inside the Training department."
    },
    "detail": {
      "tr": "Aşırı yük, düşük kondisyon ve yoğun maç takvimini dengele.",
      "en": "Balance overload, low condition and match load."
    },
    "risk": {
      "tr": "Bu kararı Antrenman bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Training context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_1",
    "cat": "finance",
    "pro": false,
    "title": {
      "tr": "Maaş Bütçesi Kontrolü",
      "en": "Wage Budget Control"
    },
    "summary": {
      "tr": "Maaş Bütçesi Kontrolü, Finans & Maaş departmanında hızlı karar vermek için kullanılır.",
      "en": "Wage Budget Control helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "Maaş yapısını yıldız oyuncu, rotasyon ve genç oyuncu seviyelerine ayır.",
      "en": "Split wage structure into star, rotation and prospect tiers."
    },
    "risk": {
      "tr": "Bu kararı Finans & Maaş bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_2",
    "cat": "finance",
    "pro": false,
    "title": {
      "tr": "Satış Zamanı Kararı",
      "en": "When to Sell"
    },
    "summary": {
      "tr": "Satış Zamanı Kararı, Finans & Maaş departmanında hızlı karar vermek için kullanılır.",
      "en": "When to Sell helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "Değer düşmeden ve kontrat krizi başlamadan satış penceresini yakala.",
      "en": "Sell before value drops and contract pressure rises."
    },
    "risk": {
      "tr": "Bu kararı Finans & Maaş bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_3",
    "cat": "finance",
    "pro": false,
    "title": {
      "tr": "Transfer Bütçesi Dağıtımı",
      "en": "Transfer Budget Allocation"
    },
    "summary": {
      "tr": "Transfer Bütçesi Dağıtımı, Finans & Maaş departmanında hızlı karar vermek için kullanılır.",
      "en": "Transfer Budget Allocation helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "Bütçeyi tek yıldız yerine birden çok ihtiyaç arasında böl.",
      "en": "Split budget across needs instead of one star."
    },
    "risk": {
      "tr": "Bu kararı Finans & Maaş bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_4",
    "cat": "finance",
    "pro": true,
    "title": {
      "tr": "Finansal Fair Play Kontrolü",
      "en": "Financial Fair Play Check"
    },
    "summary": {
      "tr": "Finansal Fair Play Kontrolü, Finans & Maaş departmanında hızlı karar vermek için kullanılır.",
      "en": "Financial Fair Play Check helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "Harcamayı gelir ve maaş yüküyle birlikte oku.",
      "en": "Read spending with revenue and wage load."
    },
    "risk": {
      "tr": "Bu kararı Finans & Maaş bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "finance_5",
    "cat": "finance",
    "pro": true,
    "title": {
      "tr": "Maaş Tavanı Modeli",
      "en": "Wage Cap Model"
    },
    "summary": {
      "tr": "Maaş Tavanı Modeli, Finans & Maaş departmanında hızlı karar vermek için kullanılır.",
      "en": "Wage Cap Model helps you make a faster decision inside the Finance & Wages department."
    },
    "detail": {
      "tr": "Kulübün seviyesine uygun maaş sınırları belirle.",
      "en": "Set wage ceilings appropriate to club level."
    },
    "risk": {
      "tr": "Bu kararı Finans & Maaş bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Finance & Wages context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_1",
    "cat": "contracts",
    "pro": false,
    "title": {
      "tr": "Sözleşme Yenileme Kararı",
      "en": "Contract Renewal Decision"
    },
    "summary": {
      "tr": "Sözleşme Yenileme Kararı, Sözleşmeler departmanında hızlı karar vermek için kullanılır.",
      "en": "Contract Renewal Decision helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Oyuncunun yaşı, rolü, maaşı ve satış değerini birlikte değerlendir.",
      "en": "Evaluate age, role, wage and resale value together."
    },
    "risk": {
      "tr": "Bu kararı Sözleşmeler bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_2",
    "cat": "contracts",
    "pro": false,
    "title": {
      "tr": "Genç Oyuncu Kontratı",
      "en": "Prospect Contract"
    },
    "summary": {
      "tr": "Genç Oyuncu Kontratı, Sözleşmeler departmanında hızlı karar vermek için kullanılır.",
      "en": "Prospect Contract helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Genç oyuncuyu uzun vadeli ama esnek kontratla bağla.",
      "en": "Secure young players with long but flexible contracts."
    },
    "risk": {
      "tr": "Bu kararı Sözleşmeler bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_3",
    "cat": "contracts",
    "pro": false,
    "title": {
      "tr": "Yaşlı Oyuncu Uzatma Riski",
      "en": "Veteran Extension Risk"
    },
    "summary": {
      "tr": "Yaşlı Oyuncu Uzatma Riski, Sözleşmeler departmanında hızlı karar vermek için kullanılır.",
      "en": "Veteran Extension Risk helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Performansı düşmeden önce sözleşme süresini sınırlı tut.",
      "en": "Limit extension length before decline begins."
    },
    "risk": {
      "tr": "Bu kararı Sözleşmeler bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Serbest Kalma Maddesi, Sözleşmeler departmanında hızlı karar vermek için kullanılır.",
      "en": "Release Clause Logic helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Maddenin kulübü koruyup korumadığını kontrol et.",
      "en": "Check whether the clause protects the club."
    },
    "risk": {
      "tr": "Bu kararı Sözleşmeler bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "contracts_5",
    "cat": "contracts",
    "pro": true,
    "title": {
      "tr": "Maaş Artışı Pazarlığı",
      "en": "Wage Rise Negotiation"
    },
    "summary": {
      "tr": "Maaş Artışı Pazarlığı, Sözleşmeler departmanında hızlı karar vermek için kullanılır.",
      "en": "Wage Rise Negotiation helps you make a faster decision inside the Contracts department."
    },
    "detail": {
      "tr": "Maaş artışını rol ve takım statüsüyle sınırla.",
      "en": "Limit wage rises by role and squad status."
    },
    "risk": {
      "tr": "Bu kararı Sözleşmeler bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Contracts context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_1",
    "cat": "staff",
    "pro": false,
    "title": {
      "tr": "İlk Değişecek Personel",
      "en": "First Staff Replacement"
    },
    "summary": {
      "tr": "İlk Değişecek Personel, Personel departmanında hızlı karar vermek için kullanılır.",
      "en": "First Staff Replacement helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "Kulüp seviyesine göre en kritik personel açığını belirle.",
      "en": "Identify the most critical staff gap by club level."
    },
    "risk": {
      "tr": "Bu kararı Personel bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Scout Ekibi Kurma, Personel departmanında hızlı karar vermek için kullanılır.",
      "en": "Building a Scout Team helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "Bölge, yetenek değerlendirme ve bütçe bilgisine göre scout seç.",
      "en": "Choose scouts by region, judging ability and budget knowledge."
    },
    "risk": {
      "tr": "Bu kararı Personel bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_3",
    "cat": "staff",
    "pro": false,
    "title": {
      "tr": "Antrenör Rol Dağılımı",
      "en": "Coach Role Distribution"
    },
    "summary": {
      "tr": "Antrenör Rol Dağılımı, Personel departmanında hızlı karar vermek için kullanılır.",
      "en": "Coach Role Distribution helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "Antrenörleri yıldız sayısına değil sorumluluk paylaşımına göre değerlendir.",
      "en": "Judge coaches by responsibility coverage, not just stars."
    },
    "risk": {
      "tr": "Bu kararı Personel bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Fizyo ve Spor Bilimci, Personel departmanında hızlı karar vermek için kullanılır.",
      "en": "Physio and Sports Scientist helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "Sakatlık riskini azaltacak sağlık departmanı kur.",
      "en": "Build a medical department to reduce injury risk."
    },
    "risk": {
      "tr": "Bu kararı Personel bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "staff_5",
    "cat": "staff",
    "pro": true,
    "title": {
      "tr": "Altyapı Sorumlusu Profili",
      "en": "Head of Youth Development Profile"
    },
    "summary": {
      "tr": "Altyapı Sorumlusu Profili, Personel departmanında hızlı karar vermek için kullanılır.",
      "en": "Head of Youth Development Profile helps you make a faster decision inside the Staff department."
    },
    "detail": {
      "tr": "Genç girişlerinin karakterini ve profilini etkileyen kişiyi seç.",
      "en": "Choose the person shaping youth intake profile."
    },
    "risk": {
      "tr": "Bu kararı Personel bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Staff context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_1",
    "cat": "academy",
    "pro": false,
    "title": {
      "tr": "Altyapıdan A Takıma Yol",
      "en": "Youth-to-First-Team Path"
    },
    "summary": {
      "tr": "Altyapıdan A Takıma Yol, Altyapı departmanında hızlı karar vermek için kullanılır.",
      "en": "Youth-to-First-Team Path helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "Genç oyuncunun U19’dan A takıma geçişini aşamalı planla.",
      "en": "Plan staged progression from youth team to first team."
    },
    "risk": {
      "tr": "Bu kararı Altyapı bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_2",
    "cat": "academy",
    "pro": false,
    "title": {
      "tr": "Tesis Yatırımı Önceliği",
      "en": "Facility Investment Priority"
    },
    "summary": {
      "tr": "Tesis Yatırımı Önceliği, Altyapı departmanında hızlı karar vermek için kullanılır.",
      "en": "Facility Investment Priority helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "Hangi altyapı yatırımının save hedefine uygun olduğunu seç.",
      "en": "Choose the academy investment that fits the save goal."
    },
    "risk": {
      "tr": "Bu kararı Altyapı bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_3",
    "cat": "academy",
    "pro": false,
    "title": {
      "tr": "Genç Oyuncu Seçme Kriteri",
      "en": "Prospect Selection Criteria"
    },
    "summary": {
      "tr": "Genç Oyuncu Seçme Kriteri, Altyapı departmanında hızlı karar vermek için kullanılır.",
      "en": "Prospect Selection Criteria helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "Sadece potansiyele değil kişilik, rol ve fiziksel tabana bak.",
      "en": "Look beyond potential: personality, role and physical base."
    },
    "risk": {
      "tr": "Bu kararı Altyapı bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_4",
    "cat": "academy",
    "pro": true,
    "title": {
      "tr": "B Takım Kullanımı",
      "en": "Using the B Team"
    },
    "summary": {
      "tr": "B Takım Kullanımı, Altyapı departmanında hızlı karar vermek için kullanılır.",
      "en": "Using the B Team helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "B takımı gelişim ve maç kondisyonu aracı olarak kullan.",
      "en": "Use B team as a development and sharpness tool."
    },
    "risk": {
      "tr": "Bu kararı Altyapı bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "academy_5",
    "cat": "academy",
    "pro": true,
    "title": {
      "tr": "Altyapı Challenge Planı",
      "en": "Youth Academy Challenge Plan"
    },
    "summary": {
      "tr": "Altyapı Challenge Planı, Altyapı departmanında hızlı karar vermek için kullanılır.",
      "en": "Youth Academy Challenge Plan helps you make a faster decision inside the Youth Academy department."
    },
    "detail": {
      "tr": "Altyapı odaklı save için sabır ve başarı kriterleri koy.",
      "en": "Set patience and success criteria for academy saves."
    },
    "risk": {
      "tr": "Bu kararı Altyapı bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Youth Academy context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_1",
    "cat": "dynamics",
    "pro": false,
    "title": {
      "tr": "Moral Düşüşünü Durdur",
      "en": "Stop a Morale Drop"
    },
    "summary": {
      "tr": "Moral Düşüşünü Durdur, Moral & Takım Dinamiği departmanında hızlı karar vermek için kullanılır.",
      "en": "Stop a Morale Drop helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "Kötü seride konuşma, rol ve kaptanlık etkisini birlikte kullan.",
      "en": "Use talks, roles and leadership together during bad runs."
    },
    "risk": {
      "tr": "Bu kararı Moral & Takım Dinamiği bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_2",
    "cat": "dynamics",
    "pro": false,
    "title": {
      "tr": "Liderlik Grubu Yönetimi",
      "en": "Leadership Group Management"
    },
    "summary": {
      "tr": "Liderlik Grubu Yönetimi, Moral & Takım Dinamiği departmanında hızlı karar vermek için kullanılır.",
      "en": "Leadership Group Management helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "Takım içi liderleri vaat ve kriz yönetimine dahil et.",
      "en": "Use team leaders in promises and crisis handling."
    },
    "risk": {
      "tr": "Bu kararı Moral & Takım Dinamiği bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_3",
    "cat": "dynamics",
    "pro": false,
    "title": {
      "tr": "Vaat Krizi Çözümü",
      "en": "Promise Crisis Solution"
    },
    "summary": {
      "tr": "Vaat Krizi Çözümü, Moral & Takım Dinamiği departmanında hızlı karar vermek için kullanılır.",
      "en": "Promise Crisis Solution helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "Tutamayacağın vaatleri büyümeden yönet.",
      "en": "Manage risky promises before they escalate."
    },
    "risk": {
      "tr": "Bu kararı Moral & Takım Dinamiği bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Yeni Transfer Uyumu, Moral & Takım Dinamiği departmanında hızlı karar vermek için kullanılır.",
      "en": "New Signing Adaptation helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "Yeni oyuncunun dil, kişilik ve süre ihtiyacını takip et.",
      "en": "Track language, personality and minutes needs."
    },
    "risk": {
      "tr": "Bu kararı Moral & Takım Dinamiği bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dynamics_5",
    "cat": "dynamics",
    "pro": true,
    "title": {
      "tr": "Soyunma Odası Dengesi",
      "en": "Dressing Room Balance"
    },
    "summary": {
      "tr": "Soyunma Odası Dengesi, Moral & Takım Dinamiği departmanında hızlı karar vermek için kullanılır.",
      "en": "Dressing Room Balance helps you make a faster decision inside the Morale & Dynamics department."
    },
    "detail": {
      "tr": "Yıldız statüsü, kaptanlık ve süre beklentilerini dengele.",
      "en": "Balance star status, captaincy and minutes expectations."
    },
    "risk": {
      "tr": "Bu kararı Moral & Takım Dinamiği bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Morale & Dynamics context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_1",
    "cat": "injuryRotation",
    "pro": false,
    "title": {
      "tr": "Yoğun Fikstür Rotasyonu",
      "en": "Heavy Fixture Rotation"
    },
    "summary": {
      "tr": "Yoğun Fikstür Rotasyonu, Sakatlık & Rotasyon departmanında hızlı karar vermek için kullanılır.",
      "en": "Heavy Fixture Rotation helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Oyuncuları sadece kondisyonla değil maç keskinliğiyle de değerlendir.",
      "en": "Judge players by both condition and match sharpness."
    },
    "risk": {
      "tr": "Bu kararı Sakatlık & Rotasyon bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_2",
    "cat": "injuryRotation",
    "pro": false,
    "title": {
      "tr": "Sakatlık Sonrası Dönüş",
      "en": "Return From Injury"
    },
    "summary": {
      "tr": "Sakatlık Sonrası Dönüş, Sakatlık & Rotasyon departmanında hızlı karar vermek için kullanılır.",
      "en": "Return From Injury helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Oyuncuyu ilk maçta tam yükle oynatma riskini azalt.",
      "en": "Reduce risk of full load immediately after injury."
    },
    "risk": {
      "tr": "Bu kararı Sakatlık & Rotasyon bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_3",
    "cat": "injuryRotation",
    "pro": false,
    "title": {
      "tr": "Yorgunluk Alarmı",
      "en": "Fatigue Alert"
    },
    "summary": {
      "tr": "Yorgunluk Alarmı, Sakatlık & Rotasyon departmanında hızlı karar vermek için kullanılır.",
      "en": "Fatigue Alert helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Aynı oyuncuya üst üste yük bindirmeyi erken fark et.",
      "en": "Spot repeated overload before injuries happen."
    },
    "risk": {
      "tr": "Bu kararı Sakatlık & Rotasyon bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_4",
    "cat": "injuryRotation",
    "pro": true,
    "title": {
      "tr": "Rotasyon Hiyerarşisi",
      "en": "Rotation Hierarchy"
    },
    "summary": {
      "tr": "Rotasyon Hiyerarşisi, Sakatlık & Rotasyon departmanında hızlı karar vermek için kullanılır.",
      "en": "Rotation Hierarchy helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Hangi oyuncunun hangi maçta dinleneceğini önceden belirle.",
      "en": "Pre-plan who rests in which match."
    },
    "risk": {
      "tr": "Bu kararı Sakatlık & Rotasyon bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "injuryRotation_5",
    "cat": "injuryRotation",
    "pro": true,
    "title": {
      "tr": "Genç Oyuncu Yük Kontrolü",
      "en": "Young Player Load Control"
    },
    "summary": {
      "tr": "Genç Oyuncu Yük Kontrolü, Sakatlık & Rotasyon departmanında hızlı karar vermek için kullanılır.",
      "en": "Young Player Load Control helps you make a faster decision inside the Injuries & Rotation department."
    },
    "detail": {
      "tr": "Gençleri fazla maçla geliştirmeye çalışırken sakatlık riskini yönet.",
      "en": "Avoid injury risk from overplaying prospects."
    },
    "risk": {
      "tr": "Bu kararı Sakatlık & Rotasyon bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Injuries & Rotation context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_1",
    "cat": "dataAnalysis",
    "pro": false,
    "title": {
      "tr": "xG ve Şut Kalitesi Okuma",
      "en": "Reading xG and Shot Quality"
    },
    "summary": {
      "tr": "xG ve Şut Kalitesi Okuma, Veri Analizi departmanında hızlı karar vermek için kullanılır.",
      "en": "Reading xG and Shot Quality helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Skoru değil, pozisyon kalitesini ve tekrar eden eğilimleri yorumla.",
      "en": "Read chance quality and recurring patterns, not only score."
    },
    "risk": {
      "tr": "Bu kararı Veri Analizi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_2",
    "cat": "dataAnalysis",
    "pro": false,
    "title": {
      "tr": "Pas İlerlemesi Analizi",
      "en": "Progressive Passing Analysis"
    },
    "summary": {
      "tr": "Pas İlerlemesi Analizi, Veri Analizi departmanında hızlı karar vermek için kullanılır.",
      "en": "Progressive Passing Analysis helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Topun gerçekten ileri taşınıp taşınmadığını kontrol et.",
      "en": "Check whether the ball is actually progressing."
    },
    "risk": {
      "tr": "Bu kararı Veri Analizi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Pres Verisi Yorumu, Veri Analizi departmanında hızlı karar vermek için kullanılır.",
      "en": "Pressing Data Interpretation helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Top kazanma bölgelerini taktik riskle ilişkilendir.",
      "en": "Relate ball-winning zones to tactical risk."
    },
    "risk": {
      "tr": "Bu kararı Veri Analizi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_4",
    "cat": "dataAnalysis",
    "pro": true,
    "title": {
      "tr": "Rakip Analiz Kartı",
      "en": "Opponent Analysis Card"
    },
    "summary": {
      "tr": "Rakip Analiz Kartı, Veri Analizi departmanında hızlı karar vermek için kullanılır.",
      "en": "Opponent Analysis Card helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Rakibin zayıf yönünü maç planına dönüştür.",
      "en": "Turn opponent weakness into a match plan."
    },
    "risk": {
      "tr": "Bu kararı Veri Analizi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "dataAnalysis_5",
    "cat": "dataAnalysis",
    "pro": true,
    "title": {
      "tr": "Trend mi Tesadüf mü?",
      "en": "Trend or Noise?"
    },
    "summary": {
      "tr": "Trend mi Tesadüf mü?, Veri Analizi departmanında hızlı karar vermek için kullanılır.",
      "en": "Trend or Noise? helps you make a faster decision inside the Data Analysis department."
    },
    "detail": {
      "tr": "Tek maçlık veriyi sezon trendinden ayır.",
      "en": "Separate one-match data from season trend."
    },
    "risk": {
      "tr": "Bu kararı Veri Analizi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Data Analysis context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_1",
    "cat": "challenges",
    "pro": false,
    "title": {
      "tr": "Sadece Altyapı Challenge",
      "en": "Youth Academy Only Challenge"
    },
    "summary": {
      "tr": "Sadece Altyapı Challenge, Challenge Modları departmanında hızlı karar vermek için kullanılır.",
      "en": "Youth Academy Only Challenge helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Transfer yapmadan gelişim ve sabır odaklı kariyer kur.",
      "en": "Build a patience and development career without transfers."
    },
    "risk": {
      "tr": "Bu kararı Challenge Modları bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Moneyball Kariyer, Challenge Modları departmanında hızlı karar vermek için kullanılır.",
      "en": "Moneyball Career helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "İsim yerine değer, veri ve düşük maliyetli rol uyumuyla ilerle.",
      "en": "Progress through value, data and low-cost role fit."
    },
    "risk": {
      "tr": "Bu kararı Challenge Modları bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Fallen Giant Kurtarma, Challenge Modları departmanında hızlı karar vermek için kullanılır.",
      "en": "Fallen Giant Rescue helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Büyük geçmişi olan kulübü finans ve kadro temizliğiyle ayağa kaldır.",
      "en": "Revive a historic club through finance and squad cleanup."
    },
    "risk": {
      "tr": "Bu kararı Challenge Modları bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_4",
    "cat": "challenges",
    "pro": true,
    "title": {
      "tr": "Tek Ülke Transfer Kuralı",
      "en": "Single-Nation Transfer Rule"
    },
    "summary": {
      "tr": "Tek Ülke Transfer Kuralı, Challenge Modları departmanında hızlı karar vermek için kullanılır.",
      "en": "Single-Nation Transfer Rule helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Transfer havuzunu daraltarak save’e kimlik kazandır.",
      "en": "Give identity by narrowing the transfer pool."
    },
    "risk": {
      "tr": "Bu kararı Challenge Modları bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "challenges_5",
    "cat": "challenges",
    "pro": true,
    "title": {
      "tr": "5 Yıl Avrupa Planı",
      "en": "5-Year Europe Plan"
    },
    "summary": {
      "tr": "5 Yıl Avrupa Planı, Challenge Modları departmanında hızlı karar vermek için kullanılır.",
      "en": "5-Year Europe Plan helps you make a faster decision inside the Challenge Modes department."
    },
    "detail": {
      "tr": "Orta seviye kulübü aşamalı Avrupa hedeflerine taşı.",
      "en": "Move a mid-level club toward Europe step by step."
    },
    "risk": {
      "tr": "Bu kararı Challenge Modları bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Challenge Modes context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_1",
    "cat": "leagueGuides",
    "pro": false,
    "title": {
      "tr": "Türkiye’den Avrupa’ya",
      "en": "From Turkey to Europe"
    },
    "summary": {
      "tr": "Türkiye’den Avrupa’ya, Lig / Ülke Rehberleri departmanında hızlı karar vermek için kullanılır.",
      "en": "From Turkey to Europe helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Yabancı sınırı, maaş dengesi ve Avrupa gelirlerini birlikte planla.",
      "en": "Plan foreign limits, wage balance and European income together."
    },
    "risk": {
      "tr": "Bu kararı Lig / Ülke Rehberleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_2",
    "cat": "leagueGuides",
    "pro": false,
    "title": {
      "tr": "İngiltere Alt Ligleri",
      "en": "English Lower Leagues"
    },
    "summary": {
      "tr": "İngiltere Alt Ligleri, Lig / Ülke Rehberleri departmanında hızlı karar vermek için kullanılır.",
      "en": "English Lower Leagues helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Fizik, tempo ve kiralık pazarı alt lig başarısında öne çıkar.",
      "en": "Physicality, tempo and loans drive lower-league success."
    },
    "risk": {
      "tr": "Bu kararı Lig / Ülke Rehberleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_3",
    "cat": "leagueGuides",
    "pro": false,
    "title": {
      "tr": "İspanya Kayıt Kuralları",
      "en": "Spain Registration Rules"
    },
    "summary": {
      "tr": "İspanya Kayıt Kuralları, Lig / Ülke Rehberleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Spain Registration Rules helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Maaş limiti ve kayıt yönetimini transferden önce düşün.",
      "en": "Think wage limits and registration before transfers."
    },
    "risk": {
      "tr": "Bu kararı Lig / Ülke Rehberleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_4",
    "cat": "leagueGuides",
    "pro": true,
    "title": {
      "tr": "Almanya Genç Gelişimi",
      "en": "Germany Youth Development"
    },
    "summary": {
      "tr": "Almanya Genç Gelişimi, Lig / Ülke Rehberleri departmanında hızlı karar vermek için kullanılır.",
      "en": "Germany Youth Development helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Tesis, süre ve lig yapısını genç gelişimiyle bağla.",
      "en": "Connect facilities, minutes and league structure to youth growth."
    },
    "risk": {
      "tr": "Bu kararı Lig / Ülke Rehberleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "leagueGuides_5",
    "cat": "leagueGuides",
    "pro": true,
    "title": {
      "tr": "Güney Amerika Scout Pazarı",
      "en": "South America Scout Market"
    },
    "summary": {
      "tr": "Güney Amerika Scout Pazarı, Lig / Ülke Rehberleri departmanında hızlı karar vermek için kullanılır.",
      "en": "South America Scout Market helps you make a faster decision inside the League / Nation Guides department."
    },
    "detail": {
      "tr": "Potansiyel, fiyat ve adaptasyon riskini birlikte değerlendir.",
      "en": "Balance potential, price and adaptation risk."
    },
    "risk": {
      "tr": "Bu kararı Lig / Ülke Rehberleri bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the League / Nation Guides context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_1",
    "cat": "crisis",
    "pro": false,
    "title": {
      "tr": "5 Maçlık Kriz Protokolü",
      "en": "5-Match Crisis Protocol"
    },
    "summary": {
      "tr": "5 Maçlık Kriz Protokolü, Kriz Çözüm Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "5-Match Crisis Protocol helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Kötü seride taktiği yıkmadan riski azaltan plan uygula.",
      "en": "Apply a risk-reduction plan without destroying the tactic."
    },
    "risk": {
      "tr": "Bu kararı Kriz Çözüm Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
      "tr": "Gol Atamama Krizi, Kriz Çözüm Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Scoring Drought Crisis helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Şut kalitesi, forvet rolü ve destek koşularını kontrol et.",
      "en": "Check shot quality, striker role and support runs."
    },
    "risk": {
      "tr": "Bu kararı Kriz Çözüm Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_3",
    "cat": "crisis",
    "pro": false,
    "title": {
      "tr": "Savunma Çöküşü",
      "en": "Defensive Collapse"
    },
    "summary": {
      "tr": "Savunma Çöküşü, Kriz Çözüm Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Defensive Collapse helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Çizgi, pres, bek rolleri ve orta saha güvenliğini sırayla test et.",
      "en": "Test line, press, fullbacks and midfield security in order."
    },
    "risk": {
      "tr": "Bu kararı Kriz Çözüm Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_4",
    "cat": "crisis",
    "pro": true,
    "title": {
      "tr": "Takım Moral Krizi",
      "en": "Team Morale Crisis"
    },
    "summary": {
      "tr": "Takım Moral Krizi, Kriz Çözüm Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Team Morale Crisis helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Konuşma, kaptanlık ve kolay maç planıyla güveni geri kazan.",
      "en": "Use talks, leadership and easier match plans to rebuild confidence."
    },
    "risk": {
      "tr": "Bu kararı Kriz Çözüm Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
      "en": "In Pro usage, this guide should be paired with a season objective, note and follow-up action in Plans."
    }
  },
  {
    "id": "crisis_5",
    "cat": "crisis",
    "pro": true,
    "title": {
      "tr": "Büyük Maç Sendromu",
      "en": "Big Match Problem"
    },
    "summary": {
      "tr": "Büyük Maç Sendromu, Kriz Çözüm Merkezi departmanında hızlı karar vermek için kullanılır.",
      "en": "Big Match Problem helps you make a faster decision inside the Crisis Center department."
    },
    "detail": {
      "tr": "Güçlü rakiplere karşı risk seviyesini ve geçiş savunmasını ayarla.",
      "en": "Adjust risk and rest defense against stronger opponents."
    },
    "risk": {
      "tr": "Bu kararı Kriz Çözüm Merkezi bağlamından koparırsan planın diğer alanlarıyla çelişebilir.",
      "en": "If this decision is detached from the Crisis Center context, it can conflict with the rest of the plan."
    },
    "insight": {
      "tr": "Pro kullanımda bu rehber Planlarım ekranında sezon hedefi, not ve takip aksiyonuyla birlikte kullanılmalı.",
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
