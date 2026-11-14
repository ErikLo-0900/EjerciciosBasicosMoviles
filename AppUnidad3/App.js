import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import RegisterReportScreen from './screens/RegisterReportScreen';
import ReportListScreen from './screens/ReportListScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen'; // <-- 1. Importar LoginScreen

import { ReportProvider } from './context/ReportContext';
import { AuthProvider, useAuth } from './context/AuthContext'; // <-- 2. Importar AuthContext

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Pestañas inferiores
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'Registrar') iconName = 'add-circle';
          else if (route.name === 'Historial') iconName = 'list';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#059669',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          height: 60,
          paddingBottom: 8,
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Registrar" component={RegisterReportScreen} />
      <Tab.Screen name="Historial" component={ReportListScreen} />
    </Tab.Navigator>
  );
}

// Contenedor que decide si mostrar Login o la App principal
function AppContent() {
  const { isLoggedIn } = useAuth();

  // Si no está logueado, muestra la pantalla de Login
  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  // Si está logueado, muestra la navegación principal
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Principal"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#059669',
            elevation: 4,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
          },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
          drawerStyle: {
            backgroundColor: '#f8fafc',
            width: 270,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          },
          drawerActiveBackgroundColor: '#d1fae5',
          drawerActiveTintColor: '#065f46',
          drawerInactiveTintColor: '#4b5563',
          drawerItemStyle: {
            borderRadius: 12,
            marginHorizontal: 12,
            marginVertical: 4,
          },
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: '600',
            marginLeft: -8,
          },
        }}
      >
        <Drawer.Screen
          name="Principal"
          component={MainTabs}
          options={{
            title: 'Menú Principal',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="apps-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Ajustes"
          component={SettingsScreen}
          options={{
            title: 'Configuración',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// App Principal con ambos Providers
export default function App() {
  return (
    <AuthProvider>
      <ReportProvider>
        <AppContent />
      </ReportProvider>
    </AuthProvider>
  );
}