
import React from 'react';
import { Text, View } from 'react-native';

export function Header({ t, styles, profile, isPro }) {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>SR</Text>
        </View>
        <View>
          <Text style={styles.brandTitle}>SaveRoom</Text>
          <Text style={styles.brandSub}>{profile.loggedIn ? `${t.welcome}, ${profile.name}` : t.subtitle}</Text>
        </View>
      </View>
      <View style={[styles.pill, isPro ? styles.pillActive : null]}>
        <Text style={[styles.pillText, isPro ? styles.pillTextActive : null]}>{isPro ? 'Pro' : 'Free'}</Text>
      </View>
    </View>
  );
}
