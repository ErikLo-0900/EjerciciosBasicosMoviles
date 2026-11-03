import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChangeScreen from './screens/ChangeScreen';
import DisplayScreen from './screens/DisplayScreen';

const Stack = createStackNavigator();

export default function App() {
  // ESTADO CENTRALIZADO: Esta variable la manipulamos desde cualquier ventana
  const [sharedValue, setSharedValue] = useState('VALOR INICIAL desde App.js');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Change">

        {/* PANTALLA 1: ChangeScreen - Modifica y lee el estado */}
        <Stack.Screen
          name="Change"
          options={{ title: '1. Cambiar Variable' }}
        >
          {(props) => (
            <ChangeScreen
              {...props}
              sharedValue={sharedValue}
              setSharedValue={setSharedValue}
            />
          )}
        </Stack.Screen>

        {/* PANTALLA 2: DisplayScreen - Lee y AHORA TAMBIÉN MODIFICA (Reto) */}
        <Stack.Screen
          name="Display"
          options={{ title: '2. Ver y Modificar Variable' }}
        >
          {(props) => (
            <DisplayScreen
              {...props}
              sharedValue={sharedValue}
              setSharedValue={setSharedValue}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}