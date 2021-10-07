import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator();

export default function NotificationStack(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="emergency" component={EmergencyScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="booking" component={BookingScreen} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  )
}