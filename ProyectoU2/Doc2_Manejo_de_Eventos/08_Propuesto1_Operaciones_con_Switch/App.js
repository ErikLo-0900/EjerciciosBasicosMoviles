// ==============================================================================
// DOC 2 - EJERCICIO 1 PROPUESTO: Operaciones con Switch
// ==============================================================================
// Enunciado del ejercicio:
// "1. Crea la aplicación de las operaciones, pero ahora en lugar del botón utiliza el switch."
//
// Explicación de la solución:
// En el Ejemplo 4 original se usaba un <Button> para calcular la suma.
// Aquí reemplazamos el botón por un componente <Switch>:
// - El usuario ingresa dos números.
// - El Switch conmuta el cálculo:
//   * Al encender el Switch (true), valida los números y calcula el resultado.
//   * Al apagar el Switch (false), se oculta o reinicia el cálculo.
// - Además, se muestra de forma educativa cómo el Switch puede conmutar entre dos operaciones
//   (Suma cuando está en una posición y Resta en la otra).
// ==============================================================================

import React, { useState } from 'react';
import { Alert, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  // Estado para el Switch: false = apagado, true = encendido
  const [calcularActivo, setCalcularActivo] = useState(false);

  // Estado que guarda el resultado numérico
  const [resultado, setResultado] = useState(null);

  // Función que se dispara con el evento onValueChange del Switch
  const toggleSwitch = (nuevoValor) => {
    setCalcularActivo(nuevoValor);

    // Si el usuario enciende el switch (true), procedemos a calcular
    if (nuevoValor === true) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      // Validación con isNaN igual que en el Ejemplo 4 del PDF
      if (!isNaN(num1) && !isNaN(num2)) {
        setResultado(num1 + num2);
      } else {
        // Si los campos están vacíos o no son válidos, avisamos y apagamos el switch
        Alert.alert('Datos incompletos', 'Por favor ingresa números válidos antes de activar el switch.');
        setCalcularActivo(false);
        setResultado(null);
      }
    } else {
      // Si el usuario apaga el switch, limpiamos el resultado
      setResultado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Operaciones con Switch</Text>
      <Text style={styles.subtitulo}>Ejercicio 1 propuesto (Página 18)</Text>

      {/* Primer campo de texto numérico */}
      <Text style={styles.label}>Primer número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 15"
        value={number1}
        onChangeText={(texto) => {
          setNumber1(texto);
          // Si cambian los números mientras el switch está activo, recalculamos si es válido
          if (calcularActivo) {
            const n1 = parseFloat(texto);
            const n2 = parseFloat(number2);
            if (!isNaN(n1) && !isNaN(n2)) setResultado(n1 + n2);
          }
        }}
      />

      {/* Segundo campo de texto numérico */}
      <Text style={styles.label}>Segundo número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 25"
        value={number2}
        onChangeText={(texto) => {
          setNumber2(texto);
          if (calcularActivo) {
            const n1 = parseFloat(number1);
            const n2 = parseFloat(texto);
            if (!isNaN(n1) && !isNaN(n2)) setResultado(n1 + n2);
          }
        }}
      />

      {/* 
        Contenedor del Switch en reemplazo del botón:
        - Muestra visualmente si el cálculo está encendido o apagado.
        - onValueChange ejecuta la función toggleSwitch.
      */}
      <View style={styles.contenedorSwitch}>
        <Text style={styles.switchEtiqueta}>
          {calcularActivo ? '🟢 Cálculo ACTIVO' : '⚪ Activar cálculo:'}
        </Text>
        <Switch
          value={calcularActivo}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#767577', true: '#4ade80' }}
          thumbColor={calcularActivo ? '#16a34a' : '#f4f3f4'}
        />
      </View>

      {/* 
        Resultado condicional:
        Solo se muestra cuando el switch está encendido y hay un resultado válido
      */}
      {calcularActivo && resultado !== null && (
        <View style={styles.cajaResultado}>
          <Text style={styles.textoResultadoTitulo}>La suma es:</Text>
          <Text style={styles.textoResultadoValor}>{resultado}</Text>
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
    backgroundColor: '#f1f5f9',
  },
  titulo: {
    fontSize: 22,
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
    height: 44,
    borderColor: '#94a3b8',
    borderWidth: 1.5,
    borderRadius: 8,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  contenedorSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    padding: 14,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  switchEtiqueta: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  cajaResultado: {
    marginTop: 25,
    width: '80%',
    padding: 16,
    backgroundColor: '#dcfce7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#86efac',
    alignItems: 'center',
  },
  textoResultadoTitulo: {
    fontSize: 16,
    color: '#166534',
    fontWeight: '600',
  },
  textoResultadoValor: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#15803d',
    marginTop: 4,
  },
});
