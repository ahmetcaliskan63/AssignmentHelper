import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Link } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    // Burada şifre sıfırlama işlemleri yapılacak
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={styles.content}>
        <Text style={styles.title}>Şifre Sıfırlama</Text>
        <Text style={styles.description}>
          Şifrenizi sıfırlamak için e-posta adresinizi girin. Size bir bağlantı
          göndereceğiz.
        </Text>

        {!sent ? (
          <>
            <TextInput
              label="E-posta"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              placeholder="E-posta adresinizi girin"
            />

            <Button
              mode="contained"
              onPress={handleResetPassword}
              loading={loading}
              style={styles.resetButton}
              contentStyle={styles.buttonContent}>
              Şifre Sıfırlama Bağlantısı Gönder
            </Button>
          </>
        ) : (
          <Animatable.View animation="fadeIn">
            <Text style={styles.successMessage}>
              Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen
              gelen kutunuzu kontrol edin.
            </Text>
          </Animatable.View>
        )}

        <Link href="/auth/login" asChild>
          <TouchableOpacity style={styles.backToLogin}>
            <Text style={styles.backToLoginText}>← Giriş sayfasına dön</Text>
          </TouchableOpacity>
        </Link>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  input: {
    marginBottom: 16,
  },
  resetButton: {
    marginBottom: 16,
    backgroundColor: '#4A90E2',
  },
  buttonContent: {
    height: 48,
  },
  successMessage: {
    textAlign: 'center',
    color: '#34C759',
    marginVertical: 16,
    lineHeight: 20,
  },
  backToLogin: {
    alignItems: 'center',
    marginTop: 16,
  },
  backToLoginText: {
    color: '#4A90E2',
  },
}); 