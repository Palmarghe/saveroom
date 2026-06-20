
import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { getDepartment } from '../data/departments';
import { pickLocalized } from '../data/i18n';
import { getGuideText, getGuideTitle } from '../data/guides';
import { Button } from './Button';
import { Scene } from './Scene';

export function GuideModal({ guide, language, t, styles, isPro, isFavorite, onClose, onFavorite, onAddPlan, onUnlock }) {
  if (!guide) return null;

  const department = getDepartment(guide.cat);
  const locked = guide.pro && !isPro;

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalRoot}>
        <Pressable style={styles.shade} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <View style={styles.row}>
            <View style={styles.grow}>
              <Text style={styles.tag}>{department.icon} {pickLocalized(department.title, language)}</Text>
              <Text style={styles.title}>{getGuideTitle(guide, language)}</Text>
              <Text style={styles.text}>{getGuideText(guide, language, 'summary')}</Text>
            </View>
            <Scene type={department.visual} styles={styles} />
          </View>

          <Text style={styles.tag}>{t.whatItDoes}</Text>
          <Text style={styles.text}>{getGuideText(guide, language, 'detail')}</Text>

          <Text style={styles.tag}>{t.risk}</Text>
          <Text style={styles.text}>{getGuideText(guide, language, 'risk')}</Text>

          <Text style={styles.tag}>{t.proInsight}</Text>
          <Text style={[styles.text, locked ? { opacity: 0.25 } : null]}>{getGuideText(guide, language, 'insight')}</Text>

          {locked ? <Button title={t.viewPro} onPress={onUnlock} styles={styles} /> : null}

          <View style={styles.actionRow}>
            <Button title={isFavorite ? t.removeFav : t.addFav} onPress={onFavorite} styles={styles} secondary />
            <Button title={t.addPlan} onPress={onAddPlan} styles={styles} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
