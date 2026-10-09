// ==============================================================================
// DOC 2 - EJERCICIO 2 PROPUESTO : Contador con TypeScript (.tsx)
// ==============================================================================
// Enunciado del ejercicio:
// "2. Elige uno de los ejercicios anteriores y crealo con typescript."
//
// Ejercicio seleccionado:
// Ejemplo 2 (El Contador) convertido y mejorado a TypeScript.
//
// Conceptos de TypeScript aplicados:
// 1. Tipado explícito de estados: useState<number>(0).
// 2. Tipado explícito de funciones manejadoras de eventos: (): void.
// 3. Tipado del valor devuelto por el componente: React.JSX.Element.
// 4. Se agregan controles tipados para Sumar (+1), Restar (-1) y Reiniciar (0).
// ==============================================================================

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App(): React.JSX.Element {
  // Estado con tipado genérico explícito en TypeScript: <number>
  // Garantiza que solo se puedan almacenar números en 'count'
  const [count, setCount] = useState<number>(0);

  // Función tipada con retorno void (no devuelve valor, solo ejecuta una acción)
  const incrementar = (): void => {
    setCount(count + 1);
  };

  const decrementar = (): void => {
    setCount(count - 1);
  };

  const reiniciar = (): void => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador en TypeScript</Text>
      <Text style={styles.subtitulo}>Ejercicio 2 propuesto (Página 18)</Text>

      {/* Tarjeta del visor del contador */}
      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Valor actual:</Text>
        <Text
          style={[
            styles.numeroContador,
            { color: count > 0 ? '#16a34a' : count < 0 ? '#dc2626' : '#2563eb' }
          ]}
        >
          {count}
        </Text>
        <Text style={styles.infoTexto}>
          You pressed the button {count} times
        </Text>
      </View>

      {/* Botonera de control con TouchableOpacity */}
      <View style={styles.filaBotones}>
        <TouchableOpacity style={[styles.boton, styles.botonMenos]} onPress={decrementar}>
          <Text style={styles.textoBoton}>- 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonReset]} onPress={reiniciar}>
          <Text style={styles.textoBoton}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonMas]} onPress={incrementar}>
          <Text style={styles.textoBoton}>+ 1</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 30,
  },
  tarjeta: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 30,
  },
  etiqueta: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  numeroContador: {
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoTexto: {
    fontSize: 14,
    color: '#475569',
  },
  filaBotones: {
    flexDirection: 'row',
    gap: 12,
    width: '85%',
    justifyContent: 'center',
  },
  boton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonMenos: {
    backgroundColor: '#ef4444',
  },
  botonReset: {
    backgroundColor: '#64748b',
  },
  botonMas: {
    backgroundColor: '#10b981',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
