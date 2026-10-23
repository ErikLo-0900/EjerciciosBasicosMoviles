// ==============================================================================
// Doc 1 - RETO 1 PROPUESTO 
// ==============================================================================
// Enunciado del reto:
// "1. Agrega otros componentes y estilos a tu ejercicio, revisa los anexos o
//     investigalos por tu cuenta."
//
// Componentes nuevos incorporados de los Anexos:
// 1. ScrollView: Permite desplazamiento vertical para que el contenido nunca se corte.
// 2. TouchableOpacity: Botón interactivo con efecto táctil de opacidad al tocarlo.
// 3. ActivityIndicator: Spinner nativo que indica un estado de carga.
// 4. TextInput: Campo de entrada donde el usuario puede escribir.
// 5. Switch: Interruptor para conmutar estados (activado / desactivado).
// 6. Image y Text estilizados con bordes, sombras, flex y márgenes avanzados.
// ==============================================================================

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  // Estado para el campo de texto
  const [nombre, setNombre] = useState('');
  // Estado para el switch (notificaciones activadas o desactivadas)
  const [notificaciones, setNotificaciones] = useState(false);

  // Función para manejar el botón con alerta nativa
  const handlePresionar = () => {
    Alert.alert(
      '¡Reto 1 Completado!',
      nombre ? `¡Hola ${nombre}! Has probado los nuevos componentes de los anexos.` : '¡Bienvenido a React Native con componentes avanzados!'
    );
  };

  return (
    // ScrollView: Permite deslizar la pantalla si el contenido supera el tamaño del celular
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      {/* Título principal */}
      <Text style={styles.titulo}>Reto 1: Nuevos Componentes</Text>
      <Text style={styles.subtitulo}>Explorando componentes de los Anexos</Text>

      {/* Tarjeta 1: Imagen y Presentación */}
      <View style={styles.tarjeta}>
        <Image
          source={require('./assets/camaleon.jpg')}
          style={styles.imagen}
        />
        <Text style={styles.textoTarjeta}>Hola, soy Panfilo Natera</Text>
        <Text style={styles.descripcion}>
          Ahora nuestra app cuenta con ScrollView, TextInput, TouchableOpacity y Switch.
        </Text>
      </View>

      {/* Tarjeta 2: Entrada de Texto (TextInput) */}
      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Ingresa tu nombre (TextInput):</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe aquí tu nombre..."
          placeholderTextColor="#888"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      {/* Tarjeta 3: Interruptor (Switch) */}
      <View style={[styles.tarjeta, styles.fila]}>
        <Text style={styles.etiqueta}>Activar notificaciones (Switch):</Text>
        <Switch
          value={notificaciones}
          onValueChange={setNotificaciones}
          thumbColor={notificaciones ? '#2196F3' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Tarjeta 4: Botón táctil personalizado (TouchableOpacity) */}
      <TouchableOpacity style={styles.botonPersonalizado} onPress={handlePresionar}>
        <Text style={styles.textoBoton}>Presióname (TouchableOpacity)</Text>
      </TouchableOpacity>

      {/* Sección 5: Indicador de carga (ActivityIndicator) */}
      <View style={styles.seccionCarga}>
        <Text style={styles.textoCarga}>Cargando datos del sistema...</Text>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>

      <StatusBar style="dark" />
    </ScrollView>
  );
}

// ==============================================================================
// HOJA DE ESTILOS: Aplicación de propiedades analizadas en los Anexos 
// ==============================================================================
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 45,
    paddingHorizontal: 20,
    backgroundColor: '#eef4f8', // Fondo suave
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold', // Grosor de texto en negrita
    color: '#1a365d',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#4a5568',
    marginBottom: 20,
    textAlign: 'center',
  },
  tarjeta: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,      // Bordes redondeados
    padding: 16,            // Relleno interno
    marginBottom: 16,       // Margen inferior entre bloques
    alignItems: 'center',
    // Sombras para destacar la tarjeta
    elevation: 3,           // Sombra en Android
    shadowColor: '#000',    // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  fila: {
    // flexDirection: 'row' organiza los elementos en línea horizontal
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagen: {
    width: 140,
    height: 140,
    borderRadius: 70, // Círculo perfecto (mitad del ancho/alto)
    marginBottom: 12,
  },
  textoTarjeta: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b6cb0',
  },
  descripcion: {
    fontSize: 14,
    color: '#4a5568',
    textAlign: 'center',
    marginTop: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,         // Grosor de borde
    borderColor: '#cbd5e0', // Color del borde
    borderRadius: 8,        // Bordes redondeados
    paddingHorizontal: 12,  // Espacio interno a los lados
    backgroundColor: '#f7fafc',
    fontSize: 15,
  },
  botonPersonalizado: {
    width: '100%',
    backgroundColor: '#2b6cb0', // Azul elegante
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seccionCarga: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  textoCarga: {
    fontSize: 13,
    color: '#718096',
    marginBottom: 8,
  },
});
