// ==============================================================================
// Doc 1 - Ejemplo 1 Completo: Inclusión de Imágenes Locales (<Image>)
// ==============================================================================
// Descripción:
// Este es el ejercicio completo del primer documento.
// Integra:
// - Vista principal con fondo personalizado
// - Vistas secundarias anidadas
// - Textos formateados
// - Botón con evento interactivo onPress
// - Imagen local cargada desde la carpeta 'assets' mediante require()
// ==============================================================================

import { StatusBar } from 'expo-status-bar';
// Importamos 'Image' de react-native para desplegar gráficos e imágenes
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, soy Panfilo Natera!!!</Text>
      <Text>Esta es mi primera app</Text>
      <Text style={styles.textStyle}>Texto con estilo</Text>

      {/* Segundo bloque */}
      <View style={styles.segundoBloque}>
        <Text style={styles.textSecundario}>Este es otro bloque</Text>

        {/* Botón interactivo */}
        <Button title="Presióname" onPress={() => alert("¡Hola!")} />

        {/* 
          Componente Image:
          - source: Para imágenes locales dentro del proyecto se utiliza require('ruta_relativa').
                    Si fuera de internet, se usaría source={{ uri: 'https://...' }}.
          - style: En React Native es obligatorio especificar dimensiones (width y height)
                   para que la imagen se muestre correctamente.
        */}
        <Image
          source={require('./assets/camaleon.jpg')}
          style={styles.logo}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6', // Fondo azul claro (#add8e6)
    alignItems: 'center',       // Centrado horizontal
    justifyContent: 'center',   // Centrado vertical
  },
  textStyle: {
    fontSize: 24,
    color: 'blue',
  },
  segundoBloque: {
    backgroundColor: 'yellow', // Fondo amarillo
    padding: 15,              // Espaciado interior de 15px
    borderRadius: 10,         // Esquinas redondeadas de 10px
    alignItems: 'center',     // Centra los elementos internos (texto, botón, imagen)
    marginTop: 15,
  },
  textSecundario: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  logo: {
    // width y height: Ancho y alto de la imagen en puntos de pantalla
    width: 120,
    height: 120,

    // resizeMode: 'contain' -> Asegura que la imagen mantenga su proporción original
    // sin recortarse dentro del contenedor.
    resizeMode: 'contain',

    // borderRadius: 15 -> Redondeo sutil en las esquinas de la imagen
    borderRadius: 15,

    // Separación superior con respecto al botón
    marginTop: 15,
  },
});
