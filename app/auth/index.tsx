import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { TextInput, Text, useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Link, router } from 'expo-router';
import { AnimatedButton } from '../components/AnimatedButton';
import { ErrorMessage } from '../components/ErrorMessage';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const theme = useTheme();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    // Form doğrulama
    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Geçerli bir e-posta adresi giriniz.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Burada giriş işlemleri yapılacak
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Başarılı giriş sonrası ana sayfaya yönlendirme
      router.replace('/(dashboard)');
    } catch (err) {
      setError('Hatalı e-posta veya şifre girdiniz.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Animatable.View
          animation="fadeInDown"
          duration={1000}
          style={styles.header}>
          <Text style={styles.title}>Ödev Değerlendirme Sistemine</Text>
          <Text style={styles.subtitle}>Hoş Geldiniz!</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          duration={1000}
          style={styles.formContainer}>
          
          <ErrorMessage message={error} />

          <TextInput
            label="E-posta"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setError('');
            }}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholder="E-posta adresinizi girin"
            error={!!error && error.includes('e-posta')}
          />

          <TextInput
            label="Şifre"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError('');
            }}
            mode="outlined"
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholder="Şifrenizi girin"
            error={!!error && error.includes('şifre')}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />

          <TouchableOpacity style={styles.forgotPassword}>
            <Link href="/auth/forgot-password">
              <Text style={styles.forgotPasswordText}>Şifremi Unuttum?</Text>
            </Link>
          </TouchableOpacity>

          <AnimatedButton
            mode="contained"
            onPress={handleLogin}
            loading={loading}
            style={styles.loginButton}>
            Giriş Yap
          </AnimatedButton>

          <View style={styles.socialButtons}>
            <AnimatedButton
              mode="outlined"
              icon="google"
              onPress={() => {}}
              style={styles.socialButton}>
              Google ile Giriş
            </AnimatedButton>
            <AnimatedButton
              mode="outlined"
              icon="apple"
              onPress={() => {}}
              style={styles.socialButton}>
              Apple ile Giriş
            </AnimatedButton>
          </View>

          <View style={styles.signupContainer}>
            <Text>Hesabın yok mu? </Text>
            <Link href="/auth/register" asChild>
              <TouchableOpacity>
                <Text style={styles.signupText}>Kayıt Ol</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: width > 500 ? 40 : 20, // Tablet için daha geniş padding
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: width > 500 ? 32 : 24, // Tablet için daha büyük yazı
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width > 500 ? 24 : 18,
    color: '#666',
    marginTop: 8,
  },
  formContainer: {
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
    maxWidth: 500, // Maksimum genişlik
    alignSelf: 'center', // Merkeze hizala
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#4A90E2',
  },
  loginButton: {
    marginBottom: 16,
    backgroundColor: '#4A90E2',
  },
  socialButtons: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 16,
  },
  socialButton: {
    marginVertical: 4,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
}); 