
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { WIZARD_OPTIONS, buildWizardResult } from '../data/wizard';
import { pickLocalized } from '../data/i18n';
import { Button } from '../components/Button';
import { Scene } from '../components/Scene';

export function WizardScreen({ t, language, styles, wizard, setWizard, onAddWizardPlan }) {
  const result = buildWizardResult(wizard, language);

  const renderGroup = (key, label) => (
    <View style={styles.card}>
      <Text style={styles.tag}>{label}</Text>
      <View style={styles.grid}>
        {(WIZARD_OPTIONS[key] || []).map((option) => {
          const selected = wizard[key] === option.id;
          return (
            <Pressable
              key={option.id}
              style={[styles.langChip, selected ? styles.langActive : null]}
              onPress={() => setWizard({ ...wizard, [key]: option.id })}
            >
              <Text style={[styles.langText, selected ? styles.langTextActive : null]}>
                {pickLocalized(option.label, language)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>{t.wizardTitle}</Text>
      <Text style={styles.pageSub}>{t.wizardSub}</Text>

      {renderGroup('level', t.clubLevel)}
      {renderGroup('budget', t.budget)}
      {renderGroup('style', t.playStyle)}
      {renderGroup('difficulty', t.difficulty)}

      <View style={styles.hero}>
        <Scene type="career" styles={styles} large />
        <Text style={styles.tag}>{t.result}</Text>
        <Text style={styles.heroTitle}>{result.title}</Text>
        {[
          [t.saveType, result.saveType],
          [t.teamProfile, result.teamProfile],
          [t.firstSeason, result.firstSeason],
          [t.first90, result.first90],
          [t.transferPriority, result.transfer],
          [t.tacticPlan, result.tactic]
        ].map(([label, value]) => (
          <View key={label} style={styles.note}>
            <Text style={styles.noteLabel}>{label}</Text>
            <Text style={styles.text}>{value}</Text>
          </View>
        ))}
        <Button title={t.addWizardPlan} onPress={() => onAddWizardPlan(result)} styles={styles} />
      </View>
    </ScrollView>
  );
}

