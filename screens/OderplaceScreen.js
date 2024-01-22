import { View, Text, ScrollView, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5, } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, incrementQuantity, removeFromCart } from '../redux/CartSlice';

const OderplaceScreen = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();
  const steps = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Sunmmary" },
  ]

  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios.get("https://65a0a070600f49256fb01ad8.mockapi.io/api/user/Address")
      .then((response) => setAddress(response.data)).catch((err) => console.log(err))
  }, []);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [option, setOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const storeData = useSelector((state) => state.CartSlice);
  let amount = 0
  let sl = 0
  let price = 0

  storeData.forEach(element => {
    amount += element.price * element.quantity,
    sl += element.quantity,
    price+= element.price
  });

  const onSubmit = () => {
    let formData = {
      qty: sl,
      price: price,
      username: selectedAddress.name,
      address: selectedAddress.houseNo,
      phone: selectedAddress.mobileNo,
    }

    axios.post('https://65ad489eadbd5aa31be07f97.mockapi.io/order/order', formData)
      .then((respone) => {
        if (respone.data) {
          navigation.navigate("UITab");
           Alert.alert("Order successfully")
           dispatch(clearCart());
        }
      }
      )
      .catch((err) => console.log(err))

  }

  return (
    <ScrollView style={{ marginTop: 55 }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 40 }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          justifyContent: "space-between"
        }}>
          {steps.map((step, index) => {
            return (
              <View style={{
                justifyContent: "center",
                alignItems: "center"
              }}>
                {index > 0 && (
                  <View style={[{
                    flex: 1, height: 2, backgroundColor: "green"
                  },
                  index <= currentStep && { backgroundColor: "green" },
                  ]} />
                )}
                <View style={[
                  {
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: "#ccc",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  index < currentStep && { backgroundColor: "green" }
                ]}>
                  {index < currentStep ? (
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>&#10003;</Text>
                  ) : (
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>{index + 1}</Text>
                  )}
                </View>
                <Text style={{ textAlign: "center", marginTop: 8 }}>{step.title}</Text>
              </View>
            )
          })
          }
        </View>
      </View>
      {currentStep == 0 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Seclect Delivery Address</Text>

          <Pressable>
            {address?.map((item, index) => {
              return (
                <Pressable style={{
                  borderWidth: 1,
                  borderColor: "#D0D0D0",
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  paddingBottom: 17,
                  marginVertical: 7,
                  borderRadius: 6
                }}>
                  {selectedAddress && selectedAddress.id === item?.id ? (
                    <FontAwesome5 name="dot-circle" size={20} color="#008397" />
                  ) : (
                    <Entypo onPress={() => setSelectedAddress(item)} name="circle" size={20} color="gray" />
                  )}
                  <View style={{ marginLeft: 6 }}>
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

                    <View>
                      {selectedAddress && selectedAddress.id === item?.id && (
                        <Pressable
                          onPress={() => setCurrentStep(1)}
                          style={{
                            backgroundColor: "#008397",
                            padding: 10,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 10,
                          }}>
                          <Text style={{ textAlign: "center", color: "white" }}>Deliver to this Address</Text>
                        </Pressable>
                      )}
                    </View>
                  </View>
                </Pressable>
              )
            })}
          </Pressable>

        </View>
      )}

      {currentStep == 1 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Choose your delivery options</Text>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 8,
            gap: 7,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
          }}>
            {option ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo onPress={() => setOption(!option)} name="circle" size={20} color="gray" />
            )}
            <Text style={{ flex: 1 }}>
              <Text style={{ color: "green", fontWeight: "500" }}>Tomorrow by 10pm</Text>{""}
              - FREE delivery with your Price membership
            </Text>
          </View>
          <Pressable
            onPress={() => setCurrentStep(2)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}>
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep == 2 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Select your payment Method</Text>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 8,
            gap: 7,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 12,
          }}>
            {selectedOption === "cash" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo onPress={() => setSelectedOption("cash")} name="circle" size={20} color="gray" />
            )}
            <Text>Cash on Delivery</Text>
          </View>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 8,
            gap: 7,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 12,
          }}>
            {selectedOption === "casd" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo onPress={() => setSelectedOption("card")} name="circle" size={20} color="gray" />
            )}
            <Text>UPI / Credit or debit card</Text>
          </View>
          <Pressable
            onPress={() => setCurrentStep(3)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}>
            <Text>Continue</Text>
          </Pressable>

        </View>
      )}

      {currentStep === 3 && selectedOption === "cash" && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              backgroundColor: "white",
              padding: 8,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
            }}>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginTop: 5 }}>
                Turn on auto deliveries
              </Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>

          <View style={{
            backgroundColor: "white",
            padding: 8,
            borderColor: "#DODODO",
            borderWidth: 1,
            marginTop: 10,
          }}>
            <Text>Shipping to {selectedAddress?.name}</Text>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Items</Text>
              <Text style={{ fontSize: 16, color: "gray" }}>${amount}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Delivery</Text>
              <Text style={{ fontSize: 16, color: "gray" }}>$0</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>Order Total</Text>
              <Text style={{ fontSize: 16, color: "#C60C30", fontWeight: "bold", }}>${amount}</Text>
            </View>
          </View>
          <View style={{
            backgroundColor: "white",
            padding: 8,
            borderColor: "#DODODO",
            borderWidth: 1,
            marginTop: 10,
          }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Pay With</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 7 }}>Pay on delivery (Cash)</Text>
          </View>

          <Pressable
            onPress={onSubmit}
            style={{
              backgroundColor: "#FFC72C",
              padding: 8,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20
            }}>
            <Text>Place your order</Text>
          </Pressable>
        </View>

      )
      }
    </ScrollView >
  )
}

export default OderplaceScreen