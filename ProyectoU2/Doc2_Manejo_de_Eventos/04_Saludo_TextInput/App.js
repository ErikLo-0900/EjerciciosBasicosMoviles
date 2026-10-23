// ==============================================================================
// PDF 2 - Ejemplo 3: Saludo con TextInput y Evento onChangeText
// ==============================================================================
// Descripción:
// En este ejercicio se muestra cómo capturar lo que el usuario teclea en el celular:
// 1. <TextInput>: Campo editable por el usuario.
// 2. onChangeText: Evento que se dispara automáticamente en cada letra o carácter escrito,
//    pasando el texto actualizado a setNombre.
// 3. Al pulsar el botón "Saludar", se genera un saludo dinámico usando template literals:
//    `Hola, ${nombre}!` que se almacena en el estado 'saludo'.
// ==============================================================================

import React, { useState } from 'react';
// Importamos TextInput para permitir la entrada de texto por teclado
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Estado para guardar el texto que el usuario va escribiendo
  const [nombre, setNombre] = useState('');

  // Estado para guardar el mensaje final que se mostrará al pulsar el botón
  const [saludo, setSaludo] = useState('');

  return (
    <View style={styles.container}>
      {/* 
        Componente TextInput:
        - placeholder: Texto guía en gris que desaparece al escribir.
        - onChangeText={setNombre}: En React Native, a diferencia de React web donde se usa
          e.target.value, aquí onChangeText pasa directamente el string escrito a la función setNombre.
      */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        onChangeText={setNombre}
      />

      {/* 
        Evento directo en línea (inline):
        En lugar de declarar una función fuera, se pasa directamente la función flecha:
        () => setSaludo(`Hola, ${nombre}!`)
      */}
      <Button
        title="Saludar"
        onPress={() => setSaludo(`Hola, ${nombre}!`)}
      />

      {/* Muestra el saludo generado */}
      <Text style={styles.textoSaludo}>{saludo}</Text>
    </View>
  );
}

// Estilos definidos en la página 11 del documento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center',     // Centrado horizontal
    backgroundColor: '#ffffff',
  },
  input: {
    borderWidth: 1,           // Borde de 1 pixel alrededor del campo
    borderColor: '#000000',   // Color negro para el borde
    padding: 8,               // Espacio interno para que el texto no toque el borde
    width: 200,               // Ancho fijo de 200 puntos
    marginBottom: 10,         // Separación de 10 puntos con el botón
    borderRadius: 4,          // Esquinas ligeramente redondeadas
  },
  textoSaludo: {
    marginTop: 15,            // Separación con el botón
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0055aa',
  },
});
