
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export function BottomTabs({ t, styles, activeTab, onChange }) {
  const tabs = [
    ['home', t.home, '🏠'],
    ['discover', t.discover, '🔎'],
    ['wizard', t.wizard, '🧠'],
    ['planner', t.planner, '📝'],
    ['paywall', t.paywall, '💎'],
    ['profile', t.profile, '👤']
  ];

  return (
    <View style={styles.tab}>
      {tabs.map(([id, label, icon]) => (
        <Pressable key={id} style={styles.tabItem} onPress={() => onChange(id)}>
          <Text style={styles.tabIcon}>{icon}</Text>
          <Text style={[styles.tabText, activeTab === id ? styles.tabTextActive : null]} numberOfLines={1}>
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
