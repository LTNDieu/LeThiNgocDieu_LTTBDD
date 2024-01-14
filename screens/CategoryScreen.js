import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
                <Text
                    onPress={() => navigation.navigate("Electronics")}
                    style={{
                        padding: 10, borderWidth: 1,
                        borderColor: 'black', fontSize: 19, margin: 10, borderRadius: 10
                    }}>
                    Electronics</Text>
            </View>
            <View>
                <Text
                    onPress={() => navigation.navigate("Jewelery")}
                    style={{
                        padding: 10, borderWidth: 1,
                        borderColor: 'black', fontSize: 19, margin: 10, borderRadius: 10
                    }}>
                    Jewelery</Text>
            </View>
            <View>
                <Text
                    onPress={() => navigation.navigate("Men")}
                    style={{
                        padding: 10, borderWidth: 1,
                        borderColor: 'black', fontSize: 19, margin: 10, borderRadius: 10
                    }}>
                    Men clothing</Text>
            </View>
            <View>
                <Text
                    onPress={() => navigation.navigate("Women")}
                    style={{
                        padding: 10, borderWidth: 1,
                        borderColor: 'black', fontSize: 19, margin: 10, borderRadius: 10
                    }}>
                    Women clothing</Text>
            </View>

        </ScrollView>
    )
}

export default CategoryScreen

