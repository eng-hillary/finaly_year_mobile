import React, { useState, createContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';
import BottonTab from './navigation/BottomTab';



export default function App() {

  const [user, setUser] = useState(null);
  const AuthContext = createContext();

  return (

    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {
          user === null ?
            <BottonTab /> :
            <AuthStack />
        }
      </NavigationContainer>

    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    justifyContent: 'center',
    alignContent: 'center'

  }

});