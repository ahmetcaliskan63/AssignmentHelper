import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { useRouter } from 'expo-router';

export default function UploadScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header username="Ahmet" />
      <View style={styles.content}>
        <Text style={styles.title}>Ödev Yükle</Text>
        <Text style={styles.subtitle}>Değerlendirmek istediğiniz ödev türünü seçin</Text>

        <View style={styles.buttonContainer}>
          <Card style={styles.card} onPress={() => router.replace('/(dashboard)/text-assignment')}>
            <Card.Content style={styles.cardContent}>
              <MaterialIcons name="edit" size={48} color="#4A90E2" />
              <Text style={styles.cardTitle}>Metin Ödevi</Text>
              <Text style={styles.cardSubtitle}>
                Kompozisyon, makale ve diğer metin ödevlerinizi değerlendirin
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => router.replace('/(dashboard)/math-assignment')}>
            <Card.Content style={styles.cardContent}>
              <MaterialIcons name="calculate" size={48} color="#34C759" />
              <Text style={styles.cardTitle}>Matematik Ödevi</Text>
              <Text style={styles.cardSubtitle}>
                Matematik problemleri ve çözümlerinizi kontrol edin
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
}); 