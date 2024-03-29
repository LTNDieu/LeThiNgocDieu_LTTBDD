import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const onSubmit = () => {
    let formData = {
      email: email,
      password: password,
    }

    axios.post('https://65a0a070600f49256fb01ad8.mockapi.io/api/user/users', formData)
      .then((respone) => {
        if (respone.data) {
          Alert.alert("Registered successfully")
          navigation.navigate("Login");
        }
      }
      )
      .catch((err) => console.log(err))

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
        <Image style={{ width: 150, height: 100 }}
          source={require("../assets/img/expo-bg1.png")} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>
            Register in to your Account
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <Ionicons style={{ marginLeft: 8 }} name="ios-person" size={24} color="gray" />
            <TextInput
              value={name} onChangeText={(text) => setName(text)}
              style={{ color: "gray", marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }}
              placeholder="enter your Name" />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
            <TextInput
              value={email} onChangeText={(text) => setEmail(text)}
              style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }}
              placeholder="enter your Email" />
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
            <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="gray" />
            <TextInput
              value={password} onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{ color: "gray", marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }}
              placeholder="enter your PassWord" />
          </View>
        </View>
        <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
        </View>
        <View style={{ marginTop: 60 }}>
          <Pressable onPress={onSubmit}
            style={{ width: 200, backgroundColor: "#FEBE10", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Register</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}>
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Already have an account? Sign In</Text>
          </Pressable>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>

  )
}

export default RegisterScreen

const styles = StyleSheet.create({})