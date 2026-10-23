// 03_ComponentesPersonalizados_Parte2/components/CustomInput.js
// COMPONENTE NUEVO 2 (RETO DE LA PÁGINA 9): Campo de entrada personalizado
// "Crea al menos 2 componentes nuevos personalizados (Barras de navegación, campos de entrada, Modales y diálogos, etc.)"

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: '#1E88E5',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    fontSize: 16,
    color: '#333',
  },
});
