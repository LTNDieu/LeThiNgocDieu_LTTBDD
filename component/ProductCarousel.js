import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice';

const ProductCarousel = ({ data }) => {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.CartSlice);
    const nav = useNavigation();
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            nav.navigate('Detail', {
                                main: item
                            });
                        }}
                        activeOpacity={0.7}
                        style={{
                            height: responsiveHeight(35),
                            borderWidth: 2,
                            borderColor: "#E3E3E3",
                            width: responsiveWidth(45),
                            marginRight: 15,
                            borderRadius: 15
                        }}
                    >
                        <Image style={{ height: 100, width: 120, alignSelf: 'center', resizeMode: "contain" }}
                            source={{ uri: item.image }} />
                        <View style={{ paddingHorizontal: 10, gap: 3 }}>
                            <Text style={{ fontSize: 15, fontWeight: "400" }} >
                                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                            </Text>
                            <Text style={{ color: "grey" }} >{item.pieces} Priceg</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginTop: 15
                                }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: "bold" }} >${item.price}</Text>
                                {
                                    storeData.some((value) => value.title == item.title) ? (
                                        <FontAwesome
                                            name="minus-square"
                                            size={33}
                                            color="green"
                                            onPress={() => {
                                                dispatch(removeFromCart(item));
                                            }}
                                        />
                                    ) : (
                                        <FontAwesome
                                            name="plus-square"
                                            size={33}
                                            color="green"
                                            onPress={() => {
                                                dispatch(addToCart(item));
                                            }}
                                        />
                                    )
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductCarousel
