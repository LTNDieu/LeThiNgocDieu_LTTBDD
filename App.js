import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import OderplaceScreen from './screens/OderplaceScreen';
import Electronics from './component/Electronics';
import Jewelery from './component/Jewelery';
import Men from './component/Men';
import Women from './component/Women';
import { ModalPortal } from 'react-native-modals';
import AddAddressScreen from './screens/AddAddressScreen';
import AddressScreen from './screens/AddressScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function UITab() {
  return <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Trang chủ',
      tabBarIcon: () => (
        <Ionicons name="home" size={24} color="black" />
      )
    }} />

    <Tab.Screen name="Cart" component={CartScreen} options={{
      tabBarLabel: 'Giỏ hàng',
      tabBarIcon: () => (
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
      )
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarLabel: 'Tài khoản',
      tabBarIcon: () => (
        <MaterialIcons name="person" size={24} color="black" />
      )
    }} />

  </Tab.Navigator>
}
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={RegisterScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="UITab" component={UITab} />
          <Stack.Screen name="OrderPlaced" component={OderplaceScreen} />
          <Stack.Screen name="Electronics" component={Electronics} />
          <Stack.Screen name="Jewelery" component={Jewelery} />
          <Stack.Screen name="Men" component={Men} />
          <Stack.Screen name="Women" component={Women} />
          <Stack.Screen name="Address" component={AddAddressScreen} />
          <Stack.Screen name="Add" component={AddressScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </Provider>
  );
}

