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

export default function MathAssignmentScreen() {
  const [text, setText] = useState('');
  const [saveResults, setSaveResults] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Header username="Ahmet" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Matematik Ödevi Değerlendirme</Text>

          <Card style={styles.inputCard}>
            <Card.Content>
              <TextInput
                mode="outlined"
                multiline
                numberOfLines={10}
                value={text}
                onChangeText={setText}
                placeholder="Matematik problemini buraya yazın..."
                style={styles.textInput}
              />

              <Button
                mode="outlined"
                icon="camera"
                style={styles.uploadButton}>
                Fotoğraf Çek
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
                style={styles.submitButton}
                icon="send"
                loading={loading}>
                {loading ? 'Değerlendiriliyor...' : 'Gönder'}
              </Button>
            </Card.Content>
          </Card>

          {loading && <LoadingAnimation />}
        </ScrollView>
      </KeyboardAvoidingView>
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
}); 