import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Man2 = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  const { type, id } = route.params

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const addNewEntry = async () => {
    const newData = {
      name: name,
      description: description,
    }

    try {
      await axios.post(
        'https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter',
        newData
      )
      navigate('Dang2_3_4')
    } catch (error) {
      console.error('Error adding new entry:', error)
    }
  }

  const color = useSelector((state) => state.theme.color)

  const updateData = async (id) => {
    try {
      const updatedUser = {
        name: name,
        description: description,
      }
      await axios.put(
        `https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter/${id}`,
        updatedUser
      )
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color ? color : '#fff',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#111',
        }}
      >
        {type == 'Thêm' ? 'Thêm' : 'Sửa'}
      </Text>
      <TextInput
        onChangeText={(text) => {
          setName(text)
        }}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="Nhập tên ..."
        placeholderTextColor="#111"
      />
      <TextInput
        onChangeText={(text) => {
          setDescription(text)
        }}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="Nhập tên ..."
        placeholderTextColor="#111"
      />
      {id == -1 ? (
        <TouchableOpacity
          style={{
            marginTop: 30,
            marginBottom: 30,
            width: 300,
            height: 45,
            backgroundColor: '#ff8eb9',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            addNewEntry()
          }}
        >
          <Text>Thêm</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            marginTop: 30,
            marginBottom: 30,
            width: 300,
            height: 45,
            backgroundColor: '#ff8eb9',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            updateData(id)
            navigate('Dang2_3_4')
          }}
        >
          <Text>Sửa</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Man2

const styles = StyleSheet.create({})
