
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export function BottomTabs({ t, styles, activeTab, onChange }) {
  const tabs = [
    ['home', t.home, 'ğŸ '],
    ['discover', t.discover, 'ğŸ”'],
    ['wizard', t.wizard, 'ğŸ§ '],
    ['planner', t.planner, 'ğŸ“'],
    ['paywall', t.paywall, 'ğŸ’'],
    ['profile', t.profile, 'ğŸ‘¤']
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

