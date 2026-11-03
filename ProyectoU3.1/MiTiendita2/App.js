import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ title: 'Nuestros Pasteles' }}
        />
        <Stack.Screen
          name="OrderReview"
          component={OrderReviewScreen}
          options={{ title: 'Revisar Pedido' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}