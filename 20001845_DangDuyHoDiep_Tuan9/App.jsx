import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import A111 from './Dang1/TruyenDuLieu/A111'
import A112 from './Dang1/TruyenDuLieu/A112'
import A211 from './Dang1/DangNhap/A211'
import A212 from './Dang1/DangNhap/A212'
import Dang2_3_4 from './Dang2_3_4/Dang2_3_4'
import Man2 from './Dang2_3_4/Man2'
import store from './Dang5/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          // Quản lý các màn hình
          initialRouteName="Dang2_3_4"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Dạng 1.1 */}
          <Stack.Screen name="A111" component={A111} />
          <Stack.Screen name="A112" component={A112} />

          {/*
        Dạng 1.2
        */}
          <Stack.Screen name="A211" component={A211} />
          <Stack.Screen name="A212" component={A212} />

          {/* Dạng 2, 3  */}
          <Stack.Screen name="Dang2_3_4" component={Dang2_3_4} />
          <Stack.Screen name="Man2" component={Man2} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
