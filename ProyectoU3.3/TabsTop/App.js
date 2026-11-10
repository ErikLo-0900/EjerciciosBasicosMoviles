import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Importar el Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import GaleriaScreen from './screens/GaleriaScreen';
import RecordatorioScreen from './screens/RecordatorioScreen';

// Inicializar el Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // El Navigator container sigue siendo el contenedor principal 
    <NavigationContainer>
      {/* Ahora creamos el Drawer Navigator */}
      <Drawer.Navigator
        initialRouteName="Home"
        // Opcional: Personalizacion basica del Drawer
        screenOptions={{
          headerTintColor: '#ff0000ff', // color del texto del encabezado 
          drawerActiveTintColor: 'blue', // color de item activo 
        }}
      >
        {/* Definimos las pantallas del Drawer */}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio Principal' }} // Titulo en el Menu y encabezado 
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Ajustes' }}
        />
        <Drawer.Screen
          name="Galeria"
          component={GaleriaScreen}
          options={{ title: 'Galeria' }}
        />
        <Drawer.Screen
          name="Recordatorio"
          component={RecordatorioScreen}
          options={{ title: 'Recordatorio' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

