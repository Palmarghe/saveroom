export const PRO_PRODUCT = {
  id: 'saveroom_lifetime_pro',
  type: 'lifetime',
  priceLabel: {
    tr: 'Tek seferlik Pro',
    en: 'One-time Pro'
  },
  headline: {
    tr: 'SaveRoom Pro',
    en: 'SaveRoom Pro'
  },
  promise: {
    tr: 'Sınırsız plan, sınırsız favori, Pro rehberler ve gelişmiş karar araçları.',
    en: 'Unlimited plans, unlimited favorites, Pro guides and advanced decision tools.'
  },
  benefits: [
    {
      id: 'unlimitedPlans',
      title: { tr: 'Sınırsız plan', en: 'Unlimited plans' },
      text: { tr: 'Her rehberi ve Wizard sonucunu sezon planına ekle.', en: 'Add every guide and Wizard result to your season plan.' }
    },
    {
      id: 'unlimitedFavorites',
      title: { tr: 'Sınırsız favori', en: 'Unlimited favorites' },
      text: { tr: 'Free limitine takılmadan karar kartlarını sakla.', en: 'Save decision cards without the Free limit.' }
    },
    {
      id: 'proGuides',
      title: { tr: 'Pro rehberler', en: 'Pro guides' },
      text: { tr: 'Risk matrisi, kriz protokolü ve karar ağacı içeriklerini aç.', en: 'Unlock risk matrices, crisis protocols and decision-tree content.' }
    },
    {
      id: 'futureSync',
      title: { tr: 'Gelecek senkronizasyon altyapısı', en: 'Future sync foundation' },
      text: { tr: 'Hesap ve cihazlar arası kullanım için veri modeli hazırdır.', en: 'Data model is ready for account and cross-device usage.' }
    }
  ]
};

export const FREE_LIMITS = {
  plans: 12,
  favorites: 10
};

export function hasPro(entitlement) {
  return entitlement?.status === 'pro' || entitlement?.source === 'demo_pro';
}

export function createFreeEntitlement() {
  return {
    status: 'free',
    source: 'local_free',
    productId: null,
    purchaseDate: null,
    expiresAt: null
  };
}

export function createDemoProEntitlement() {
  return {
    status: 'pro',
    source: 'demo_pro',
    productId: PRO_PRODUCT.id,
    purchaseDate: new Date().toISOString(),
    expiresAt: null
  };
}
