// 01_EjemploRender/App.js
// Basado en el Documento: Unidad 3 - Ejercicio: Componente personalizado (Páginas 3 a 6)
// Incluye la resolución del ejercicio de la página 6: Componente ContadorProductos

import React, { useState, memo } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// -------------------------------------------------------------
// COMPONENTE 1: Formulario (Definido dentro de App.js)
// Recibe como props:
// - producto: texto actual del input
// - setProducto: función para actualizar el texto
// - agregarProducto: función para guardar en la lista
// -------------------------------------------------------------
const Formulario = ({ producto, setProducto, agregarProducto }) => {
  console.log("Renderizando Formulario...");
  return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Registrar Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={producto}
        onChangeText={setProducto}
      />
      <Button title="Agregar" onPress={agregarProducto} />
    </View>
  );
};

// -------------------------------------------------------------
// COMPONENTE 2: ListaProductos (Optimizado con memo)
// Recibe como props:
// - productos: arreglo con la lista de productos
// memo evita re-renderizar la lista si el arreglo no ha cambiado
// -------------------------------------------------------------
const ListaProductos = memo(({ productos }) => {
  console.log("Renderizando ListaProductos...");
  return (
    <View style={styles.lista}>
      <Text style={styles.titulo}>Lista de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
});

// -------------------------------------------------------------
// COMPONENTE 3 (RETO RESUELTO - Página 6 del documento):
// "Ejercicio: Agrega un componente nuevo dentro de App.js que realice
//  el conteo de productos. Nota: Los nombres de los componentes
//  siempre deben comenzar con mayúscula."
//
// Recibe como prop:
// - total: número de elementos registrados
// -------------------------------------------------------------
const ContadorProductos = ({ total }) => {
  console.log("Renderizando ContadorProductos...");
  return (
    <View style={styles.contador}>
      <Text style={styles.textoContador}>
        Total de productos registrados: {total}
      </Text>
    </View>
  );
};

// -------------------------------------------------------------
// COMPONENTE PRINCIPAL (RAÍZ): App
// -------------------------------------------------------------
export default function App() {
  const [producto, setProducto] = useState('');
  const [productos, setProductos] = useState([]);

  const agregarProducto = () => {
    // 1. Validación: no agregar si está vacío
    if (producto.trim() === '') return;

    // 2. Agregar a la lista usando el operador spread (...)
    setProductos([...productos, producto]);

    // 3. Limpiar campo
    setProducto('');
  };

  console.log("Renderizando App...");

  return (
    <View style={styles.container}>
      {/* 1. Componente Formulario */}
      <Formulario
        producto={producto}
        setProducto={setProducto}
        agregarProducto={agregarProducto}
      />

      {/* 2. Componente nuevo del reto: Conteo de productos */}
      <ContadorProductos total={productos.length} />

      {/* 3. Componente Lista de Productos */}
      <ListaProductos productos={productos} />
    </View>
  );
}

// -------------------------------------------------------------
// ESTILOS DE LA APLICACIÓN
// -------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formulario: {
    marginBottom: 15,
  },
  lista: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    paddingVertical: 4,
  },
  // Estilo simple agregado para el componente ContadorProductos del reto
  contador: {
    backgroundColor: '#e8f5e9',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  textoContador: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});
