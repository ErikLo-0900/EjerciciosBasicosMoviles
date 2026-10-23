// ==============================================================================
// PDF 1 - Ejemplo 1 (Pasos 4 y 5): Nuevos Contenedores (Bloques) y Botones
// ==============================================================================
// Descripción:
// En este paso se introduce:
// 1. Un contenedor secundario (<View>) anidado dentro del contenedor principal.
// 2. Propiedades de caja: padding (espaciado interno) y borderRadius (bordes redondeados).
// 3. El componente nativo <Button> que responde al evento onPress con una alerta.
// ==============================================================================

import { StatusBar } from 'expo-status-bar';
// Importamos Button desde react-native para tener interactividad básica
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, soy Panfilo Natera!!!</Text>
      <Text>Esta es mi primera app</Text>
      <Text style={styles.textStyle}>Texto con estilo</Text>

      {/* Segundo bloque: Una View anidada que funciona como tarjeta o recuadro amarillo */}
      <View style={styles.segundoBloque}>
        <Text style={styles.textSecundario}>Este es otro bloque</Text>

        {/* 
          Componente Button:
          - title: El texto visible dentro del botón ("Presióname").
          - onPress: Evento que se ejecuta al presionar el botón.
            Aquí usamos una función flecha () => alert("¡Hola!") para disparar una alerta.
        */}
        <Button title="Presióname" onPress={() => alert("¡Hola!")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6', // Fondo azul claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: 'blue',
  },

  // Estilo para el contenedor secundario (tarjeta)
  segundoBloque: {
    // backgroundColor: 'yellow' -> Fondo amarillo para diferenciar el bloque
    backgroundColor: 'yellow',

    // padding: 15 -> Espacio interno entre el borde del bloque y sus elementos hijos
    padding: 15,

    // borderRadius: 10 -> Curvatura en las cuatro esquinas del bloque
    borderRadius: 10,

    // marginTop para dar separación del texto superior
    marginTop: 10,
  },

  // Estilo para el texto dentro del segundo bloque
  textSecundario: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8, // Espacio antes del botón
    textAlign: 'center',
  },
});
