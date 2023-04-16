import React from 'react'
import { Button, View, Text } from 'react-native'
import ButtonCount from './Components/ButtonCount'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ButtonCount />
      {/* <Button title='Go to contact' onPress={() => navigation.navigate('Contact')} /> */}
    </View>
  )
}

export default HomeScreen