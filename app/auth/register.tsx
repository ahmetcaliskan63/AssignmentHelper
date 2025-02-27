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
import { TextInput, Text, Checkbox } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Link } from 'expo-router';
import { AnimatedButton } from '../components/AnimatedButton';
import { ErrorMessage } from '../components/ErrorMessage';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleRegister = async () => {
    // Form doğrulama
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Geçerli bir e-posta adresi giriniz.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Şifre en az 6 karakter olmalıdır.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Şifreler eşleşmiyor.');
      return;
    }

    if (!termsAccepted) {
      setError('Devam etmek için gizlilik politikasını kabul etmelisiniz.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      // Kayıt işlemini simüle ediyoruz
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      // Başarılı kayıt sonrası giriş sayfasına yönlendir
      router.push('/index.tsx');  // Burayı kendi login sayfanın yoluna göre ayarla
    } catch (err) {
      setError('Bu e-posta adresi zaten kullanılıyor.');
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
          <Text style={styles.title}>Yeni Hesap Oluştur</Text>
          <Text style={styles.subtitle}>ve Ödevlerini AI ile Değerlendir!</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          duration={1000}
          style={styles.formContainer}>
          
          <ErrorMessage message={error} />

          <TextInput
            label="Ad Soyad"
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              setError('');
            }}
            mode="outlined"
            style={styles.input}
            placeholder="Adınızı ve soyadınızı girin"
            error={!!error && error.includes('tüm alanları')}
          />

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
            placeholder="En az 6 karakterli şifre oluşturun"
            error={!!error && error.includes('Şifre')}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />

          <TextInput
            label="Şifre Tekrarı"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setError('');
            }}
            mode="outlined"
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
            placeholder="Şifrenizi tekrar girin"
            error={!!error && error.includes('eşleşmiyor')}
            right={
              <TextInput.Icon
                icon={showConfirmPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            }
          />

          <View style={styles.termsContainer}>
            <Checkbox.Android
              status={termsAccepted ? 'checked' : 'unchecked'}
              onPress={() => {
                setTermsAccepted(!termsAccepted);
                setError('');
              }}
            />
            <Text style={styles.termsText}>
              Hesap oluşturarak{' '}
              <Text style={styles.termsLink}>Gizlilik Politikası</Text>'nı kabul
              etmiş oluyorum.
            </Text>
          </View>

          <AnimatedButton
            mode="contained"
            onPress={handleRegister}
            loading={loading}
            style={styles.registerButton}>
            Kayıt Ol
          </AnimatedButton>

          <View style={styles.socialButtons}>
            <AnimatedButton
              mode="outlined"
              icon="google"
              onPress={() => {}}
              style={styles.socialButton}>
              Google ile Kayıt Ol
            </AnimatedButton>
            <AnimatedButton
              mode="outlined"
              icon="apple"
              onPress={() => {}}
              style={styles.socialButton}>
              Apple ile Kayıt Ol
            </AnimatedButton>
          </View>

          <View style={styles.loginContainer}>
            <Text>Zaten bir hesabın var mı? </Text>
            <Link href="/" asChild>
              <TouchableOpacity>
                <Text style={styles.loginText}>Giriş Yap</Text>
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
    padding: width > 500 ? 40 : 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: width > 500 ? 32 : 24,
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
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  termsText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },
  termsLink: {
    color: '#4A90E2',
  },
  registerButton: {
    marginBottom: 16,
    backgroundColor: '#34C759',
  },
  socialButtons: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 16,
  },
  socialButton: {
    marginVertical: 4,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
}); 