import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductListScreen from './screens/ProductListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // Estado Centralizado: Array donde se guardan todos los productos
  const [products, setProducts] = useState([]);

  // Función para agregar un nuevo producto al array
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">

        {/* Pantalla 1: Menú */}
        <Stack.Screen name="Menu" options={{ title: 'Menú Principal' }}>
          {(props) => <MenuScreen {...props} products={products} />}
        </Stack.Screen>

        {/* Pantalla 2: Registro */}
        <Stack.Screen name="Register" options={{ title: 'Registrar Nuevo Producto' }}>
          {(props) => <RegisterScreen {...props} addProduct={addProduct} />}
        </Stack.Screen>

        {/* Pantalla 3: Lista de Inventario */}
        <Stack.Screen name="ProductList" options={{ title: 'Inventario de Productos' }}>
          {(props) => <ProductListScreen {...props} products={products} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}