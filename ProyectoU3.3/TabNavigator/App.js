// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; -
import ProfileStack from './components/ProfileStack';
import HomeScreen from './components/HomeScreen';
import IdiomaScreen from './components/IdiomaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Idioma') {
              iconName = focused ? 'language' : 'language-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ffffffff',
          tabBarInactiveTintColor: 'darkblue',
          tabBarStyle: {
            backgroundColor: '#fd996eff', // Opcional: para que se vea bonito
            paddingBottom: 5,
            paddingTop: 5,
            height: 60
          }
        })}
      >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Idioma" component={IdiomaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}