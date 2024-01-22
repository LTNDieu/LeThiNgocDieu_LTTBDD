import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const OderplaceScreen = () => {
  const nav = useNavigation();
  useEffect (() =>{
    setTimeout(() => {
      nav.navigate("Home")
    }, 2000);
  }, [])
  return (
    <View style={{
      flex:1,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <StatusBar backgroundColor='white'/>
     <MaterialIcons name="verified" size={100} color="green" />
     <Text style={{
      fontSize:20, 
      textAlign: "center"
     }}>Congrats. Your Order Places Susscessfullyll</Text>
    </View>
  )
}

export default OderplaceScreen