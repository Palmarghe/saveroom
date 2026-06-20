
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { GUIDES, getGuideText, getGuideTitle } from '../data/guides';
import { getDepartment } from '../data/departments';
import { pickLocalized } from '../data/i18n';
import { Button } from '../components/Button';
import { Scene } from '../components/Scene';

export function PlansScreen({ t, language, styles, plans, setPlans, onEditNote }) {
  const activeCount = plans.filter((plan) => plan.status === 'active').length;
  const doneCount = plans.filter((plan) => plan.status === 'done').length;

  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>{t.planner}</Text>

      <View style={styles.statRow}>
        <View style={styles.stat}><Text style={styles.statValue}>{plans.length}</Text><Text style={styles.statLabel}>{t.total}</Text></View>
        <View style={styles.stat}><Text style={styles.statValue}>{activeCount}</Text><Text style={styles.statLabel}>{t.active}</Text></View>
        <View style={styles.stat}><Text style={styles.statValue}>{doneCount}</Text><Text style={styles.statLabel}>{t.done}</Text></View>
      </View>

      {plans.length === 0 ? (
        <View style={styles.card}>
          <Text style={styles.title}>{t.emptyPlan}</Text>
          <Text style={styles.text}>{t.emptyPlanText}</Text>
        </View>
      ) : null}

      {plans.map((plan) => {
        const guide = plan.guideId ? GUIDES.find((item) => item.id === plan.guideId) : null;
        const department = guide ? getDepartment(guide.cat) : null;
        const title = guide ? getGuideTitle(guide, language) : plan.title;
        const body = guide ? getGuideText(guide, language, 'summary') : plan.note;

        return (
          <View key={plan.id} style={styles.card}>
            <Text style={styles.tag}>{guide && department ? pickLocalized(department.title, language) : t.wizard}</Text>
            <View style={styles.row}>
              <View style={styles.grow}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{body}</Text>
              </View>
              {department ? <Scene type={department.visual} styles={styles} /> : null}
            </View>
            {plan.note ? (
              <View style={styles.note}>
                <Text style={styles.noteLabel}>{t.note}</Text>
                <Text style={styles.text}>{plan.note}</Text>
              </View>
            ) : null}
            <View style={styles.actionRow}>
              <Button
                title={plan.status === 'done' ? t.reactivate : t.complete}
                onPress={() => setPlans(plans.map((item) => item.id === plan.id ? { ...item, status: item.status === 'done' ? 'active' : 'done' } : item))}
                styles={styles}
                secondary
              />
              <Button title={t.editNote} onPress={() => onEditNote(plan)} styles={styles} />
              <Button title={t.remove} onPress={() => setPlans(plans.filter((item) => item.id !== plan.id))} styles={styles} secondary />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

