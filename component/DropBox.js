import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from '../Utils/Date'
import { AntDesign } from '@expo/vector-icons';

const DropBox = () => {
    const [myIndex, setmyIndex] = useState();
    const [toggle, setToggle] = useState(false);
    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={Dropdown}
                renderItem={({ item, index }) =>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setmyIndex(index);
                                setToggle(!toggle)
                            }}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottomColor: "#E3E3E3",
                                borderBottomWidth: 2,
                                marginBottom: 10,
                                paddingVertical: 20,
                            }}>
                            <Text>{item.title}</Text>
                            <AntDesign name={myIndex == index && toggle ? "down" : "right"} size={24} color="black" />
                        </TouchableOpacity>
                        {myIndex == index && toggle ? <Text>{item.content}</Text> : null}
                    </View>}
            />
        </View>
    )
}

export default DropBox