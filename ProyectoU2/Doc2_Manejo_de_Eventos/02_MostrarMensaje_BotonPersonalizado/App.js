// ==============================================================================
// PDF 2 - Ejemplo 1 (Variante pág. 7): Personalizando un Botón con TouchableOpacity
// ==============================================================================
// Descripción:
// El componente <Button> de React Native tiene estilos muy limitados y rígidos.
// Para diseñar botones 100% personalizados se usa <TouchableOpacity>, que:
// 1. Permite aplicar cualquier estilo de StyleSheet (colores, padding, bordes).
// 2. Proporciona una respuesta visual bajando su opacidad al ser tocado.
// 3. Maneja el evento 'onPress' exactamente igual que un Button convencional.
// ==============================================================================

import React, { useState } from 'react';
// Importamos TouchableOpacity para crear el botón personalizado
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('¡Hola, mundo!');
  };

  return (
    <View style={styles.container}>
      {/* Texto que muestra el estado actual */}
      <Text style={styles.message}>{message}</Text>

      {/* Botón nativo estándar */}
      <Button title="Mostrar Mensaje" onPress={showMessage} />

      {/* 
        Botón personalizado con TouchableOpacity:
        - Envuelve a un componente <Text> con el texto del botón.
        - Aplica estilos de botón (fondo azul, padding y esquinas redondeadas).
        - Escucha el mismo evento 'onPress' para llamar a 'showMessage'.
      */}
      <TouchableOpacity style={styles.button} onPress={showMessage}>
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
    color: '#222',
  },

  // Estilos del botón personalizado TouchableOpacity
  button: {
    marginTop: 20,             // Margen superior para separarlo del primer botón
    backgroundColor: 'blue',   // Color de fondo azul
    padding: 10,               // Espacio interior (relleno)
    borderRadius: 5,           // Bordes ligeramente redondeados
    alignItems: 'center',      // Centra el texto dentro del botón
  },

  // Estilo del texto blanco dentro del botón personalizado
  text: {
    color: 'white',            // Letra de color blanco
    fontSize: 16,
    fontWeight: '600',
  },
});
