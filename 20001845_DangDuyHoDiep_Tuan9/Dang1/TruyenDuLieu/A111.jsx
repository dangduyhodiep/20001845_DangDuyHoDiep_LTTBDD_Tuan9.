//  Dạng bài đầu tiên là (Truyền dữ liệu qua màn hình) nhập Tên vào 1 ô textInput, bấm OK thì nhảy sang màn hình khác và hiển thị tên vừa nhập.

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

const A111 = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  // Lấy kích thước toàn màn hình
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const [name, setName] = useState('')
  return (
    <View
      style={{
        backgroundColor: '#adf7f7',
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        onChangeText={(text) => {
          setName(text)
        }}
        style={{
          width: screenWidth * 0.73,
          height: screenHeight * 0.073,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="Nhập tên ..."
        placeholderTextColor="#111"
      />
      <TouchableOpacity
        style={{
          height: 50,
          width: 180,
          marginTop: 30,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigate('A112', {
            name: name,
          })
        }}
      >
        <Text>Ok</Text>
      </TouchableOpacity>
    </View>
  )
}

export default A111

const styles = StyleSheet.create({})
