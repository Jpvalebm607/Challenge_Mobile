// SuporteScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function SuporteScreen({ navigation }) {
  const handleEmailPress = () => {
    Linking.openURL('mailto:suporte@xpbetsafe.com?subject=Ajuda&body=Descreva seu problema:');
  };

  const handleWhatsappPress = () => {
    Linking.openURL('https://wa.me/5500000000000'); // Substitua com número real
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>XP BET SAFE</Text>
      <Text style={styles.subtitle}>Estamos aqui para ajudar você!</Text>

      <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
        <Text style={styles.buttonText}>Enviar Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleWhatsappPress}>
        <Text style={styles.buttonText}>Falar via WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
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
    color: '#555',
    textAlign: 'center',
    marginBottom: 24
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  secondaryButton: {
    padding: 12,
    alignItems: 'center'
  },
  secondaryButtonText: {
    color: '#0061FF',
    fontSize: 14
  }
});
