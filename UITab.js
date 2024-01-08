import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
function UITab() {
    const Tab = createBottomTabNavigator();

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

export default UITab