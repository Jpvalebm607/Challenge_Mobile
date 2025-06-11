// RelatoriosScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const relatorios = [
  { id: '1', titulo: 'Relatório Semanal - 01/06 a 07/06' },
  { id: '2', titulo: 'Relatório Mensal - Maio' },
  { id: '3', titulo: 'Relatório Especial - Final de Campeonato' }
];

export default function RelatoriosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>XP BET SAFE</Text>
      <Text style={styles.subtitle}>Relatórios Disponíveis</Text>

      <FlatList
        data={relatorios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24
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
  list: {
    flexGrow: 0,
    marginBottom: 24
  },
  item: {
    backgroundColor: '#F0F0F0',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12
  },
  itemText: {
    fontSize: 16,
    color: '#000'
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
