import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { FREE_LIMITS, PRO_PRODUCT, hasPro } from '../data/products';
import { pickLocalized } from '../data/i18n';
import { Button } from '../components/Button';
import { Scene } from '../components/Scene';

export function PaywallScreen({ t, language, styles, entitlement, plans, favorites, onPurchase, onRestore }) {
  const pro = hasPro(entitlement);

  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Scene type="career" styles={styles} large />
        <View style={styles.chipRow}>
          <View style={styles.chip}><Text style={styles.chipText}>SaveRoom v5.3</Text></View>
          <View style={styles.chip}><Text style={styles.chipText}>{pro ? t.proActive : t.freeActive}</Text></View>
        </View>
        <Text style={styles.heroTitle}>{t.paywallTitle}</Text>
        <Text style={styles.heroText}>{t.paywallSubtitle}</Text>
        <View style={styles.actionRow}>
          <Button title={pro ? t.proActive : t.demoPurchase} onPress={onPurchase} styles={styles} />
          <Button title={t.restorePurchase} onPress={onRestore} styles={styles} secondary />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.tag}>{t.entitlement}</Text>
        <Text style={styles.title}>{pro ? t.proActive : t.freeActive}</Text>
        <Text style={styles.text}>{entitlement?.source || 'local_free'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tag}>{t.freeLimits}</Text>
        <Text style={styles.title}>{t.plansLimit}: {plans.length}/{FREE_LIMITS.plans}</Text>
        <Text style={styles.text}>{t.favoritesLimit}: {favorites.length}/{FREE_LIMITS.favorites}</Text>
      </View>

      {PRO_PRODUCT.benefits.map((benefit) => (
        <View key={benefit.id} style={styles.card}>
          <Text style={styles.tag}>PRO</Text>
          <Text style={styles.title}>{pickLocalized(benefit.title, language)}</Text>
          <Text style={styles.text}>{pickLocalized(benefit.text, language)}</Text>
        </View>
      ))}

      <View style={styles.card}>
        <Text style={styles.tag}>{t.billingFoundation}</Text>
        <Text style={styles.title}>{pickLocalized(PRO_PRODUCT.priceLabel, language)}</Text>
        <Text style={styles.text}>{t.billingText}</Text>
      </View>
    </ScrollView>
  );
}

