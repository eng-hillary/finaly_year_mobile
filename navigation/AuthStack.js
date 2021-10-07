import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={
                    { headerShown: false }
                }

            />
            <Stack.Screen
                name="regisstration"
                component={RegistrationScreen}
            />
        </Stack.Navigator>
    )
}