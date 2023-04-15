import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../../Views/Contact/ContactScreen';
import HomeScreen from '../../Views/Home/HomeScreen'

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Contact' component={ContactScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator