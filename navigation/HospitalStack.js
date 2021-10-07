import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HospitalScreen from '../screens/HospitalScreen'

const Stack = createStackNavigator();

export default function HospitalStack(){
  return(
    <Stack.Navigator>
      < Stack.Screen name="Hospital_Home" component={HospitalScreen } options={{ headerShown: false }}/>
     
    </Stack.Navigator>
  )
}