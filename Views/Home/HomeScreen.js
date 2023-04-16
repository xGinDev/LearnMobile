import React from 'react'
import { Pressable , View, Text, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={style.titleWelcome}>Bienvenidos a la app de xGinDev</Text>
      <Pressable  style={[style.buttonContact, style.button]} onPress={() => navigation.navigate('Contact')}>
        <Text style={style.textButton}>Ir a contacto</Text>
      </Pressable>
      <Pressable  style={[style.buttonCount, style.button]} onPress={() => navigation.navigate('CountScreen')}>
        <Text style={style.textButton}>Ir a contador</Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  titleWelcome: {
    padding: 10,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonContact: {
    backgroundColor: '#FF04DB'
  },
  buttonCount: {
    backgroundColor: '#000'
  },
  textButton: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  }
})

export default HomeScreen