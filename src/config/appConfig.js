export const APP_CONFIG = {
  appName: 'SaveRoom',
  version: '5.5',
  owner: 'Recep Kaan Erkay',
  creditTr: 'Recep Kaan Erkay tarafından üretilmiştir.',
  creditEn: 'Produced by Recep Kaan Erkay.',
  supportEmail: 'TODO_SUPPORT_EMAIL',
  privacyPolicyUrl: 'TODO_PUBLIC_PRIVACY_POLICY_URL',
  termsUrl: 'TODO_PUBLIC_TERMS_URL',
  buildMode: 'store_submission_pack',
  legal: {
    independent: true,
    notAffiliatedWith: ['Football Manager', 'Sports Interactive', 'SEGA'],
    usesOfficialData: false,
    usesOfficialLogos: false
  }
};

export function getCredit(language = 'tr') {
  return language === 'tr' ? APP_CONFIG.creditTr : APP_CONFIG.creditEn;
}
