
import React from 'react';
import { Pressable, Text } from 'react-native';

export function Button({ title, onPress, styles, secondary = false }) {
  return (
    <Pressable style={secondary ? styles.secondary : styles.primary} onPress={onPress}>
      <Text style={secondary ? styles.secondaryText : styles.primaryText}>{title}</Text>
    </Pressable>
  );
}
