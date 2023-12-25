import { View, Text } from 'react-native'
import React from 'react'

const ProductTitle = ({title}) => {
  return (
    <View
    style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600"}}>{title}</Text>
      <Text style={{ fontSize: 16, color: "blue"}}>See All</Text>
    </View>
  )
}

export default ProductTitle