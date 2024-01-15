import { View, TextInput, ScrollView, Pressable, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddAddressScreen = () => {
    const navigation = useNavigation();
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

            <View style={{padding:10}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Yor Addresses</Text>

                <Pressable 
                onPress={() => navigation.navigate("Add")}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:"space-between",
                    marginTop: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    paddingVertical: 7,
                    paddingHorizontal: 5
                }}>
                    <Text>Add a new Add</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default AddAddressScreen