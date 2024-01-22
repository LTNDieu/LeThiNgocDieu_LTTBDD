import { View, Text, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AddressScreen = () => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const navigation = useNavigation();

    const onSubmit = () => {
        let formData = {
            name: name,
            mobileNo: mobileNo,
            houseNo: houseNo,
            street: street,
            landmark: landmark,
            postalCode: postalCode,
        }
    
        axios.post('https://65a0a070600f49256fb01ad8.mockapi.io/api/user/Address', formData)
          .then((respone) => {
            if (respone.data) {
              Alert.alert("Add address successfully")
              navigation.navigate("Home");
            }
          }
          )
          .catch((err) => console.log(err))
    
      }
    
    return (
        <ScrollView style={{ marginTop: 50 }}>
            <View style={{ height: 50, backgroundColor: "#00CED1" }} />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Add a new Address</Text>

                <TextInput
                    placeholderTextColor={"black"}
                    placeholder="VietNam"
                    style={{
                        padding: 5,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5,
                    }} />

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Full  name (First and last name)
                    </Text>

                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="enter your name"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Mobile number
                    </Text>

                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Mobile No"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Flat, House No, Building, Company
                    </Text>

                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder=""
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Area, Street, sector, village
                    </Text>

                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder=""
                    />
                </View>

                <View >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Landmark
                    </Text>

                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Eg near appollo hospital"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Pincode
                    </Text>

                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter Pincode"
                    />
                </View>

                <Pressable  onPress={onSubmit} style={{ backgroundColor: "#FFC72C", padding: 19, borderRadius: 6, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <Text style={{ fontWeight: "bold" }}>Add Address</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default AddressScreen