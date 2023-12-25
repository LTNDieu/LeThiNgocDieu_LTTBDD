import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen';
import OderplaceScreen from '../screens/OderplaceScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppStack() {
  return (
      <NavigationContainer>
        <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
         <Stack.Screen name="Login" component={LoginScreen}/>
         <Stack.Screen name="Signup" component={RegisterScreen}/>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="Detail" component={DetailScreen}/>
         <Stack.Screen name="Cart" component={CartScreen}/>
         <Stack.Screen name="OrderPlaced" component={OderplaceScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

