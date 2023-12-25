import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeBanner = () => {
  return (
    <View>
      <Image style={{ width: 400, height: 150 }} source={require("../assets/images/banner2.jpg")} />
    </View>
  )
}

export default HomeBanner