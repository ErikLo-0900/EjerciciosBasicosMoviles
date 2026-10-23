// 03_ComponentesPersonalizados_Parte2/components/CustomHeader.js
// COMPONENTE NUEVO 1 (RETO DE LA PÁGINA 9): Barra de navegación / Encabezado
// "Crea al menos 2 componentes nuevos personalizados (Barras de navegación, campos de entrada, Modales y diálogos, etc.)"

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomHeader({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1E88E5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
