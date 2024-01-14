import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
  const nav = useNavigation();
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    // Thực hiện cuộc gọi API và lấy dữ liệu từ URL của bạn
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setApiData(data);
      })
      .catch(error => {
        setLoading(false);
        console.error('Lỗi cuộc gọi API:', error);
     
      });
  }, []);  
  
  const handleSearch = (query) => {
    setSearchQuery(query); 
    const filtered = apiData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const getFilteredProductsByCategory = () => {
    if (idCategory) {
      return apiData.filter((product) => product.idCategory === idCategory);
      
    } else {
      return apiData;
    }
  };

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
        <TextInput value={searchQuery} onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }} style={{ flex: 1 }} placeholder='Search Store' />
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