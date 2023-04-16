import React, { useState } from 'react'
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native'

const CountScreen = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <SafeAreaView>
      <View>
        <Text>{count ? (`Count: ${count}`) : null}</Text>
      </View>
      <TouchableOpacity onPress={() => handleIncrement()}>
        <Text>Clickea!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CountScreen