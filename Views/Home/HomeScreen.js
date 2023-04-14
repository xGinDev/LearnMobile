import React from 'react'
import { Button, View, Text } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Button title='Go to contact' onPress={() => navigation.navigate('Contact')}/>
    </View>
  )
}

export default HomeScreen