// Fake API dạng này : https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter
// Gọi Api về hiển thị dạng ListView hoặc GridView. (Dạng 2)
// (Dạng 3)  Filter ô TextInput dạng chữ.
// Còn filter Type dạng nút bấm.

// (Dạng 4) Thêm Xóa sửa mảng.

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../Dang5/redux/reducer'

const Dang2_3_4 = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  const [data, setData] = useState([]) // Dữ liệu từ Fake API

  const getData = async () => {
    await axios
      .get('https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const color = useSelector((state) => state.theme.color)

  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {
      getData()
    }, 500)

    return () => clearInterval(interval)
  }, [dispatch])

  const [searchText, setSearchText] = useState('')

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter/${id}`
      )
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color ? color : '#feffea',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Color:{color}</Text>
      <View style={{}}>
        <TextInput
          onChangeText={(text) => {
            setSearchText(text)
          }}
          style={{
            width: 400,
            height: 60,
            borderWidth: 1,
            backgroundColor: '#fff',
            borderRadius: 3,
            paddingLeft: 13,
          }}
          placeholder="Nhập tên Note"
          placeholderTextColor="#111"
        />
      </View>

      <View
        style={{
          marginTop: 20,
          height: 50,
          width: 400,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(changeColor('#d317aa'))
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#d317aa',
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(changeColor('#51ef7e'))
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#51ef7e',
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(changeColor('#caef51'))
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#caef51',
            }}
          ></View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 60,
          width: 360,
        }}
      >
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSearchText('work')
          }}
        >
          <Text>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSearchText('learn')
          }}
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSearchText('play')
          }}
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSearchText('')
          }}
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              // item.id<10?
              <View
                style={{
                  marginTop: 20,
                  width: 300,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#111',
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#567f67',
                    }}
                  >
                    {item.description}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 60,
                    color: 'red',
                  }}
                  onPress={() => {
                    deleteNote(item.id)
                  }}
                >
                  <Text>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigate('Man2', {
                      type: 'Sửa',
                      id: item.id,
                    })
                  }}
                  style={{
                    height: 60,
                    width: 60,
                    color: 'yellow',
                  }}
                >
                  <Text>sửa</Text>
                </TouchableOpacity>
              </View>
            )
          })}
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
            navigate('Man2', {
              type: 'Thêm',
              id: -1,
            })
          }}
        >
          <Text>Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Dang2_3_4

const styles = StyleSheet.create({})
