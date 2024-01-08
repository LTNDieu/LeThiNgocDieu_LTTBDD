import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const DetailScreen = ({ route }) => {
  const storeData = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const productData = route.params.main;
  // const { title, description, price, image } = productData;
  const { title, description, price, image } = productData;
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "white" }} >
      <StatusBar backgroundColor="white" />
      <View>
        <Image resizeMode="contain" style={{ height: 270, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
          source={{
            uri: image,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            paddingHorizontal: 15,
            alignItems: "center"
          }}
        >
          <Ionicons onPress={() => {
            nav.goBack();
          }} name="chevron-back" size={28} color="black" />
          <Feather name="share" size={28} color="black" />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, backgroundColor: "white", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 25, color: "black", fontWeight: "600" }}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Text>
          <MaterialIcons name="favorite-border" size={30} color="black" />
        </View>
        <Text style={{ marginTop: 5, fontSize: 28, color: 'black', fontWeight: "bold" }}>${price}</Text>
        <Text style={{ marginTop: 15, fontSize: 30, color: 'black', fontWeight: "bold" }}>Product Detail</Text>
        <Text style={{ marginTop: 10, fontSize: 15, color: 'grey', fontWeight: "bold" }}>{description}</Text>
        {/* <DropBox /> */}
        <View style={{ flex: 0.9, justifyContent: "flex-end" }} >
          {
            storeData.some((value) => value.title == productData.title) ? (
              <TouchableOpacity
              disabled={true}
                activeOpacity={0.8}
                style={{
                  backgroundColor: "#E3E3E3",
                  borderRadius: 10,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
                  Added to Basket</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(productData));
                  nav.navigate('Cart');
                }}
                activeOpacity={0.8}
                style={{
                  backgroundColor: "green",
                  borderRadius: 10,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                  Add to Basket</Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailScreen