import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';

const HomeSearch = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fechData = (value) => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return value && item && item.title
            && item.title.toLowerCase().includes(value);
        })
        setResults(results);
      })
  }


  const handleChange = (value) => {
    setInput(value);
    fechData(value);
  }
  return (
    <ScrollView>
      <View style={{
        backgroundColor: "#00CED1",
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Pressable style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 7,
          borderRadius: 3,
          backgroundColor: "white",
          gap: 10,
          height: 38,
          flex: 1,
        }}>
          <Feather name="search" size={24} color="black" />
          <TextInput value={input}
            onChangeText={(text) => {
              handleChange(text);
            }}
            style={{ flex: 1 }} placeholder='Search Store' />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>
    </ScrollView>
  )
}

export default HomeSearch