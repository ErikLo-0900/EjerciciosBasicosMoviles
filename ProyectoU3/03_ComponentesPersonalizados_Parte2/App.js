// 03_ComponentesPersonalizados_Parte2/App.js
// Basado en el Documento: Unidad 3 - Componentes personalizados parte II (Páginas 6 a 9)
// Integra:
// 1. CustomButton (Ejemplo del documento)
// 2. InfoCard (Ejemplo del documento)
// 3. CustomHeader (Componente nuevo del reto pág. 9 - Barra de navegación)
// 4. CustomInput (Componente nuevo del reto pág. 9 - Campo de entrada estilizado)

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Importación de los componentes desde la carpeta ./components/
import CustomHeader from './components/CustomHeader';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import InfoCard from './components/InfoCard';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleShowMessage = () => {
    if (nombre.trim() === '') return;
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre(''); // Limpiar el campo de texto
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* COMPONENTE NUEVO 1: Barra de Navegación / Encabezado */}
        <CustomHeader title="Panel de Inicio" />

        {/* COMPONENTE NUEVO 2: Campo de Entrada Personalizado */}
        <CustomInput
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* COMPONENTE: Botón Personalizado con TouchableOpacity */}
        <CustomButton
          title="Mostrar Mensaje"
          onPress={handleShowMessage}
        />

        {/* Mensaje de bienvenida condicional */}
        {mensaje ? <Text style={styles.textoMensaje}>{mensaje}</Text> : null}

        {/* COMPONENTE: Tarjetas de Información */}
        {/* Tarjeta estática de ejemplo */}
        <InfoCard
          title="Título de la Tarjeta"
          description="Esta es una descripción de ejemplo para la tarjeta."
        />

        {/* Tarjeta dinámica con la información del usuario */}
        {mensaje ? (
          <InfoCard
            title="Usuario Registrado"
            description={mensaje}
          />
        ) : null}
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
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  textoMensaje: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
    fontWeight: 'bold',
  },
});
