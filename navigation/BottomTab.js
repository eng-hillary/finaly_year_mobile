import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { 
  MaterialIcons,
  Ionicons 
 } from '@expo/vector-icons';

import HospitalScreen from '../screens/HospitalScreen';
import ContactScreen from '../screens/ContactScreen';
import NotificationsScreen from '../screens/Notification';

import AmbulanceStack from './AmbulanceStack';
import HospitalStack from './HospitalStack';





const Tab = createBottomTabNavigator();



export default function BottonTab() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === "Home") {
          return (
            <MaterialIcons name="home" size={size} color={color} />
          );
        } else if (route.name === "Hospitals") {
          return <MaterialIcons name="local-hospital" size={30} color={color} />;
        } else if (route.name === "Contacts") {
          return <MaterialIcons name="contact-phone" size={size} color={color} />;
        } else if (route.name === "Notifications") {
          return (
            <Ionicons name="person-circle-outline" size={35} color={color} />
          );

        }
      },
      tabBarActiveTintColor: '#990000',
      tabBarInactiveTintColor: "gray",
    })}
      
     
    >

      <Tab.Screen name="Home" component={AmbulanceStack} 
      options={
        {
          headerShown: false
        }
      }
      />
      <Tab.Screen name="Hospitals" component={HospitalStack}
      options={
        {
          headerShown: false
        }
      }
       />
      <Tab.Screen name="Contacts" component={ContactScreen} 
      options={
        {
          headerShown: false
        }
      }
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
    </Tab.Navigator>

  )
}