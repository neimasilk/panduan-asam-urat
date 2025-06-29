import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Button from '../components/Button';
import {NavigationProps} from '../types';

const HomeScreen: React.FC<NavigationProps> = ({navigation: _navigation}) => {
  const navigateToFoodTracker = () => {
    // navigation.navigate('FoodTracker');
    console.log('Navigate to Food Tracker');
  };

  const navigateToSymptomJournal = () => {
    // navigation.navigate('SymptomJournal');
    console.log('Navigate to Symptom Journal');
  };

  const navigateToFluidTracker = () => {
    // navigation.navigate('FluidTracker');
    console.log('Navigate to Fluid Tracker');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Panduan Asam Urat</Text>
          <Text style={styles.subtitle}>
            Kelola diet dan gejala asam urat Anda dengan mudah
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>📊 Pelacak Makanan</Text>
            <Text style={styles.featureDescription}>
              Pantau kandungan purin dalam makanan harian Anda
            </Text>
            <Button
              title="Buka Pelacak"
              onPress={navigateToFoodTracker}
              style={styles.featureButton}
            />
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>📝 Jurnal Gejala</Text>
            <Text style={styles.featureDescription}>
              Catat gejala dan tingkat nyeri untuk memantau kondisi
            </Text>
            <Button
              title="Buka Jurnal"
              onPress={navigateToSymptomJournal}
              style={styles.featureButton}
            />
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>💧 Pelacak Cairan</Text>
            <Text style={styles.featureDescription}>
              Pastikan asupan cairan harian Anda mencukupi
            </Text>
            <Button
              title="Buka Pelacak"
              onPress={navigateToFluidTracker}
              style={styles.featureButton}
            />
          </View>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Tips Hari Ini</Text>
          <Text style={styles.tipText}>
            Minum minimal 8 gelas air putih setiap hari untuk membantu
            mengeluarkan asam urat dari tubuh.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 16,
  },
  featureButton: {
    marginTop: 8,
  },
  tipCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1565C0',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#1565C0',
    lineHeight: 20,
  },
});

export default HomeScreen;