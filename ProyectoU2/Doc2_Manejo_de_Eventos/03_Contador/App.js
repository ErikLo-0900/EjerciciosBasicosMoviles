// ==============================================================================
// PDF 2 - Ejemplo 2: Contador Numérico con useState
// ==============================================================================
// Descripción:
// En este ejercicio se maneja un estado numérico inicializado en 0.
// Cada vez que se presiona el botón "Press me", se llama a la función updateCount,
// la cual ejecuta setCount(count + 1). React detecta la actualización e incrementa
// el número mostrado en la interfaz en tiempo real.
// ==============================================================================

import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // setCount es una función que permite actualizar el estado count.
  // Inicializamos el estado en 0 (tipo número).
  const [count, setCount] = useState(0);

  // Función encargada de sumar 1 al contador
  const updateCount = () => {
    setCount(count + 1);
  };

  // Función que retorna el contenido que se muestra en la pantalla
  return (
    <View style={styles.container}>
      {/* 
        Interpolación de la variable {count} dentro del texto:
        Muestra la cantidad de veces que se ha pulsado el botón.
      */}
      <Text style={styles.counterText}>You pressed the button {count} times</Text>

      {/* Botón que ejecuta updateCount en cada pulsación */}
      <Button title="Press me" onPress={updateCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center',     // Centrado horizontal
    backgroundColor: '#ffffff',
  },
  counterText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#333333',
  },
});
