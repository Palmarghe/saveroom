
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

function Pulse({ style, delay = 0, distance = 5 }) {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(value, { toValue: 1, duration: 2400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(value, { toValue: 0, duration: 2400, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [value, delay]);

  const translateY = value.interpolate({ inputRange: [0, 1], outputRange: [0, -distance] });
  const scale = value.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1.04] });

  return <Animated.View style={[style, { transform: [{ translateY }, { scale }] }]} />;
}

export function Scene({ type = 'career', styles, large = false }) {
  const base = [styles.visual, large ? styles.visualLarge : null];

  if (type === 'scout') {
    return (
      <View style={base}>
        <View style={styles.report}>
          <View style={[styles.bar, { top: 16, width: 25 }]} />
          <Pulse style={[styles.bar, { top: 32, width: 42 }]} />
          <Pulse style={[styles.bar, { top: 48, width: 32 }]} delay={220} />
        </View>
      </View>
    );
  }

  if (type === 'tactic' || type === 'match') {
    return (
      <View style={base}>
        <View style={styles.board}>
          <Pulse style={[styles.dot, { left: 17, top: 16 }]} />
          <Pulse style={[styles.dot, { right: 18, top: 28 }]} delay={140} />
          <Pulse style={[styles.dot, { left: 42, bottom: 16 }]} delay={280} />
          <View style={[styles.boardLine, { left: 20, top: 28, width: 34 }]} />
        </View>
      </View>
    );
  }

  if (type === 'finance') {
    return (
      <View style={base}>
        {[0, 1, 2, 3].map((item) => (
          <Pulse key={item} style={[styles.financeBar, { left: 20 + item * 16, height: 18 + item * 9 }]} delay={item * 140} />
        ))}
      </View>
    );
  }

  return (
    <View style={base}>
      <Pulse style={styles.glow} />
      <View style={styles.desk} />
      <View style={styles.board}>
        <View style={[styles.boardLine, { left: 14, top: 18, width: 42 }]} />
        <View style={[styles.boardLine, { left: 18, top: 34, width: 28, opacity: 0.45 }]} />
      </View>
    </View>
  );
}

