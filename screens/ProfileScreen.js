import { View, Text, Image } from 'react-native'
import React from 'react'
import DropBox from '../component/DropBox'

const ProfileScreen = () => {
  return (
    <View>
      <Image style={{ width: 400, height: 200 }} source={require("../assets/images/avt.jpg")} />
      <Text style={{ color: "black", fontSize: 25, fontWeight: "700", margin: 5 }}>LÊ THỊ NGỌC DIỆU</Text>
      <DropBox/>
    </View>
  )
}

export default ProfileScreen