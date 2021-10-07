import React from 'react'
import { View, Button, StyleSheet, FlatList, Text } from 'react-native'
import Screen from '../components/Screen'
import { FontAwesome5,  Feather } from '@expo/vector-icons';


export default function ContactScreen({ navigation }) {

  const ambulances = [
    {
      number: '1',
      station: "Wandegya Police station",
     located: 'wandegya',
      phone: '0705408078',
      
    },
    {
      number: '2',
      station: "Central Police station",
      located: 'wandegya',
       phone: '0705408078',
    },
    {
      number: '3',
      station: "Bweyogere Police station",
      located: 'Bweyogere',
       phone: '0705408078',
    },
    {
      number: '5',
      station: "Namasuba Police station",
      located: 'Namasuba',
       phone: '0705408078',
    },
    {
      number: '6',
      station: "kawempe Police station",
      located: 'kawempe',
       phone: '0705408078',
    }
  ]
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.top}>
        <Feather name="phone-call" size={40} color="white" style={styles.icon}/>
        </View>
        <View style={styles.bottom}>
          <View style={styles.section}>
            <FlatList
              data={ambulances}
              keyExtractor={item => item.number}
              renderItem={
                ({ item }) => (
                  <View style={styles.card}>
                    <View style={styles.image_section}>
                      < Feather name="phone-call" size={24} color="black" />

                    </View>
                    <View style={styles.card_content}>
                      <Text  numberOfLines={1} style={styles.text}> Station: {item.station}</Text>
                      <Text  numberOfLines={1} style={styles.text}> Loaction: {item.located}</Text>
                      <Text  numberOfLines={1} style={styles.text}> Contact: {item.phone}</Text>
                      
                    </View>
                  </View>
                )
              }
            />
          </View>
        </View>
      </View>

    </Screen>

  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  top: {
    flex: 1,
    backgroundColor: '#990000',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  bottom: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },
  section: {
    height: '80%',
    width: '80%',
  },
  card: {
    flexDirection: 'row',
    marginVertical: 2,
    backgroundColor: 'gray',
    width: '90%',
    height: 150,
    backgroundColor: 'white'

  },
  image_section: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  card_content: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  icon: {
    alignSelf: 'center',
    marginVertical: 30
  },
  text: {
    width: 180,
    fontStyle: 'italic'
  }
})