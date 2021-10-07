import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AmbulanceScreen from '../screens/AmbulanceScreen';


const HomeStack = createStackNavigator();

export default function AmbulanceStack(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="emergency" component={AmbulanceScreen} options={{ headerShown: false }}/>
      {/* <HomeStack.Screen name="booking" component={BookingScreen} options={{ headerShown: false }}/> */}
    </HomeStack.Navigator>
  )
}