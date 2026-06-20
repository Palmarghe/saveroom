export function createLocalAccount(profile) {
  return {
    id: `local_${Date.now()}`,
    provider: 'local_demo',
    email: profile.email || '',
    displayName: profile.name || '',
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString()
  };
}

export function getAccountLabel(account, language = 'tr') {
  if (!account) return language === 'tr' ? 'Yerel demo hesap' : 'Local demo account';
  if (account.provider === 'local_demo') return language === 'tr' ? 'Yerel demo hesap' : 'Local demo account';
  return account.provider;
}

