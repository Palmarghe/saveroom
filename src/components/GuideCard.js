
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { getDepartment } from '../data/departments';
import { pickLocalized } from '../data/i18n';
import { getGuideText, getGuideTitle } from '../data/guides';
import { Scene } from './Scene';

export function GuideCard({ guide, language, t, styles, onOpen, onAddPlan }) {
  const department = getDepartment(guide.cat);

  return (
    <Pressable style={styles.card} onPress={onOpen}>
      <View style={styles.row}>
        <View style={styles.grow}>
          <Text style={styles.tag}>{department.icon} {pickLocalized(department.title, language)}</Text>
          <Text style={styles.title}>{getGuideTitle(guide, language)}</Text>
          <Text style={styles.text}>{getGuideText(guide, language, 'summary')}</Text>
        </View>
        <Scene type={department.visual} styles={styles} />
      </View>

      <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }]}>
        <Text style={styles.small}>{t.openDetail}</Text>
        <Pressable style={styles.langChip} onPress={onAddPlan}>
          <Text style={styles.gold}>{t.addPlan}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
