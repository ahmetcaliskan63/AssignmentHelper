import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Text, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <View style={styles.container}>
      <Header username="Ahmet" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Ayarlar</Text>

        <List.Section>
          <List.Subheader>Genel</List.Subheader>
          <List.Item
            title="Karanlık Mod"
            left={() => <MaterialIcons name="brightness-4" size={24} color="#666" />}
            right={() => (
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                color="#4A90E2"
              />
            )}
          />
          <Divider />
          <List.Item
            title="Bildirimler"
            left={() => <MaterialIcons name="notifications" size={24} color="#666" />}
            right={() => (
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                color="#4A90E2"
              />
            )}
          />
        </List.Section>

        <List.Section>
          <List.Subheader>Hesap</List.Subheader>
          <List.Item
            title="Profili Düzenle"
            left={() => <MaterialIcons name="person" size={24} color="#666" />}
            right={() => <MaterialIcons name="chevron-right" size={24} color="#666" />}
          />
          <Divider />
          <List.Item
            title="Şifre Değiştir"
            left={() => <MaterialIcons name="lock" size={24} color="#666" />}
            right={() => <MaterialIcons name="chevron-right" size={24} color="#666" />}
          />
          <Divider />
          <List.Item
            title="E-posta Değiştir"
            left={() => <MaterialIcons name="email" size={24} color="#666" />}
            right={() => <MaterialIcons name="chevron-right" size={24} color="#666" />}
          />
        </List.Section>

        <List.Section>
          <List.Subheader>Uygulama Hakkında</List.Subheader>
          <List.Item
            title="Sürüm"
            description="1.0.0"
            left={() => <MaterialIcons name="info" size={24} color="#666" />}
          />
          <Divider />
          <List.Item
            title="Gizlilik Politikası"
            left={() => <MaterialIcons name="privacy-tip" size={24} color="#666" />}
            right={() => <MaterialIcons name="chevron-right" size={24} color="#666" />}
          />
          <Divider />
          <List.Item
            title="Kullanım Koşulları"
            left={() => <MaterialIcons name="description" size={24} color="#666" />}
            right={() => <MaterialIcons name="chevron-right" size={24} color="#666" />}
          />
        </List.Section>

        <List.Item
          title="Çıkış Yap"
          titleStyle={styles.logoutText}
          left={() => <MaterialIcons name="logout" size={24} color="#FF3B30" />}
        />
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
  logoutText: {
    color: '#FF3B30',
  },
}); 