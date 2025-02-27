import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, List, Chip } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';

export default function AssignmentsScreen() {
  const assignments = [
    {
      id: 1,
      type: 'text',
      title: 'Türkçe Kompozisyon',
      date: '29 Ocak 2024',
      status: 'Tamamlandı',
      score: '85/100',
      icon: 'check-circle',
      color: '#34C759',
    },
    {
      id: 2,
      type: 'math',
      title: 'Matematik Problemleri',
      date: '28 Ocak 2024',
      status: 'Düzeltme Gerekli',
      score: '65/100',
      icon: 'warning',
      color: '#FF9500',
    },
    {
      id: 3,
      type: 'text',
      title: 'İngilizce Essay',
      date: '27 Ocak 2024',
      status: 'Tamamlandı',
      score: '90/100',
      icon: 'check-circle',
      color: '#34C759',
    },
  ];

  return (
    <View style={styles.container}>
      <Header username="Ahmet" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Ödevlerim</Text>
        
        {assignments.map((assignment) => (
          <Card key={assignment.id} style={styles.card} mode="elevated">
            <Card.Content>
              <View style={styles.cardHeader}>
                <View style={styles.titleContainer}>
                  <MaterialIcons
                    name={assignment.type === 'text' ? 'edit' : 'calculate'}
                    size={24}
                    color="#4A90E2"
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.assignmentTitle}>{assignment.title}</Text>
                    <Text style={styles.date}>{assignment.date}</Text>
                  </View>
                </View>
                <Chip
                  icon={() => (
                    <MaterialIcons
                      name={assignment.icon}
                      size={18}
                      color={assignment.color}
                    />
                  )}
                  style={[styles.statusChip, { borderColor: assignment.color }]}>
                  {assignment.status}
                </Chip>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.scoreLabel}>Puan:</Text>
                <Text style={styles.score}>{assignment.score}</Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
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
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  assignmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statusChip: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  scoreLabel: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
}); 