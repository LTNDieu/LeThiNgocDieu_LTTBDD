import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeSearch from './HomeSearch';
import HomeBanner from './HomeBanner';
import CategoryScreen from '../screens/CategoryScreen';
import ProductTitle from './ProductTitle';
import ProductCarousel from './ProductCarousel';
import axios from 'axios';

const Women = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
            .then((response) => setProduct(response.data)).catch((err) => console.log(err))
    }, []);

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, paddingHorizontal: 20, paddingTop: 10 }} >
                <View style={{ gap: 20, paddingBottom: 20 }} >
                    <HomeSearch />
                    <CategoryScreen />
                    <HomeBanner />
                    <ProductTitle title='Women clothing' />
                    <ProductCarousel data={product} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Women