import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Text, Card, List, Portal, Modal, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const router = useRouter();
  const [showUploadModal, setShowUploadModal] = useState(false);

  const recentAssignments = [
    {
      id: 1,
      type: 'text',
      title: 'Metin Ödevi',
      status: 'Hatalar Bulundu',
      icon: 'warning',
      color: '#FF9500',
    },
    {
      id: 2,
      type: 'math',
      title: 'Matematik Ödevi',
      status: 'Tüm Çözümler Doğru',
      icon: 'check-circle',
      color: '#34C759',
    },
  ];

  const navigateToAssignment = useCallback((type: 'text' | 'math') => {
    setShowUploadModal(false);
    const path = type === 'text' ? '/(dashboard)/text-assignment' : '/(dashboard)/math-assignment';
    setTimeout(() => {
      router.replace(path);
    }, 300);
  }, [router]);

  return (
    <View style={styles.container}>
      <Header
        username="Ahmet"
        onSettingsPress={() => router.replace('/settings')}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.assignmentTypes}>
          <TouchableOpacity
            style={styles.assignmentCard}
            onPress={() => setShowUploadModal(true)}>
            <Card mode="elevated" style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <MaterialIcons name="upload-file" size={40} color="#4A90E2" />
                <Text style={styles.cardTitle}>Ödev Yükle</Text>
                <Text style={styles.cardSubtitle}>
                  Yeni bir ödev yükleyerek AI değerlendirmesi alın
                </Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Son Ödevler</Text>
          <Card mode="elevated" style={styles.recentCard}>
            {recentAssignments.map((assignment) => (
              <List.Item
                key={assignment.id}
                title={assignment.title}
                description={assignment.status}
                left={() => (
                  <MaterialIcons
                    name={assignment.icon as any}
                    size={24}
                    color={assignment.color}
                    style={styles.listIcon}
                  />
                )}
                style={styles.listItem}
              />
            ))}
          </Card>
        </View>
      </ScrollView>

      {showUploadModal && (
        <Portal>
          <Modal
            visible={showUploadModal}
            onDismiss={() => setShowUploadModal(false)}
            contentContainerStyle={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Ödev Türü Seçin</Text>
              <Button
                mode="contained"
                icon="edit"
                style={styles.modalButton}
                onPress={() => navigateToAssignment('text')}>
                Metin Ödevi
              </Button>
              <Button
                mode="contained"
                icon="calculator"
                style={[styles.modalButton, { marginTop: 16 }]}
                onPress={() => navigateToAssignment('math')}>
                Matematik Ödevi
              </Button>
            </View>
          </Modal>
        </Portal>
      )}
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
  assignmentTypes: {
    marginBottom: 24,
  },
  assignmentCard: {
    marginBottom: 16,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentSection: {
    marginBottom: 24,
  },
  recentCard: {
    backgroundColor: '#fff',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  listIcon: {
    marginLeft: 8,
    marginRight: 8,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  modalButton: {
    width: '100%',
    paddingVertical: 8,
  },
}); 
