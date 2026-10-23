// ==============================================================================
// PDF 2 - Ejemplo 5: Switch de Encendido/Apagado (Lámpara interactiva)
// ==============================================================================
// Descripción:
// En este ejercicio se implementa el componente <Switch> y el evento 'onValueChange'.
// Representa una lámpara mediante un círculo (<View>) cuyo color conmuta dinámicamente:
// - Apagado (false): color gris
// - Encendido (true): color amarillo
// Elemento nuevo de estilos: Aplicación de estilos dinámicos en arreglo:
// style={[styles.luz, { backgroundColor: isOn ? "yellow" : "gray" }]}
// ==============================================================================

import React, { useState } from 'react';
// Importamos Switch para crear el interruptor deslizante
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  /*
    Creamos una variable 'isOn' que guarda si la lámpara está encendida o apagada.
    Al inicio vale false -> apagado (explicación de la página 16).
  */
  const [isOn, setIsOn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lámpara Interactiva con Switch</Text>
      
      {/* 
        Componente View (la lámpara):
        - Dibujamos un círculo que representa la lámpara (width: 100, height: 100, borderRadius: 50).
        - Su color depende de 'isOn' usando un operador ternario:
          Si isOn es true  -> "yellow" (encendido)
          Si isOn es false -> "gray"   (apagado)
      */}
      <View
        style={[
          styles.luz,
          { backgroundColor: isOn ? 'yellow' : 'gray' }
        ]}
      />

      {/* 
        Componente Switch (el interruptor):
        - value={isOn} -> Muestra si está prendido (true) o apagado (false).
        - onValueChange={setIsOn} -> Cambia el valor de isOn automáticamente cuando el usuario lo mueve.
      */}
      <Switch
        value={isOn}
        onValueChange={setIsOn}
        trackColor={{ false: '#767577', true: '#fde047' }}
        thumbColor={isOn ? '#eab308' : '#f4f3f4'}
      />

      {/* Texto informativo del estado actual */}
      <Text style={styles.estadoTexto}>
        {isOn ? '💡 Lámpara ENCENDIDA' : '⚪ Lámpara APAGADA'}
      </Text>
    </View>
  );
}

// Estilos de las páginas 16 y 17 del documento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',     // Centra horizontalmente
    backgroundColor: '#1e293b', // Fondo oscuro para que la lámpara resalte
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 30,
  },
  luz: {
    // Un ancho y alto iguales con borderRadius al 50% genera un círculo perfecto
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 25,
    // Borde sutil para darle volumen al foco
    borderWidth: 2,
    borderColor: '#475569',
  },
  estadoTexto: {
    marginTop: 20,
    fontSize: 16,
    color: '#cbd5e1',
    fontWeight: '600',
  },
});
