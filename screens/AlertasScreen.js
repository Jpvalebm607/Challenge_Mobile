// AlertasScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AlertasScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>XP BET SAFE</Text>
      <Text style={styles.subtitle}>Alertas de comportamento em risco</Text>

      <View style={styles.alertBox}>
        <Text style={styles.alertText}>🔴 Você apostou 5 vezes nas últimas 2 horas. Cuidado!</Text>
      </View>

      <View style={styles.alertBox}>
        <Text style={styles.alertText}>🟡 Você acessou plataformas de aposta mais de 10 vezes hoje.</Text>
      </View>

      <View style={styles.alertBox}>
        <Text style={styles.alertText}>🟢 Seu comportamento está dentro do padrão saudável.</Text>
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
    marginBottom: 24
  },
  alertBox: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  alertText: {
    fontSize: 15,
    color: '#333'
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
