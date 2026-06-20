import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = 'saveroom_v5_3_state';

export const defaultState = {
  language: 'tr',
  themeId: 'darkGold',
  isPro: false,
  profile: { loggedIn: false, name: '', email: '', favoriteClub: '', bio: '' },
  plans: [],
  favorites: [],
  wizard: { level: 'mid', budget: 'medium', style: 'rebuild', difficulty: 'balanced' },
  account: null,
  entitlement: { status: 'free', source: 'local_free', productId: null, purchaseDate: null, expiresAt: null }
};

export async function loadAppState() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed, profile: { ...defaultState.profile, ...(parsed.profile || {}) }, entitlement: { ...defaultState.entitlement, ...(parsed.entitlement || {}) } };
  } catch (error) {
    return defaultState;
  }
}

export async function saveAppState(state) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Local persistence failure should not block the UI.
  }
}

