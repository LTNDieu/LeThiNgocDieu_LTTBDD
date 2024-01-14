import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animatable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';

import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart, updateCartItemQuantity } from "./action";
 
const width = Dimensions.get('window').width / 2 - 20;

const Home= ({route}) => {
  const [idCategory, setIdCategory] = React.useState(null); // Thêm trường state idCategory
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);


  const [apiDataCategory, setApiDataCategory] = useState([]);
  useEffect(() => {
    // Thực hiện cuộc gọi API và lấy dữ liệu từ URL của bạn
    
    fetch('http://192.168.180.108:9007/categorys')
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => b.id - a.id);
        setApiDataCategory(data);
      })
      .catch(error => {
        console.error('Lỗi cuộc gọi API:', error);
     
      });
  }, []);


  const handleProductPress = (product) => {
    navigation.navigate("DetailsScreen", { product });
  };



  const [loading, setLoading] = useState(false);

  const [apiData, setApiData] = useState([]);
 

  useEffect(() => {
    // Thực hiện cuộc gọi API và lấy dữ liệu từ URL của bạn
    setLoading(true);
    fetch('http://192.168.180.108:9007/products')
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

  const handleCategoryPress = (category) => {
    setIdCategory(category.name === "HOME" ? null : category.id);
  };

  const getFilteredProductsByCategory = () => {
    if (idCategory) {
      return apiData.filter((product) => product.idCategory === idCategory);
      
    } else {
      return apiData;
    }
  };
  // const cardhome = () => {
  //   navigation.navigate('Cart');
  // };
  

  const handleSearch = (query) => {
    setSearchQuery(query); // Update search query state
// Filter products based on the search query
    const filtered = apiData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };



  


  
  const CategoryList = () => {
    return (
      <FlatList
      horizontal
      data={apiDataCategory}
     
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={style.categoryContainer}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => handleCategoryPress(item)}>
          <Text
            style={[
              style.categoryText,
              (idCategory === item.id || (idCategory === null && item.name === "HOME")) && style.categoryTextSelected,
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

  const Card = ({product }) => {
    const [isLiked, setIsLiked] = React.useState(product.isLiked);

    const toggleLike = () => {
      setIsLiked(!isLiked);
    
    };
    const base64Image =product.imageData
    // const base64Image =useState('')

    const [isSortModalVisible, setIsSortModalVisible] = useState(false);

    const toggleSortModal = () => {
      setIsSortModalVisible(!isSortModalVisible);
    };

const quantity = useState('1');
    const cartData= useSelector((state) =>state.reducer)
    const formattedPrice=product.price*quantity
    const handleAddToCart = () => {
      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingCartItem = cartData.find(item => item.product.id === product.id);
    
      if (existingCartItem) {
        // Nếu tồn tại, cập nhật số lượng
        dispatch(updateCartItemQuantity(product.id, 1));
      } else {
        // Nếu không tồn tại, thêm sản phẩm vào giỏ hàng
        dispatch(addToCart(product,formattedPrice, 1,0.0));
      }
    
      
    };
    
    return (
      <TouchableOpacity
     style={{}}
        activeOpacity={0.8}
        onPress={() => handleProductPress(product)}>
        <View style={style.card}>
        <TouchableOpacity onPress={toggleLike}>
          
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:  isLiked
                ? 'rgba(245, 42, 42,0.2)'
                : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={ isLiked ? COLORS.red : COLORS.black}
               
              />
            </View>
           
          </View>
          </TouchableOpacity>
          <View
            style={{
              height: 100,
              alignItems: 'center',
              marginBottom:10
            }}>
<Image
             source={{ uri: `data:image/jpeg;base64,${base64Image}` }} // Sử dụng URI từ dữ liệu API
              style={{ width: 130, height: 120,borderRadius:10 }}
            />
          </View>
<View style={{top:-5}}>
          <Text style={{fontWeight: 'bold', fontSize: 17,top:10,marginTop:5}}>
          {product.name.length > 8 ? `${product.name.substring(0, 11)}...` : product.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              ${product.price}
            </Text>
            <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'pink',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                top:-10
              }}   onPress={() => handleAddToCart()}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold',bottom:3}}>
                +
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1,marginTop:-10 }}>
       {loading && (
                <View style={style.loading}>
                    <ActivityIndicator size="large" color="#009387" />
                </View>
            )}
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Xin chào đến với cửa hàng</Text>
          <Text style={{fontSize: 38, color: COLORS.red, fontWeight: 'bold'}}>
           SNOW NGHI
          </Text>
        </View>
        {/* <TouchableOpacity  onPress={cardhome}>
        <Icon name="shopping-cart" size={28} />
        </TouchableOpacity> */}
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Tìm kiếm" style={style.input}  value={searchQuery} onChangeText={(text) => {
              setSearchQuery(text);
              handleSearch(text);
            }} />
        </View>
       {/* <TouchableOpacity  style={style.sortBtn} > 
          <Icon name="sort" size={30} color={COLORS.white} />
        </TouchableOpacity>  */}
        {/* <SortModal visible={isSortModalVisible}   onClose={handleSortModalClose}  islogin={route1} />
        isuser={userlogin} */}
      </View>
      <CategoryList />
     < View style={{ height: 545 }} >
      <FlatList
  columnWrapperStyle={{justifyContent: 'space-between'}}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    
    paddingBottom: 7,
}}
  numColumns={2}
   data={filteredProducts.length > 0 ? filteredProducts : getFilteredProductsByCategory()}
  renderItem={({ item }) => {
    return (
      
        <Card product={item} />
      
    );
  }}
/>
</View>




    </SafeAreaView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
},
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold',marginLeft:20},
  categoryTextSelected: {
    color: COLORS.green,
    marginBottom: 0,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 220,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;