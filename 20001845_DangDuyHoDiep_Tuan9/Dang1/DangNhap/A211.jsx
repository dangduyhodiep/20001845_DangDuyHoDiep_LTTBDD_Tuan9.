// Dạng này là Fake 1 cái Api (gồm list các tài khoản: name và password)
// Lúc đăng nhập thì check xem có tài khoản trong FakeApi ko, có thì Chuyển màn hình!
// Fake API của t : https://654efe92358230d8f0ccf0fb.mockapi.io/Login/Login

// [
//   {
//     "name": "Chien",
//     "password": "123",
//     "id": "1"
//   },
//   {
//     "name": "Dap",
//     "password": "123",
//     "id": "2"
//   },
//   {
//     "name": "Trai",
//     "password": "123",
//     "id": "3"
//   }
// ]
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const A211 = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([]) // Dữ liệu từ Fake API

  const getData = () => {
    axios
      .get('https://654efe92358230d8f0ccf0fb.mockapi.io/Login/Login')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  // Hàm kiểm tra thông tin đăng nhập
  const handleLogin = () => {
    const user = users.find(
      (u) => u.name === username && u.password === password
    )
    if (user) {
      navigate('A212')
    } else {
      Alert.alert('Đăng nhập không thành công')
    }
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffe2fd',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Đăng nhập
      </Text>
      <TextInput
        onChangeText={(text) => {
          setUsername(text)
        }}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="UserName ..."
        placeholderTextColor="#111"
      />
      <TextInput
        onChangeText={(text) => {
          setPassword(text)
        }}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="Password ..."
        placeholderTextColor="#111"
      />
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => {
          handleLogin()
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}

export default A211

const styles = StyleSheet.create({})
