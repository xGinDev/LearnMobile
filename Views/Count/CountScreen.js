import React, { useState } from 'react'
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native'

const CountScreen = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <SafeAreaView>
      <TouchableOpacity style={style.buttonCount} onPress={() => handleIncrement()}>
        <Text style={style.textButtonCount}>Clickea!</Text>
      </TouchableOpacity>
      <View>
        <Text style={style.textCount}>{count ? (`Count: ${count}`) : null}</Text>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  buttonCount: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButtonCount: {
    fontWeight: 700,
    justifyContent: 'center',
     alignItems: 'center'
  },
  textCount: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 700
  }
})

export default CountScreen