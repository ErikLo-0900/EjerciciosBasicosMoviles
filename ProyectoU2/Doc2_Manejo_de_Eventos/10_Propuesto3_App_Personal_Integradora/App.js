// ==============================================================================
// DOC 2 - EJERCICIO 3 PROPUESTO: Aplicación Personal Integradora
// ==============================================================================
// Enunciado del ejercicio:
// "3. Crea una aplicación personal que incluya los componentes analizados hasta
//     el momento: View, Text, TextInput, Button, StyleSheet y useState.
//     Eventos: onPress, onChangeText, onValueChange."
//
// Proyecto Personal: "Tarjeta de Perfil y Preferencias con Modo Oscuro"
//
// Componentes y conceptos incluidos:
// - View: Estructura general, tarjetas y filas.
// - Text: Títulos, etiquetas y visualización dinámica de datos.
// - TextInput: Campo para capturar el nombre y la meta personal (con onChangeText).
// - Switch: Interruptor para activar/desactivar Modo Oscuro (con onValueChange).
// - Button: Botón para guardar y confirmar los cambios (con onPress).
// - StyleSheet: Hoja de estilos completa con variantes clara y oscura.
// - useState: Control de 4 estados (nombre, meta, esModoOscuro, perfilGuardado).
// ==============================================================================

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  // 1. ESTADOS (useState)
  // Estado para el nombre del usuario
  const [nombre, setNombre] = useState('');
  // Estado para la meta u ocupación
  const [meta, setMeta] = useState('');
  // Estado booleano para el Switch de Modo Oscuro
  const [esModoOscuro, setEsModoOscuro] = useState(false);
  // Estado para verificar si el usuario ya guardó su perfil
  const [perfilGuardado, setPerfilGuardado] = useState(false);

  // 2. FUNCIÓN PARA EL BOTÓN (onPress)
  const guardarPerfil = () => {
    if (nombre.trim() === '') {
      Alert.alert('Atención', 'Por favor ingresa tu nombre antes de guardar.');
      return;
    }
    setPerfilGuardado(true);
    Alert.alert('¡Perfil Actualizado!', `Bienvenido ${nombre}, tus preferencias han sido guardadas.`);
  };

  // Colores dinámicos basados en el estado del Switch (esModoOscuro)
  const colorFondo = esModoOscuro ? '#0f172a' : '#f1f5f9';
  const colorTarjeta = esModoOscuro ? '#1e293b' : '#ffffff';
  const colorTexto = esModoOscuro ? '#f8fafc' : '#0f172a';
  const colorSubtexto = esModoOscuro ? '#94a3b8' : '#64748b';
  const colorInputFondo = esModoOscuro ? '#334155' : '#f8fafc';
  const colorInputTexto = esModoOscuro ? '#ffffff' : '#000000';

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>

      {/* Título y subtítulo principal */}
      <Text style={[styles.titulo, { color: colorTexto }]}>Mi Perfil Personal</Text>
      <Text style={[styles.subtitulo, { color: colorSubtexto }]}>
        Aplicación Integradora (Ejercicio 3 - Pág. 18)
      </Text>

      {/* Tarjeta de Formulario */}
      <View style={[styles.tarjeta, { backgroundColor: colorTarjeta }]}>

        {/* Campo 1: Nombre con evento onChangeText */}
        <Text style={[styles.label, { color: colorTexto }]}>Nombre completo:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colorInputFondo, color: colorInputTexto }]}
          placeholder="Ej: Panfilo Natera"
          placeholderTextColor="#94a3b8"
          value={nombre}
          onChangeText={setNombre} // Captura cada letra escrita
        />

        {/* Campo 2: Meta u ocupación con evento onChangeText */}
        <Text style={[styles.label, { color: colorTexto }]}>Meta u Ocupación:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colorInputFondo, color: colorInputTexto }]}
          placeholder="Ej: Aprender React Native y publicar mi app"
          placeholderTextColor="#94a3b8"
          value={meta}
          onChangeText={setMeta}
        />

        {/* Fila del Switch con evento onValueChange */}
        <View style={styles.filaSwitch}>
          <Text style={[styles.labelSwitch, { color: colorTexto }]}>
            {esModoOscuro ? '🌙 Modo Oscuro Activado' : '☀️ Modo Claro'}
          </Text>
          <Switch
            value={esModoOscuro}
            onValueChange={setEsModoOscuro} // Conmuta el estado entre true y false
            trackColor={{ false: '#cbd5e1', true: '#38bdf8' }}
            thumbColor={esModoOscuro ? '#0284c7' : '#ffffff'}
          />
        </View>

        {/* Botón con evento onPress */}
        <View style={styles.contenedorBoton}>
          <Button
            title="Guardar Perfil"
            onPress={guardarPerfil}
            color="#0284c7"
          />
        </View>
      </View>

      {/* Tarjeta de Resumen (Renderizado Condicional cuando perfilGuardado es true) */}
      {perfilGuardado && (
        <View style={[styles.tarjetaResumen, { backgroundColor: colorTarjeta }]}>
          <Text style={[styles.tituloResumen, { color: colorTexto }]}>📋 Resumen del Perfil</Text>
          <Text style={[styles.textoDetalle, { color: colorSubtexto }]}>
            <Text style={{ fontWeight: 'bold', color: colorTexto }}>Usuario: </Text>
            {nombre}
          </Text>
          {meta ? (
            <Text style={[styles.textoDetalle, { color: colorSubtexto }]}>
              <Text style={{ fontWeight: 'bold', color: colorTexto }}>Meta: </Text>
              {meta}
            </Text>
          ) : null}
          <Text style={[styles.textoDetalle, { color: colorSubtexto }]}>
            <Text style={{ fontWeight: 'bold', color: colorTexto }}>Tema visual: </Text>
            {esModoOscuro ? 'Oscuro (Modo Nocturno)' : 'Claro'}
          </Text>
        </View>
      )}

      {/* Barra de estado que se adapta al modo oscuro/claro */}
      <StatusBar style={esModoOscuro ? 'light' : 'dark'} />
    </View>
  );
}

// 3. HOJA DE ESTILOS (StyleSheet)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  tarjeta: {
    width: '90%',
    padding: 20,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 15,
  },
  filaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  labelSwitch: {
    fontSize: 15,
    fontWeight: '500',
  },
  contenedorBoton: {
    marginTop: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tarjetaResumen: {
    width: '90%',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0284c7',
    elevation: 2,
  },
  tituloResumen: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textoDetalle: {
    fontSize: 14,
    marginBottom: 4,
  },
});
