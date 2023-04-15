import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'

const ContactScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.inputContact} placeholder='Name'/>
        <TextInput style={styles.inputContact} placeholder='Email' inputMode='email'/>
        <TextInput style={styles.inputContact} placeholder='Address'/>
        <TextInput style={styles.inputContact} placeholder='Phone' inputMode='numeric'/>
        <TextInput style={styles.inputContact} placeholder='Birth day'/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputContact: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default ContactScreen