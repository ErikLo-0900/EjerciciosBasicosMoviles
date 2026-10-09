// ==============================================================================
// PDF 1 - Ejemplo 1 (Paso 2 y 3): Personalización de Fondo y Estilos de Texto
// ==============================================================================
// Descripción:
// En este paso cambiamos el color de fondo a celeste (#add8e6), agregamos múltiples
// líneas de texto con el componente <Text> y aplicamos estilos tipográficos
// (fontSize y color) mediante una nueva regla en StyleSheet.
// ==============================================================================

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Texto simple sin estilo adicional */}
      <Text>Hola, soy Panfilo Natera!!!</Text>

      {/* Segundo texto informativo */}
      <Text>Esta es mi primera app</Text>

      {/* Tercer texto con estilo personalizado vinculado a 'styles.textStyle' */}
      <Text style={styles.textStyle}>Texto con estilo</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    // backgroundColor: '#add8e6' -> Color de fondo azul claro (celeste)
    backgroundColor: '#add8e6',
    alignItems: 'center', // Centrado horizontal
    justifyContent: 'center', // Centrado vertical
  },

  // Estilo específico para el texto destacado
  textStyle: {
    // fontSize: 24 -> Aumenta el tamaño de la letra a 24 puntos
    fontSize: 24,

    // color: 'blue' -> Cambia el color del texto a azul
    color: 'blue',
  },
});
