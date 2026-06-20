
import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { DEPARTMENTS, getDepartment } from '../data/departments';
import { getGuidesByDepartment, searchGuides } from '../data/guides';
import { pickLocalized } from '../data/i18n';
import { GuideCard } from '../components/GuideCard';
import { Scene } from '../components/Scene';

export function DiscoverScreen({ t, language, styles, palette, selectedDepartmentId, setSelectedDepartmentId, search, setSearch, onOpenGuide, onAddPlan }) {
  const department = selectedDepartmentId ? getDepartment(selectedDepartmentId) : null;
  const guides = department ? getGuidesByDepartment(department.id) : searchGuides(search, language);

  if (department) {
    return (
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => setSelectedDepartmentId(null)}>
          <Text style={styles.gold}>â€¹ {t.discover}</Text>
        </Pressable>
        <Text style={styles.pageTitle}>{pickLocalized(department.title, language)}</Text>
        <Text style={styles.pageSub}>{pickLocalized(department.purpose, language)}</Text>
        <Scene type={department.visual} styles={styles} large />
        {guides.map((guide) => (
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

  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>{t.departmentsTitle}</Text>
      <Text style={styles.pageSub}>{t.departmentsSub}</Text>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={styles.search}
        placeholder={t.searchPlaceholder}
        placeholderTextColor={palette.soft}
      />

      {search.trim() ? guides.map((guide) => (
        <GuideCard
          key={guide.id}
          guide={guide}
          language={language}
          t={t}
          styles={styles}
          onOpen={() => onOpenGuide(guide)}
          onAddPlan={() => onAddPlan(guide)}
        />
      )) : (
        <View style={styles.grid}>
          {DEPARTMENTS.map((item) => (
            <Pressable key={item.id} style={[styles.card, styles.half]} onPress={() => setSelectedDepartmentId(item.id)}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.title}>{pickLocalized(item.title, language)}</Text>
              <Text style={styles.text}>{pickLocalized(item.purpose, language)}</Text>
              <Text style={styles.gold}>{t.openDepartment} â€º</Text>
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

