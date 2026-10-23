// ==============================================================================
// PDF 1 - Ejemplo 1 (Paso 1): Hola Mundo Básico en React Native
// ==============================================================================
// Descripción:
// Este es el componente inicial básico que crea Expo con la plantilla blank.
// Muestra un texto centrado en pantalla completa con fondo blanco.
// ==============================================================================

// 1. IMPORTACIÓN DE COMPONENTES
// StatusBar: Controla el estilo de la barra superior del celular (hora, batería, señal).
import { StatusBar } from 'expo-status-bar';

// Componentes del núcleo de React Native:
// - StyleSheet: Permite definir y optimizar hojas de estilos (similar a CSS).
// - Text: Componente obligatorio para mostrar texto (en React Native no se usa <p> ni <span>).
// - View: Contenedor básico para estructurar la interfaz (equivalente a <div> en HTML).
import { StyleSheet, Text, View } from 'react-native';

// 2. COMPONENTE PRINCIPAL
// App es la función que se ejecuta al iniciar la aplicación.
// Todo lo que retorne dentro de return (...) se mostrará en pantalla.
export default function App() {
  return (
    // <View>: Contenedor que agrupa los elementos en pantalla con el estilo 'container'
    <View style={styles.container}>
      {/* <Text>: Muestra el mensaje en pantalla */}
      <Text>Bienvenido a React Native!!!</Text>

      {/* <StatusBar>: Estilo automático para la barra superior (se ajusta a claro/oscuro) */}
      <StatusBar style="auto" />
    </View>
  );
}

// 3. HOJA DE ESTILOS (StyleSheet)
const styles = StyleSheet.create({
  container: {
    // flex: 1 -> Hace que el contenedor ocupe todo el espacio disponible de la pantalla.
    flex: 1,

    // backgroundColor -> Color de fondo de la pantalla (#fff = blanco).
    backgroundColor: '#fff',

    // alignItems: 'center' -> Alinea y centra los componentes hijos horizontalmente.
    alignItems: 'center',

    // justifyContent: 'center' -> Alinea y centra los componentes hijos verticalmente.
    justifyContent: 'center',
  },
});
