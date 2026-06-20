
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { QUICK_PATHS } from '../data/quickPaths';
import { GUIDES } from '../data/guides';
import { pickLocalized } from '../data/i18n';
import { Button } from '../components/Button';
import { GuideCard } from '../components/GuideCard';
import { Scene } from '../components/Scene';
import { Section } from '../components/Section';

export function HomeScreen({ t, language, styles, profile, plans, favorites, onTab, onDepartment, onOpenGuide, onAddPlan }) {
  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Scene type="career" styles={styles} large />
        <View style={styles.chipRow}>
          <View style={styles.chip}><Text style={styles.chipText}>SaveRoom v5.4 Â· Build Ready</Text></View>
          <View style={styles.chip}><Text style={styles.chipText}>{profile.loggedIn ? `${t.welcome}, ${profile.name}` : t.subtitle}</Text></View>
        </View>
        <Text style={styles.heroTitle}>{t.heroTitle}</Text>
        <Text style={styles.heroText}>{t.heroText}</Text>
        <View style={styles.actionRow}>
          <Button title={t.openWizard} onPress={() => onTab('wizard')} styles={styles} />
          <Button title={t.explore} onPress={() => onTab('discover')} styles={styles} secondary />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.tag}>{t.productionMode}</Text>
        <Text style={styles.title}>v5.4 Build Ready Code</Text>
        <Text style={styles.text}>Kod tabanÄ± EAS Build, maÄŸaza hazÄ±rlÄ±ÄŸÄ± ve gerÃ§ek uygulama paketleme sÃ¼recine hazÄ±rlandÄ±.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tag}>State</Text>
        <Text style={styles.title}>{plans.length} plan Â· {favorites.length} favori</Text>
        <Text style={styles.text}>{t.contentExpansionText}</Text>
      </View>

      <Section title={t.quickStart} sub={t.departmentsSub} styles={styles} />
      {QUICK_PATHS.map((path) => (
        <Pressable
          key={path.id}
          style={styles.card}
          onPress={() => path.target === 'wizard' ? onTab('wizard') : path.target === 'discover' ? onTab('discover') : onDepartment(path.target)}
        >
          <View style={styles.row}>
            <View style={styles.iconBox}><Text style={styles.icon}>{path.icon}</Text></View>
            <View style={styles.grow}>
              <Text style={styles.title}>{pickLocalized(path.title, language)}</Text>
              <Text style={styles.text}>{t.heroText}</Text>
            </View>
          </View>
        </Pressable>
      ))}

      <Section title={t.featured} sub={t.roomGuides} styles={styles} />
      {GUIDES.slice(0, 4).map((guide) => (
        <GuideCard
          key={guide.id}
          guide={guide}
          language={language}
          t={t}
          styles={styles}
          onOpen={() => onOpenGuide(guide)}
          onAddPlan={() => onAddPlan(guide)}
        />
      ))}
    </ScrollView>
  );
}

