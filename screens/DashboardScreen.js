// DashboardScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>XP BET SAFE</Text>
      <Text style={styles.subtitle}>Bem-vindo à sua central de bem-estar!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alertas')}>
        <Text style={styles.buttonText}>Ver Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Atividades')}>
        <Text style={styles.buttonText}>Atividades Alternativas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Relatorios')}>
        <Text style={styles.buttonText}>Relatórios e Autoavaliação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Suporte')}>
        <Text style={styles.buttonText}>Agendar Suporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    justifyContent: 'center'
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
    marginBottom: 32
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
