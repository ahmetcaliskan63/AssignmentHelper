import React from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export const AnimatedButton = ({ onPress, style, mode, children, loading, icon }) => {
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const scaleValue = new Animated.Value(1);

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Button
        mode={mode}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.button, style]}
        loading={loading}
        icon={icon}>
        {children}
      </Button>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
}); 