import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantuty, incrementQuantity, removeFromCart } from '../redux/CartSlice';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav = useNavigation();
  let amount = 0
  storeData.forEach(element => {
    amount += element.price * element.quantity
  });
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: "white",
      gap: 15,
    }}>
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "500" }}>My Cart</Text>
      <View
        style={{
          flex: 0.93,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={storeData}
          renderItem={({ item, index }) => (
            <View style={{
              height: responsiveHeight(20),
              borderBottomColor: "#E3E3E3",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
              <View style={{
                flex: 0.2,
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image style={{ height: 80, width: 90, resizeMode: "contain" }}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View style={{
                flex: 0.7,
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
                <View style={{
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>{item.title}</Text>
                  <Ionicons
                    name="close"
                    size={25}
                    color="grey"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }} />
                </View>
                <Text style={{ fontSize: 17, color: 'grey', marginTop: 5 }}>M, Size</Text>
                <View style={{
                  alignContent: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: 10,
                }}>

                  {/* quantity container */}
                  <View style={{
                    alignContent: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}>
                    <AntDesign
                      name="minuscircleo"
                      size={28} color="green"
                      onPress={() => {
                        dispatch(decrementQuantuty(item));
                      }} />
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <AntDesign
                      name="pluscircleo"
                      size={28}
                      color="green"
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }} />
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>${item.quantity * item.price}</Text>
                </View>
              </View>
            </View>
          )} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('OrderPlaced')
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
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 40,
          }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>Go to Checkout</Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>${amount}</Text>
          </View>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default CartScreen