import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; //Iconos de Expo
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/settingsScreen';
import LenguajeScreen from './screens/LenguajeScreen';
import NavigateScreen from './screens/NavigateScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            } else if (route.name === 'Lenguaje') {
              iconName = 'language-outline';
            } else if (route.name === 'Navegar') {
              iconName = 'navigate-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#ffffffff',
          tabBarInactiveTintColor: 'black',

          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: '#cf8bff' }

        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Lenguaje" component={LenguajeScreen} />
        <Tab.Screen name="Navegar" component={NavigateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
