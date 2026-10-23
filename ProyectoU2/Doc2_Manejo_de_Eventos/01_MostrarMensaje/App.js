// ==============================================================================
// PDF 2 - Ejemplo 1: Mostrar Mensaje y Manejo de Estado con useState
// ==============================================================================
// Descripción:
// En este ejercicio se introduce el concepto de ESTADO (state) en React Native
// usando el hook 'useState'.
// Al presionar el botón, se dispara el evento 'onPress' que actualiza la variable
// de estado y provoca que la interfaz se vuelva a renderizar con el nuevo texto.
// ==============================================================================

// 1. IMPORTACIONES
// useState: Hook fundamental de React que permite crear y actualizar variables de estado.
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// 2. COMPONENTE PRINCIPAL
export default function App() {
  /*
    Sintaxis de useState (explicación de la página 5 del documento):
    const [stateVariable, setStateFunction] = useState(initialValue);

    - message: Es la variable de estado que contiene el valor actual (inicia como cadena vacía '').
    - setMessage: Es la función que utilizamos para cambiar el valor de 'message'.
    - '': Valor inicial de la variable (cadena vacía).
  */
  const [message, setMessage] = useState('');

  // Función que se ejecuta cuando el usuario presiona el botón
  const showMessage = () => {
    // Actualizamos el estado con el texto '¡Hola, mundo!'
    setMessage('¡Hola, mundo!');
  };

  return (
    <View style={styles.container}>
      {/* 
        Muestra el contenido de la variable 'message'.
        Al inicio está vacía, pero cuando cambia mediante setMessage,
        React repinta automáticamente la pantalla con el nuevo valor.
      */}
      <Text style={styles.message}>{message}</Text>

      {/* 
        Componente Button con evento 'onPress':
        onPress={showMessage} conecta el toque del usuario con la función showMessage.
      */}
      <Button title="Mostrar Mensaje" onPress={showMessage} />
    </View>
  );
}

// 3. ESTILOS (explicados en la página 6 del documento)
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Ocupa todo el alto y ancho disponible
    justifyContent: 'center',    // Centra verticalmente los elementos
    alignItems: 'center',        // Centra horizontalmente los elementos
    backgroundColor: '#f0f0f0',  // Fondo gris muy claro
  },
  message: {
    fontSize: 24,                // Tamaño de fuente grande para el texto
    marginBottom: 20,            // Espacio de separación inferior de 20px antes del botón
    color: '#333',
  },
});
