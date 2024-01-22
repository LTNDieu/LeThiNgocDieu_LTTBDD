import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeSearch from '../component/HomeSearch';
import HomeBanner from '../component/HomeBanner';
import ProductTitle from '../component/ProductTitle';
import ProductCarousel from '../component/ProductCarousel';
import axios from 'axios';
import CategoryScreen from './CategoryScreen';
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [modaVisible, setModaVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const navigation = useNavigation();

  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios.get("https://65a0a070600f49256fb01ad8.mockapi.io/api/user/Address")
      .then((response) => setAddress(response.data)).catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data)).catch((err) => console.log(err))
  }, []);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => setProduct(response.data)).catch((err) => console.log(err))
  }, []);

  const [pro, setPro] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => setPro(response.data)).catch((err) => console.log(err))
  }, []);

  const [prod, setProd] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => setProd(response.data)).catch((err) => console.log(err))
  }, []);

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingBottom: 20 }} >
            <HomeSearch setResults={setResults} />
            <Pressable
              onPress={() => setModaVisible(!modaVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                padding: 10,
                backgroundColor: "#AFEEEE"
              }}>
              <Ionicons name="location-outline" size={24} color="black" />

              <Pressable>
                {selectedAddress ? (
                  <Text style={{
                    fontSize: 13,
                    fontWeight: "500"
                  }}>{selectedAddress?.name} - {selectedAddress?.street}, {selectedAddress?.houseNo}, {selectedAddress?.landmark}</Text>
                ) : (
                  <Text style={{
                    fontSize: 13,
                    fontWeight: "500"
                  }}>Add a Address</Text>
                )}
              </Pressable>

              <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </Pressable>
            <CategoryScreen />
            <HomeBanner />
            <ProductCarousel data={results} />
            <ProductTitle title='Products' />
            <ProductCarousel data={data} />
            <ProductTitle title='Jewelery' />
            <ProductCarousel data={product} />
            <ProductTitle title='Men clothing' />
            <ProductCarousel data={pro} />
            <ProductTitle title='Women clothing' />
            <ProductCarousel data={prod} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomModal
        setModaVisible={setModaVisible}
        onBackdropPress={() => setModaVisible(!modaVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        onHardwareBackPress={() => setModaVisible(!modaVisible)}
        visible={modaVisible}
        onTouchOutside={() => setModaVisible(!modaVisible)}
      >
        <ModalContent style={{ width: "100%", height: 400 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Choose your Location</Text>
            <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Select a delivery location too see product availabilty and delivery options
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {address?.map((item, index) => {
              return (
                <Pressable
                  onPress={() => setSelectedAddress(item)}
                  key={index}
                  style={{
                    width: 150,
                    height: 150,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                    marginRight: 15,
                    marginTop: 10,
                    backgroundColor: selectedAddress === item ? "#FBCEB1" : "white"
                  }}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }} >
                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item?.name}</Text>
                    <Entypo name="location-pin" size={24} color="red" />
                  </View>
                  <Text numberOfLines={1} style={{ width: 130, textAlign: "center", fontSize: 13 }}>{item?.street}</Text>
                  <Text numberOfLines={1} style={{ width: 130, textAlign: "center", fontSize: 13 }}>{item?.houseNo}, {item?.landmark}</Text>
                  <Text numberOfLines={1} style={{ width: 130, textAlign: "center", fontSize: 13 }}>VietNam</Text>

                </Pressable>

              )
            })}

            <Pressable
              onPress={() => {
                setModaVisible(false);
                navigation.navigate("Address")
              }}
              style={{
                width: 150,
                height: 150,
                borderColor: "#D0D0D0",
                marginTop: 10,
                borderWidth: 1,
                padding: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Text style={{
                textAlign: "center",
                color: "#0066b2",
                fontWeight: "500"
              }}>Add an Address or pick-up point</Text>
            </Pressable>
          </ScrollView>
          <View style={{ flexDirection: "column", gap: 7, marginBottom: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Entypo name="location-pin" size={22} color="#0066b2" />
              <Text style={{ color: "#0066b2", fontWeight: "400" }}>Enter an Indian pincode</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Ionicons name="locate-sharp" size={22} color="#0066b2" />
              <Text style={{ color: "#0066b2", fontWeight: "400" }}>Use My Currect Location</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <AntDesign name="earth" size={22} color="#0066b2" />
              <Text style={{ color: "#0066b2", fontWeight: "400" }}>Deliver outside Indian</Text>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})