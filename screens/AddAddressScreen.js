import { View, TextInput, ScrollView, Pressable, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice';

const AddAddressScreen = () => {
    const navigation = useNavigation();
    const [address, setAddress] = useState([]);
    useEffect(() => {
        axios.get("https://65a0a070600f49256fb01ad8.mockapi.io/api/user/Address")
            .then((response) => setAddress(response.data)).catch((err) => console.log(err))
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
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
                    <TextInput
                        style={{ flex: 1 }} placeholder='Search Store' />
                </Pressable>
                <Feather name="mic" size={24} color="black" />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Yor Addresses</Text>

                <Pressable
                    onPress={() => navigation.navigate("Add")}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        marginTop: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        paddingVertical: 7,
                        paddingHorizontal: 5
                    }}>
                    <Text>Add a new Add</Text>
                    <Entypo name="location-pin" size={24} color="black" />
                </Pressable>

                <Pressable>
                    {address?.map((item, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={{
                                    flexDirection: 'column',
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    padding: 10,
                                    marginVertical: 10,
                                    gap: 5,
                                }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }} >
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.name}</Text>
                                    <Entypo name="location-pin" size={24} color="red" />
                                </View>
                                <Text style={{ fontSize: 15, color: "#181818" }}>{item?.houseNo}, {item?.landmark}</Text>
                                <Text style={{ fontSize: 15, color: "#181818" }}>{item?.street}</Text>
                                <Text style={{ fontSize: 15, color: "#181818" }}>{item?.name}</Text>
                                <Text style={{ fontSize: 15, color: "#181818" }}>phone No: {item?.mobileNo}</Text>
                                <Text style={{ fontSize: 15, color: "#181818" }}>pin code: {item?.postalCode}</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 7 }}>
                                    <Pressable
                                        style={{
                                            backgroundColor: "#F5F5F5",
                                            borderColor: "#D0D0D0",
                                            borderWidth: 0.9,
                                            borderRadius: 5,
                                            paddingVertical: 6,
                                            paddingHorizontal: 10
                                        }}>
                                        <Text>Edit</Text>
                                    </Pressable>
                                    <Pressable
                                        style={{
                                            backgroundColor: "#F5F5F5",
                                            borderColor: "#D0D0D0",
                                            borderWidth: 0.9,
                                            borderRadius: 5,
                                            paddingVertical: 6,
                                            paddingHorizontal: 10
                                        }}>
                                        <Text>Remove</Text>
                                    </Pressable>
                                    <Pressable
                                        style={{
                                            backgroundColor: "#F5F5F5",
                                            borderColor: "#D0D0D0",
                                            borderWidth: 0.9,
                                            borderRadius: 5,
                                            paddingVertical: 6,
                                            paddingHorizontal: 10
                                        }}>
                                        <Text>Set as default</Text>
                                    </Pressable>

                                </View>
                            </Pressable>

                        )
                    })}
                </Pressable>

            </View>
        </ScrollView>
    )
}

export default AddAddressScreen