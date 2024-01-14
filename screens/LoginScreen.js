import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';

const LoginScreen = () => {
    const [emailInput, setEmail] = useState("");
    const [passwordInput, setPassword] = useState("");
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
        // Lấy giá trị từ TextInput và kiểm tra với dữ liệu từ API
        Keyboard.dismiss();
        setLoading(true);
        fetch('https://65a0a070600f49256fb01ad8.mockapi.io/api/user/users')
            .then(response => response.json())
            .then(data => {
                setLoading(false);

                const user = data.find((user) => user.email === emailInput && user.password === passwordInput);
                if (user) {
                    Alert.alert('Notification', 'Login successfully');
                    navigation.navigate("UITab");
                } else {
                    Alert.alert('Notification', 'Username or password is incorrect.');
                }
            })
            .catch(error => {
                console.error(error);
                Alert.alert('Notification', 'An error occurred while connecting to the server.');
            });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image style={{ width: 150, height: 100 }}
                    source={require("../assets/img/expo-bg1.png")} />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>
                        Login in to your Account
                    </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
                        <TextInput
                            value={emailInput} onChangeText={(text) => setEmail(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: emailInput ? 16 : 16 }}
                            placeholder="enter your Email" />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <AntDesign name="lock1" size={24} color="black" />
                        <TextInput
                            value={passwordInput} onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: passwordInput ? 16 : 16 }}
                            placeholder="enter your Password" />
                    </View>
                </View>
                <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
                </View>
                <View style={{ marginTop: 80 }}>
                    <Pressable onPress={handleSignIn}
                        style={{ width: 200, backgroundColor: "#FEBE10", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Login</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Signup")} style={{ marginTop: 15 }}>
                        <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Don't have an account? Sign Up</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})