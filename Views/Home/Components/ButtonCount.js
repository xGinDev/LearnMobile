import React, { useState } from 'react'
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import style from './ButtonCount.css'

const ButtonCount = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={style.buttonCount} onPress={() => handleIncrement()}>
        <Text>Clickea!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ButtonCount