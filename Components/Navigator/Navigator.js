import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../../Views/Contact/ContactScreen';
import HomeScreen from '../../Views/Home/HomeScreen'
import CountScreen from '../../Views/Count/CountScreen';
import ModalScreen from '../../Views/Modal/ModalScreen';
import SimulatorScreen from '../../Views/Simulator/SimulatorScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Welcome', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: '700'}}}/>
          <Stack.Screen name='Contact' component={ContactScreen}/>
          <Stack.Screen name='CountScreen' component={CountScreen}/>
          <Stack.Screen name='Modal' component={ModalScreen}/>
          <Stack.Screen name='Simulator' component={SimulatorScreen} options={{title: 'Simulador de crédito'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator