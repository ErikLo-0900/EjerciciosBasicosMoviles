// 02_MiPrimerComponente/components/MiComponente.js
// Basado en el Documento: Unidad 3 - Ejercicio 2 (Página 7)

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente funcional que recibe la prop "nombre"
export default function MiComponente({ nombre }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, {nombre}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
