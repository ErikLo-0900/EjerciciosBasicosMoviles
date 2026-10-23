// 03_ComponentesPersonalizados_Parte2/components/InfoCard.js
// Basado en el Documento: Unidad 3 - Componentes personalizados parte II (Página 8)

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoCard({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
