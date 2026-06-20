
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { BottomTabs } from './src/components/BottomTabs';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { Button } from './src/components/Button';
import { GuideModal } from './src/components/GuideModal';
import { Header } from './src/components/Header';
import { getText } from './src/data/i18n';
import { getPalette } from './src/data/themes';
import { GUIDES } from './src/data/guides';
import { createLocalAccount } from './src/data/account';
import { FREE_LIMITS, hasPro } from './src/data/products';
import { purchaseLifetimePro, restorePurchases } from './src/services/billing';
import { loadAppState, saveAppState } from './src/services/storage';
import { createStyles } from './src/styles';
import { APP_CONFIG } from './src/config/appConfig';
import { validateContentModel } from './src/utils/validators';
import { HomeScreen } from './src/screens/HomeScreen';
import { DiscoverScreen } from './src/screens/DiscoverScreen';
import { WizardScreen } from './src/screens/WizardScreen';
import { PlansScreen } from './src/screens/PlansScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { PaywallScreen } from './src/screens/PaywallScreen';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState('home');
  const [language, setLanguage] = useState('tr');
  const [themeId, setThemeId] = useState('darkGold');
  const [isPro, setIsPro] = useState(false);
  const [profile, setProfile] = useState({ loggedIn: false, name: '', email: '', favoriteClub: '', bio: '' });
  const [loginForm, setLoginForm] = useState({ name: '', email: '' });
  const [plans, setPlans] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [wizard, setWizard] = useState({ level: 'mid', budget: 'medium', style: 'rebuild', difficulty: 'balanced' });
  const [account, setAccount] = useState(null);
  const [entitlement, setEntitlement] = useState({ status: 'free', source: 'local_free', productId: null, purchaseDate: null, expiresAt: null });
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');
  const [profileModal, setProfileModal] = useState(false);
  const [profileDraft, setProfileDraft] = useState(profile);
  const [noteModal, setNoteModal] = useState(false);
  const [notePlanId, setNotePlanId] = useState(null);
  const [noteText, setNoteText] = useState('');

  const fade = useRef(new Animated.Value(1)).current;
  const palette = getPalette(themeId);
  const styles = createStyles(palette);
  const t = getText(language);
  const validation = validateContentModel();
  const proActive = isPro || hasPro(entitlement);

  useEffect(() => {
    loadAppState().then((state) => {
      setLanguage(state.language || 'tr');
      setThemeId(state.themeId || 'darkGold');
      setIsPro(Boolean(state.isPro));
      setProfile(state.profile);
      setPlans(state.plans || []);
      setFavorites(state.favorites || []);
      setWizard(state.wizard || { level: 'mid', budget: 'medium', style: 'rebuild', difficulty: 'balanced' });
      setAccount(state.account || null);
      setEntitlement(state.entitlement || { status: 'free', source: 'local_free', productId: null, purchaseDate: null, expiresAt: null });
    }).finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    saveAppState({ language, themeId, isPro, profile, plans, favorites, wizard, account, entitlement });
  }, [loaded, language, themeId, isPro, profile, plans, favorites, wizard, account, entitlement]);

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 1600);
  };

  const changeTab = (next) => {
    Animated.sequence([
      Animated.timing(fade, { toValue: 0.35, duration: 80, useNativeDriver: true }),
      Animated.timing(fade, { toValue: 1, duration: 150, useNativeDriver: true })
    ]).start();
    setTab(next);
    if (next !== 'discover') {
      setSelectedDepartmentId(null);
      setSearch('');
    }
  };

  const openDepartment = (departmentId) => {
    setSelectedDepartmentId(departmentId);
    changeTab('discover');
  };

  const addGuidePlan = (guide) => {
    if (plans.some((plan) => plan.guideId === guide.id)) return notify(t.planExists);
    if (!proActive && guide.pro) {
      notify(t.proRequired);
      setTab('paywall');
      return;
    }
    if (!proActive && plans.length >= FREE_LIMITS.plans) {
      notify(t.limitReached);
      setTab('paywall');
      return;
    }
    setPlans([{ id: `p-${Date.now()}`, type: 'guide', guideId: guide.id, status: 'active', note: '' }, ...plans]);
    notify(t.planAdded);
  };

  const addWizardPlan = (result) => {
    if (!proActive && plans.length >= FREE_LIMITS.plans) {
      notify(t.limitReached);
      setTab('paywall');
      return;
    }
    setPlans([
      {
        id: `w-${Date.now()}`,
        type: 'wizard',
        title: result.title,
        status: 'active',
        note: `${result.saveType}\n${result.teamProfile}\n${result.first90}`
      },
      ...plans
    ]);
    notify(t.wizardAdded);
  };

  const toggleFavorite = (guide) => {
    const exists = favorites.includes(guide.id);
    if (!exists && !proActive && favorites.length >= FREE_LIMITS.favorites) {
      notify(t.limitReached);
      setTab('paywall');
      return;
    }
    setFavorites(exists ? favorites.filter((id) => id !== guide.id) : [...favorites, guide.id]);
    notify(exists ? t.favRemoved : t.favAdded);
  };

  const openNote = (plan) => {
    setNotePlanId(plan.id);
    setNoteText(plan.note || '');
    setNoteModal(true);
  };

  const saveNote = () => {
    setPlans(plans.map((plan) => plan.id === notePlanId ? { ...plan, note: noteText } : plan));
    setNoteModal(false);
    notify(t.noteSaved);
  };

  const handlePurchase = async () => {
    const nextEntitlement = await purchaseLifetimePro();
    setEntitlement(nextEntitlement);
    setIsPro(true);
    notify(t.purchaseCompleted);
  };

  const handleRestore = async () => {
    const restored = await restorePurchases();
    setEntitlement(restored);
    notify(t.purchaseRestored);
  };

  const openProfileEdit = () => {
    setProfileDraft(profile);
    setProfileModal(true);
  };

  const saveProfile = () => {
    if (!profileDraft.name || !profileDraft.email) return notify(t.required);
    const nextProfile = { ...profileDraft, loggedIn: true };
    setProfile(nextProfile);
    if (!account) setAccount(createLocalAccount(nextProfile));
    setProfileModal(false);
    notify(t.profileUpdated);
  };

  if (!loaded) {
    return (
      <View style={styles.root}>
        <StatusBar barStyle={palette.mode === 'light' ? 'dark-content' : 'light-content'} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>SaveRoom...</Text>
        </View>
      </View>
    );
  }

  let content = (
    <HomeScreen
      t={t}
      language={language}
      styles={styles}
      profile={profile}
      plans={plans}
      favorites={favorites}
      onTab={changeTab}
      onDepartment={openDepartment}
      onOpenGuide={setSelectedGuide}
      onAddPlan={addGuidePlan}
    />
  );

  if (tab === 'discover') {
    content = (
      <DiscoverScreen
        t={t}
        language={language}
        styles={styles}
        palette={palette}
        selectedDepartmentId={selectedDepartmentId}
        setSelectedDepartmentId={setSelectedDepartmentId}
        search={search}
        setSearch={setSearch}
        onOpenGuide={setSelectedGuide}
        onAddPlan={addGuidePlan}
      />
    );
  }

  if (tab === 'wizard') {
    content = (
      <WizardScreen
        t={t}
        language={language}
        styles={styles}
        wizard={wizard}
        setWizard={setWizard}
        onAddWizardPlan={addWizardPlan}
      />
    );
  }

  if (tab === 'planner') {
    content = (
      <PlansScreen
        t={t}
        language={language}
        styles={styles}
        plans={plans}
        setPlans={setPlans}
        onEditNote={openNote}
      />
    );
  }

  if (tab === 'paywall') {
    content = (
      <PaywallScreen
        t={t}
        language={language}
        styles={styles}
        entitlement={entitlement}
        plans={plans}
        favorites={favorites}
        onPurchase={handlePurchase}
        onRestore={handleRestore}
      />
    );
  }

  if (tab === 'profile') {
    content = (
      <ProfileScreen
        t={t}
        language={language}
        setLanguage={setLanguage}
        themeId={themeId}
        setThemeId={setThemeId}
        styles={styles}
        profile={profile}
        setProfile={setProfile}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        isPro={proActive}
        setIsPro={setIsPro}
        notify={notify}
        onEditProfile={openProfileEdit}
      />
    );
  }

  return (
    <ErrorBoundary styles={styles}>
    <View style={styles.root}>
      <StatusBar barStyle={palette.mode === 'light' ? 'dark-content' : 'light-content'} />
      <Header t={t} styles={styles} profile={profile} isPro={proActive} />
      <Animated.View style={{ flex: 1, opacity: fade }}>{content}</Animated.View>
      <BottomTabs t={t} styles={styles} activeTab={tab} onChange={changeTab} />

      <GuideModal
        guide={selectedGuide}
        language={language}
        t={t}
        styles={styles}
        isPro={proActive}
        isFavorite={selectedGuide ? favorites.includes(selectedGuide.id) : false}
        onClose={() => setSelectedGuide(null)}
        onFavorite={() => selectedGuide && toggleFavorite(selectedGuide)}
        onAddPlan={() => selectedGuide && addGuidePlan(selectedGuide)}
        onUnlock={() => setTab('paywall')}
      />

      <Modal visible={profileModal} transparent animationType="fade" onRequestClose={() => setProfileModal(false)}>
        <View style={styles.center}>
          <Pressable style={styles.shade} onPress={() => setProfileModal(false)} />
          <View style={styles.centerCard}>
            <Text style={styles.title}>{t.editProfile}</Text>
            <Text style={styles.inputLabel}>{t.name}</Text>
            <TextInput value={profileDraft.name} onChangeText={(value) => setProfileDraft({ ...profileDraft, name: value })} style={styles.input} placeholder={t.name} />
            <Text style={styles.inputLabel}>{t.email}</Text>
            <TextInput value={profileDraft.email} onChangeText={(value) => setProfileDraft({ ...profileDraft, email: value })} style={styles.input} placeholder="mail@example.com" />
            <Text style={styles.inputLabel}>{t.favoriteClub}</Text>
            <TextInput value={profileDraft.favoriteClub} onChangeText={(value) => setProfileDraft({ ...profileDraft, favoriteClub: value })} style={styles.input} placeholder={t.favoriteClub} />
            <Text style={styles.inputLabel}>{t.bio}</Text>
            <TextInput value={profileDraft.bio} onChangeText={(value) => setProfileDraft({ ...profileDraft, bio: value })} style={[styles.input, styles.textArea]} multiline placeholder="..." />
            <View style={styles.actionRow}>
              <Button title={t.cancel} onPress={() => setProfileModal(false)} styles={styles} secondary />
              <Button title={t.save} onPress={saveProfile} styles={styles} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={noteModal} transparent animationType="fade" onRequestClose={() => setNoteModal(false)}>
        <View style={styles.center}>
          <Pressable style={styles.shade} onPress={() => setNoteModal(false)} />
          <View style={styles.centerCard}>
            <Text style={styles.title}>{t.note}</Text>
            <TextInput value={noteText} onChangeText={setNoteText} style={[styles.input, styles.textArea, { minHeight: 130 }]} multiline placeholder="..." />
            <View style={styles.actionRow}>
              <Button title={t.close} onPress={() => setNoteModal(false)} styles={styles} secondary />
              <Button title={t.save} onPress={saveNote} styles={styles} />
            </View>
          </View>
        </View>
      </Modal>

      {toast ? (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{toast}</Text>
        </View>
      ) : null}
    </View>
    </ErrorBoundary>
  );
}
