import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Text, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';

export default function HelpScreen() {
  const faqs = [
    {
      id: 1,
      question: 'Nasıl ödev yükleyebilirim?',
      answer:
        'Ana sayfada bulunan "Metin Ödevi" veya "Matematik Ödevi" kartlarından birini seçerek ödevinizi yükleyebilirsiniz.',
    },
    {
      id: 2,
      question: 'Ödevim ne kadar sürede değerlendirilir?',
      answer:
        'Ödevler genellikle birkaç saniye içinde yapay zeka tarafından değerlendirilir ve sonuçlar anında size gösterilir.',
    },
    {
      id: 3,
      question: 'Değerlendirme sonuçlarını nasıl görebilirim?',
      answer:
        'Ödevlerim sekmesinden tüm ödevlerinizi ve değerlendirme sonuçlarını görüntüleyebilirsiniz.',
    },
  ];

  return (
    <View style={styles.container}>
      <Header username="Ahmet" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Yardım</Text>

        <Card style={styles.contactCard}>
          <Card.Content>
            <View style={styles.contactHeader}>
              <MaterialIcons name="support-agent" size={24} color="#4A90E2" />
              <Text style={styles.contactTitle}>Destek Ekibine Ulaşın</Text>
            </View>
            <Text style={styles.contactText}>
              Sorularınız için 7/24 destek ekibimize ulaşabilirsiniz.
            </Text>
            <Text style={styles.email}>destek@assignmentai.com</Text>
          </Card.Content>
        </Card>

        <Text style={styles.faqTitle}>Sık Sorulan Sorular</Text>

        {faqs.map((faq) => (
          <List.Accordion
            key={faq.id}
            title={faq.question}
            left={(props) => (
              <MaterialIcons name="help-outline" size={24} color="#4A90E2" />
            )}
            style={styles.accordion}>
            <List.Item
              description={faq.answer}
              descriptionNumberOfLines={0}
              descriptionStyle={styles.answer}
            />
          </List.Accordion>
        ))}

        <Card style={styles.tutorialCard}>
          <Card.Content>
            <View style={styles.contactHeader}>
              <MaterialIcons name="play-circle-filled" size={24} color="#4A90E2" />
              <Text style={styles.contactTitle}>Video Rehberler</Text>
            </View>
            <Text style={styles.tutorialText}>
              Uygulamamızı nasıl kullanacağınızı öğrenmek için video rehberlerimizi
              izleyebilirsiniz.
            </Text>
          </Card.Content>
        </Card>
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
  contactCard: {
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 8,
  },
  accordion: {
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  answer: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  tutorialCard: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  tutorialText: {
    fontSize: 16,
    color: '#666',
  },
}); 