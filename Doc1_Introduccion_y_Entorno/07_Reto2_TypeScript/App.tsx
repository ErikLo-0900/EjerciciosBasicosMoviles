// ==============================================================================
// Doc 1 - RETO 2 PROPUESTO 
// ==============================================================================
// Enunciado del reto:
// "2. Crea un proyecto con typescript con características similares a las del
//     ejemplo anterior.
//     Comando: npx create-expo-app@latest MiAppTypeScript --template blank-typescript"
//
// ¿Qué aporta TypeScript ?:
// TypeScript es un superset de JavaScript desarrollado por Microsoft que añade
// tipado estático y comprobación temprana de errores antes de ejecutar el código.
// ==============================================================================

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Definición de una interfaz de TypeScript para tipar datos del usuario
interface UsuarioPerfil {
  nombre: string;
  rol: string;
  clicsIniciales: number;
}

export default function App(): React.JSX.Element {
  // Datos tipados con la interfaz definida
  const datosUsuario: UsuarioPerfil = {
    nombre: 'Panfilo Natera',
    rol: 'Desarrollador Móvil React Native',
    clicsIniciales: 0,
  };

  // Estado con tipado estático explícito en TypeScript: <number>
  const [contadorClics, setContadorClics] = useState<number>(datosUsuario.clicsIniciales);

  // Función con tipado estático en parámetros y valor de retorno
  // Similar al ejemplo de la pág. 5: function sumar(a: number, b: number): number
  const incrementarContador = (): void => {
    const nuevoTotal: number = contadorClics + 1;
    setContadorClics(nuevoTotal);
    Alert.alert('Evento TypeScript', `¡Has presionado el botón ${nuevoTotal} vez/veces!`);
  };

  return (
    <View style={styles.container}>
      {/* Textos principales */}
      <Text style={styles.titulo}>Hola, soy {datosUsuario.nombre}!!!</Text>
      <Text style={styles.subtitulo}>{datosUsuario.rol}</Text>
      <Text style={styles.textDestacado}>App construida con TypeScript (.tsx)</Text>

      {/* Segundo bloque tipado con imagen y botón interactivo */}
      <View style={styles.segundoBloque}>
        <Text style={styles.textSecundario}>Bloque secundario con tipado seguro</Text>

        {/* Imagen del proyecto */}
        <Image
          source={require('./assets/camaleon.jpg')}
          style={styles.logo}
        />

        {/* Botón táctil */}
        <TouchableOpacity style={styles.boton} onPress={incrementarContador}>
          <Text style={styles.textoBoton}>Presióname (Clics: {contadorClics})</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Hoja de estilos tipada automáticamente por React Native StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6', // Fondo azul claro igual al PDF
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#334155',
    marginVertical: 4,
    textAlign: 'center',
  },
  textDestacado: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  segundoBloque: {
    backgroundColor: 'yellow', // Fondo amarillo del PDF
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '90%',
  },
  textSecundario: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 15,
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#0284c7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
