import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './LoginScreen';
import HomeSearch from '../component/HomeSearch';
import HomeBanner from '../component/HomeBanner';
import ProductTitle from '../component/ProductTitle';
import ProductCarousel from '../component/ProductCarousel';
import { fruits, vegetables } from '../Utils/Date';
import axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((response)=>setData(response.data)).catch((err)=>console.log(err))
  },[]);
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((response)=>setProduct(response.data)).catch((err)=>console.log(err))
  },[]);
  const [pro, setPro] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((response)=>setPro(response.data)).catch((err)=>console.log(err))
  },[]);

  const [prod, setProd] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((response)=>setProd(response.data)).catch((err)=>console.log(err))
  },[]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{flex:1, paddingHorizontal: 20, paddingTop: 10}} >
        <View style={{gap:20, paddingBottom:20}} >
          <HomeSearch />
          <HomeBanner />
          <ProductTitle title='Electronics' />
          <ProductCarousel data={data}/>
          <ProductTitle title='Jewelery' />
          <ProductCarousel data={product} />
          <ProductTitle title='Men clothing' />
          <ProductCarousel data={pro} />
          <ProductTitle title='Women clothing'/>
          <ProductCarousel data={prod} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})