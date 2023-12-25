import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
  const nav = useNavigation();
  return (
    <View style={{
      height: responsiveHeight(7),
      flexDirection: 'row',
    }}>
      <View style={{
        flex: 0.95,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#E2E3E2",
        gap: 10
      }}>
        <Feather name="search" size={24} color="black" />
        <TextInput style={{ flex: 1 }} placeholder='Search Store' />
      </View>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('Cart');
        }}
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          alignContent: 'center',
          marginLeft: 10,
          justifyContent: "space-between",
        }}>
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default HomeSearch