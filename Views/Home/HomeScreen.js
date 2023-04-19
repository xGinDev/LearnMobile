import React, { useState } from 'react'
import { Pressable, View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native'
import Logo from '../../src/images/gin.jpg'

const HomeScreen = ({ navigation }) => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawerHome = () => {
    setDrawer(true)
  }
  const handleCloseDrawerHome = () => {
    setDrawer(!drawer)
  }

  return (
    <View>
      <Text style={style.titleWelcome}>Bienvenidos a la app de xGinDev</Text>
      <View style={style.containerImg}><Image style={style.imgLogo} source={Logo} /></View>
      <Button title={drawer ? 'Cerrar Menú' : 'Abrir Menú'} color='#CDA434' onPress={() => (handleDrawerHome(), handleCloseDrawerHome())} />
      {
        drawer ?
          <View>
            <ScrollView style={style.containerMenu}>
              <Pressable style={[style.buttonContact, style.button]} onPress={() => navigation.navigate('Contact')}>
                <Text style={style.textButton}>Ir a contacto</Text>
              </Pressable>
              <Pressable style={[style.buttonCount, style.button]} onPress={() => navigation.navigate('CountScreen')}>
                <Text style={style.textButton}>Ir a contador</Text>
              </Pressable>
              <Pressable style={[style.buttonModal, style.button]} onPress={() => navigation.navigate('Modal')}>
                <Text style={style.textButton}>Ir a Modal</Text>
              </Pressable>
              <Pressable style={[style.buttonModal, style.button]} onPress={() => navigation.navigate('Simulator')}>
                <Text style={style.textButton}>Ir a Simulador de crédito</Text>
              </Pressable>
            </ScrollView>
          </View>
          : null
      }
    </View>
  )
}

const style = StyleSheet.create({
  titleWelcome: {
    padding: 10,
    fontWeight: 700,
    textAlign: 'center'
  },
  containerMenu: {
    padding: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#000',
    marginBottom: 10
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerImg: {
    alignItems: 'center'
  },
  imgLogo: {
    resizeMode: 'cover',
    width: 200,
    height: 200,
    borderRadius: 500,
    marginBottom: 20
  }
})

export default HomeScreen