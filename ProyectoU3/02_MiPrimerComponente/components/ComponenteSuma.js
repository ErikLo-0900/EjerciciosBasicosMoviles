// 02_MiPrimerComponente/components/ComponenteSuma.js
// Basado en el Documento: Unidad 3 - Ejemplo 3 (Página 10)

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente funcional que recibe las props "numero1" y "numero2"
export default function ComponenteSuma({ numero1, numero2 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resultado: {numero1 + numero2}!</Text>
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
