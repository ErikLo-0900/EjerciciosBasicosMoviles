// ==============================================================================
// PDF 2 - EJERCICIO PROPUESTO (Página 15): Calculadora con 4 Operaciones
// ==============================================================================
// Enunciado del ejercicio:
// "Ejercicio: Agrega al menos 3 operaciones más al ejercicio."
//
// Solución implementada:
// Se agregan las 3 operaciones matemáticas fundamentales además de la Suma:
// 1. Resta (num1 - num2)
// 2. Multiplicación (num1 * num2)
// 3. División (num1 / num2), con validación para evitar división entre cero.
// Además se incluye un botón para limpiar los campos y reiniciar el estado.
// ==============================================================================

import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operacionRealizada, setOperacionRealizada] = useState('');

  // Función general para validar que ambos números sean válidos
  const obtenerNumerosValidos = () => {
    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);

    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert('Error', 'Por favor ingresa números válidos en ambos campos.');
      return null;
    }
    return { n1, n2 };
  };

  // 1. Operación Suma (+)
  const calcularSuma = () => {
    const valores = obtenerNumerosValidos();
    if (valores) {
      setResultado(valores.n1 + valores.n2);
      setOperacionRealizada('Suma');
    }
  };

  // 2. Operación Resta (-)
  const calcularResta = () => {
    const valores = obtenerNumerosValidos();
    if (valores) {
      setResultado(valores.n1 - valores.n2);
      setOperacionRealizada('Resta');
    }
  };

  // 3. Operación Multiplicación (x)
  const calcularMultiplicacion = () => {
    const valores = obtenerNumerosValidos();
    if (valores) {
      setResultado(valores.n1 * valores.n2);
      setOperacionRealizada('Multiplicación');
    }
  };

  // 4. Operación División (/)
  const calcularDivision = () => {
    const valores = obtenerNumerosValidos();
    if (valores) {
      // Validación especial: No se puede dividir entre cero
      if (valores.n2 === 0) {
        Alert.alert('Error Matemático', 'No es posible dividir entre cero.');
        return;
      }
      // Redondeamos a 4 decimales si tiene muchos dígitos
      const div = valores.n1 / valores.n2;
      setResultado(Number.isInteger(div) ? div : parseFloat(div.toFixed(4)));
      setOperacionRealizada('División');
    }
  };

  // Botón para reiniciar/limpiar
  const limpiar = () => {
    setNumber1('');
    setNumber2('');
    setResultado(null);
    setOperacionRealizada('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Básica</Text>
      <Text style={styles.subtitulo}>Ejercicio propuesto pág. 15 (4 operaciones)</Text>

      {/* Primer campo */}
      <Text style={styles.label}>Primer número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 10"
        value={number1}
        onChangeText={setNumber1}
      />

      {/* Segundo campo */}
      <Text style={styles.label}>Segundo número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 5"
        value={number2}
        onChangeText={setNumber2}
      />

      {/* Panel de Botones de Operaciones */}
      <Text style={styles.labelOperaciones}>Selecciona una operación:</Text>
      <View style={styles.filaBotones}>
        <TouchableOpacity style={[styles.boton, styles.botonSuma]} onPress={calcularSuma}>
          <Text style={styles.textoBoton}>+ Sumar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonResta]} onPress={calcularResta}>
          <Text style={styles.textoBoton}>- Restar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filaBotones}>
        <TouchableOpacity style={[styles.boton, styles.botonMulti]} onPress={calcularMultiplicacion}>
          <Text style={styles.textoBoton}>× Multiplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonDiv]} onPress={calcularDivision}>
          <Text style={styles.textoBoton}>÷ Dividir</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de limpiar */}
      <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
        <Text style={styles.textoBotonLimpiar}>Limpiar / Reiniciar</Text>
      </TouchableOpacity>

      {/* Resultado renderizado condicionalmente */}
      {resultado !== null && (
        <View style={styles.cajaResultado}>
          <Text style={styles.etiquetaResultado}>Resultado de la {operacionRealizada}:</Text>
          <Text style={styles.valorResultado}>{resultado}</Text>
        </View>
      )}
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#334155',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    height: 45,
    borderColor: '#cbd5e1',
    borderWidth: 1.5,
    borderRadius: 8,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  labelOperaciones: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginVertical: 10,
  },
  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 10,
    width: '80%',
  },
  boton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonSuma: { backgroundColor: '#2563eb' },
  botonResta: { backgroundColor: '#d97706' },
  botonMulti: { backgroundColor: '#7c3aed' },
  botonDiv: { backgroundColor: '#059669' },
  textoBoton: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  botonLimpiar: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  textoBotonLimpiar: {
    color: '#475569',
    fontWeight: '600',
  },
  cajaResultado: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#ecfdf5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    alignItems: 'center',
    width: '80%',
  },
  etiquetaResultado: {
    fontSize: 15,
    color: '#065f46',
    fontWeight: '600',
  },
  valorResultado: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#047857',
    marginTop: 4,
  },
});
