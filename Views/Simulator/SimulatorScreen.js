import React, { useState } from 'react'
import {Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const SimulatorScreen = () => {

  const [credit, setCredit] = useState(0);
  const [result, setResult] = useState(0);

  const total = () => {
    setResult((credit * 0.12))
  }

  const resetValue = () => {
    setCredit(!credit)
  }

  console.log(credit);

  console.log(result)

  return (
    <View>
      <Text style={style.tilteSimulator}>
        Simulador de credito
      </Text>
      <TextInput placeholder='ingrese valor' value={String(credit)}/>
      <Button title='Borrar' onPress={() => resetValue()}/>
      <Pressable onPress={() => total()}>
        <Text>Total: {result}</Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  tilteSimulator: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20
  }
})

export default SimulatorScreen