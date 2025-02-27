import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Switch,
  Portal,
  Modal,
  Card,
} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { LoadingAnimation } from '../components/LoadingAnimation';
import * as DocumentPicker from 'expo-document-picker';
import { router } from 'expo-router';

export default function TextAssignmentScreen() {
  const [text, setText] = useState('');
  const [saveResults, setSaveResults] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/msword', 
               'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      });

      if (result.type === 'success') {
        // Dosya yükleme işlemleri burada yapılacak
        console.log('Dosya seçildi:', result.uri);
        // Dosya seçildikten sonra modalı kapat
        setShowModal(false);
        // Ana sayfaya yönlendir
        router.replace('/(dashboard)');
      }
    } catch (err) {
      console.log('Dosya seçimi iptal edildi');
    }
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      setShowModal(true);
      return;
    }

    setLoading(true);
    try {
      // Burada AI değerlendirmesi yapılacak
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Başarılı değerlendirme sonrası modalı kapat
      setShowModal(false);
      // Ana sayfaya yönlendir
      router.replace('/(dashboard)');
    } catch (err) {
      console.error('Değerlendirme hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header username="Ahmet" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Metin Ödevi Değerlendirme</Text>

          <Card style={styles.inputCard}>
            <Card.Content>
              <TextInput
                mode="outlined"
                multiline
                numberOfLines={10}
                value={text}
                onChangeText={setText}
                placeholder="Metninizi buraya yapıştırın veya yazmaya başlayın..."
                style={styles.textInput}
              />

              <Button
                mode="outlined"
                onPress={handleDocumentPick}
                icon="file-upload"
                style={styles.uploadButton}>
                Dosya Yükle (PDF/DOCX)
              </Button>

              <View style={styles.switchContainer}>
                <Text>Sonuçları kaydet</Text>
                <Switch
                  value={saveResults}
                  onValueChange={setSaveResults}
                  color="#4A90E2"
                />
              </View>

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.submitButton}
                icon="send"
                loading={loading}
                disabled={loading}>
                {loading ? 'Değerlendiriliyor...' : 'Gönder'}
              </Button>
            </Card.Content>
          </Card>

          {loading && <LoadingAnimation />}
        </ScrollView>
      </KeyboardAvoidingView>

      <Portal>
        <Modal
          visible={showModal}
          onDismiss={() => setShowModal(false)}
          contentContainerStyle={styles.modal}>
          <View style={styles.modalContent}>
            <MaterialIcons name="warning" size={48} color="#FF9500" />
            <Text style={styles.modalTitle}>Metin Giriniz</Text>
            <Text style={styles.modalText}>
              Lütfen değerlendirilecek bir metin girin veya dosya yükleyin.
            </Text>
            <Button
              mode="contained"
              onPress={() => setShowModal(false)}
              style={styles.modalButton}>
              Tamam
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  keyboardAvoid: {
    flex: 1,
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
  inputCard: {
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 16,
    minHeight: 200,
  },
  uploadButton: {
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
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
    marginVertical: 16,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  modalButton: {
    minWidth: 100,
  },
}); 
