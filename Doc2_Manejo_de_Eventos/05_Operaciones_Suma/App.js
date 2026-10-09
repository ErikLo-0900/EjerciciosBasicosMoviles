// ==============================================================================
// PDF 2 - Ejemplo 4: Operaciones Numéricas (Suma) y Validación con isNaN
// ==============================================================================
// Descripción:
// En este ejercicio se implementa una suma de dos valores numéricos ingresados por el usuario.
// Elementos clave:
// 1. keyboardType='numeric': Abre el teclado numérico en el móvil.
// 2. parseFloat(): Convierte las cadenas de texto del TextInput en números decimales.
// 3. !isNaN(): Valida que los valores ingresados sean números reales antes de operar.
// 4. Renderizado condicional: {sum !== null && (<Text>...)} para mostrar el resultado
//    únicamente después de haber calculado.
// ==============================================================================

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Estados para almacenar el texto ingresado en cada casilla
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  // Estado para el resultado (inicia en null para no mostrar nada al principio)
  const [sum, setSum] = useState(null);

  // Función que procesa y valida la suma
  const handleSum = () => {
    // Convertimos los textos en números flotantes (decimales)
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // isNaN verifica si el valor "No es un Número" (Not a Number)
    // Con !isNaN(num1) verificamos que num1 SÍ sea un número válido
    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2); // Almacenamos el resultado de la suma
    } else {
      alert('Please enter valid numbers'); // Mensaje de advertencia si algún campo no es válido
    }
  };

  return (
    <View style={styles.container}>
      {/* Primer campo */}
      <Text style={styles.label}>Enter the first number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Muestra el teclado numérico en el celular
        value={number1}        // Enlaza el valor del input con el estado
        onChangeText={setNumber1}
      />

      {/* Segundo campo */}
      <Text style={styles.label}>Enter the second number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      {/* Botón de cálculo */}
      <Button title="Calculate Sum" onPress={handleSum} />

      {/* 
        Renderizado Condicional:
        Solo se dibuja este <Text> si 'sum' ya no es null (es decir, ya se hizo un cálculo).
      */}
      {sum !== null && (
        <Text style={styles.result}>The sum is: {sum}</Text>
      )}
    </View>
  );
}

// Estilos de la página 15 del documento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center',     // Centrado horizontal
    padding: 16,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#2e7d32', // Verde para el resultado
  },
});
