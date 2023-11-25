import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const A112 = (props) => {
  const { name } = props.route.params

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#111',
        }}
      >
        {name}
      </Text>
    </View>
  )
}

export default A112

const styles = StyleSheet.create({})
