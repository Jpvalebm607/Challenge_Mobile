// AtividadesScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AtividadesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>XP BET SAFE</Text>
      <Text style={styles.subtitle}>Sugestões para substituir o impulso de apostar:</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎧 Ouvir Música Relaxante</Text>
        <Text style={styles.cardText}>Experimente focar sua mente em algo leve e calmante.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏃‍♂️ Fazer uma Caminhada</Text>
        <Text style={styles.cardText}>Mudar de ambiente ajuda a controlar o impulso.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📚 Ler um Livro</Text>
        <Text style={styles.cardText}>Leia algo que te inspire ou distraia.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧘 Meditar por 5 minutos</Text>
        <Text style={styles.cardText}>Respiração profunda e foco ajudam no controle emocional.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    flexGrow: 1
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 24
  },
  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardText: {
    fontSize: 14,
    color: '#444'
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16
  }
});
