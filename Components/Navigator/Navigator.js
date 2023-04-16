import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../../Views/Contact/ContactScreen';
import HomeScreen from '../../Views/Home/HomeScreen'
import CountScreen from '../../Views/Count/CountScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Welcome'}}/>
          <Stack.Screen name='Contact' component={ContactScreen}/>
          <Stack.Screen name='CountScreen' component={CountScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator