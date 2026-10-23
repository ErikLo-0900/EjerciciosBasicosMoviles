// 02_MiPrimerComponente/App.js
// Basado en el Documento: Unidad 3 - Ejercicios 2 y 3 (Páginas 7 a 11)
// Demuestra el uso de componentes en archivos separados (MiComponente y ComponenteSuma)
// y resuelve el Ejercicio 2 de la página 12 ("Crea un proyecto nuevo donde implementes al menos 2 componentes en archivos separados").

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import MiComponente from './components/MiComponente';
import ComponenteSuma from './components/ComponenteSuma';

export default function App() {
  // Estados para el saludo y los números a sumar
  const [nombre, setNombre] = useState('');
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* SECCIÓN 1: Saludo con MiComponente */}
        <Text style={styles.title}>Componente Saluda</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        {/* Renderizado condicional: solo se muestra si hay texto */}
        {nombre ? <MiComponente nombre={nombre} /> : null}

        {/* SECCIÓN 2: Suma con ComponenteSuma */}
        <Text style={styles.title}>Componente Suma</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa numero 1"
          value={numero1}
          keyboardType="numeric"
          onChangeText={(text) => setNumero1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresa numero 2"
          value={numero2}
          keyboardType="numeric"
          onChangeText={(text) => setNumero2(text)}
        />

        {/* Renderizado condicional: se muestra solo cuando ambos campos tienen valor */}
        {(numero1 !== '' && numero2 !== '') ? (
          <ComponenteSuma
            numero1={parseFloat(numero1) || 0}
            numero2={parseFloat(numero2) || 0}
          />
        ) : null}

        {/* Botón para reiniciar todos los campos */}
        <View style={styles.botonContainer}>
          <Button
            title="Limpiar inputs"
            onPress={() => {
              setNombre('');
              setNumero1('');
              setNumero2('');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  botonContainer: {
    marginTop: 15,
    width: '100%',
  },
});
