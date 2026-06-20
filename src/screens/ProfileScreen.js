
import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { LANGUAGES } from '../data/languages';
import { PALETTES, THEME_IDS } from '../data/themes';
import { pickLocalized } from '../data/i18n';
import { Button } from '../components/Button';

export function ProfileScreen({
  t,
  language,
  setLanguage,
  themeId,
  setThemeId,
  styles,
  profile,
  setProfile,
  loginForm,
  setLoginForm,
  isPro,
  setIsPro,
  account,
  entitlement,
  notify,
  onEditProfile,
  onOpenPaywall
}) {
  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>{t.profile}</Text>

      {profile.loggedIn ? (
        <View style={styles.card}>
          <Text style={styles.title}>{profile.name}</Text>
          <Text style={styles.text}>{profile.email}</Text>
          <Text style={styles.text}>{profile.favoriteClub || t.favoriteClub}</Text>
          <View style={styles.actionRow}>
            <Button title={t.editProfile} onPress={onEditProfile} styles={styles} secondary />
            <Button title={t.logout} onPress={() => { setProfile({ loggedIn: false, name: '', email: '', favoriteClub: '', bio: '' }); notify(t.loggedOut); }} styles={styles} />
          </View>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>{t.login}</Text>
          <Text style={styles.inputLabel}>{t.name}</Text>
          <TextInput value={loginForm.name} onChangeText={(value) => setLoginForm({ ...loginForm, name: value })} style={styles.input} placeholder={t.name} />
          <Text style={styles.inputLabel}>{t.email}</Text>
          <TextInput value={loginForm.email} onChangeText={(value) => setLoginForm({ ...loginForm, email: value })} style={styles.input} placeholder="mail@example.com" />
          <Button
            title={t.login}
            onPress={() => {
              if (!loginForm.name || !loginForm.email) return notify(t.required);
              setProfile({ loggedIn: true, name: loginForm.name, email: loginForm.email, favoriteClub: '', bio: '' });
              notify(t.loggedIn);
            }}
            styles={styles}
          />
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.title}>{t.language}</Text>
        <View style={styles.langGrid}>
          {LANGUAGES.map((item) => {
            const production = item.quality === 'production';
            const selected = language === item.code;
            return (
              <Pressable
                key={item.code}
                style={[styles.langChip, selected ? styles.langActive : null, production ? null : { opacity: 0.55 }]}
                onPress={() => {
                  if (!production) return notify(t.lockedLanguage);
                  setLanguage(item.code);
                  notify(t.savedToast);
                }}
              >
                <Text style={[styles.langText, selected ? styles.langTextActive : null]}>
                  {item.local}{production ? '' : ` · ${t.lockedLanguage}`}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{t.theme}</Text>
        {THEME_IDS.map((id) => {
          const palette = PALETTES[id];
          return (
            <Pressable key={id} style={[styles.themeCard, themeId === id ? styles.cardActive : null]} onPress={() => { setThemeId(id); notify(t.savedToast); }}>
              <View style={styles.themePreview}>
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: palette.bg }} />
                <View style={{ position: 'absolute', left: 8, top: 8, width: 18, height: 18, borderRadius: 9, backgroundColor: palette.gold }} />
                <View style={{ position: 'absolute', right: 8, bottom: 8, width: 16, height: 16, borderRadius: 8, backgroundColor: palette.card2 }} />
              </View>
              <View style={styles.grow}>
                <Text style={styles.title}>{pickLocalized(palette.name, language)}</Text>
                <Text style={styles.text}>{palette.mode === 'dark' ? t.darkTheme : t.lightTheme}</Text>
              </View>
              {themeId === id ? <Text style={styles.gold}>✓</Text> : null}
            </Pressable>
          );
        })}
      </View>

      <View style={styles.card}>
        <Text style={styles.tag}>{t.accountFoundation}</Text>
        <Text style={styles.title}>{account?.displayName || profile.name || t.localDemoAccount}</Text>
        <Text style={styles.text}>{account?.email || profile.email || t.accountText}</Text>
        <Text style={styles.gold}>{t.entitlement}: {entitlement?.status || 'free'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{t.paywallTitle}</Text>
        <Text style={styles.text}>{t.paywallSubtitle}</Text>
        <View style={styles.actionRow}>
          <Button title={isPro ? t.proActive : t.upgradePro} onPress={onOpenPaywall} styles={styles} />
          <Button title={isPro ? t.proClose : t.proOpen} onPress={() => setIsPro(!isPro)} styles={styles} secondary />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{t.produced}</Text>
        <Text style={styles.text}>{t.independent}</Text>
      </View>
    </ScrollView>
  );
}
