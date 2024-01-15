import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Location = (setModaVisible) => {
    return (
        <Pressable
            onPress={() => setModaVisible(!modaVisible)}
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                padding: 10,
                backgroundColor: "#AFEEEE"
            }}>
            <Ionicons name="location-outline" size={24} color="black" />

            <Pressable>
                <Text style={{
                    fontSize: 13,
                    fontWeight: "500"
                }}>Deliver to Sujan - Bangalore $60021</Text>
            </Pressable>

            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Pressable>
    )
}

export default Location