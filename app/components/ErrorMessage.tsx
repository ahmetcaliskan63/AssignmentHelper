import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <Animatable.View
      animation="shake"
      duration={500}
      style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#FFE5E5',
    borderRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
  },
}); 