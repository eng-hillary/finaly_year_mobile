import React from 'react'
import { View, Button, StyleSheet, FlatList, Text } from 'react-native'
import Screen from '../components/Screen'
import { FontAwesome5 } from '@expo/vector-icons';


export default function AmbulanceScreen({ navigation }) {

  const ambulances = [
    {
      number: '1',
      type: 'ordinary',
      owned_by: 'Nsambya hospital',
      driver: 'Hillary Lugala',
      phone: '0705408078',
      sick_beds: 2,
      aid_kits: 4,
      charge: 200000
    },
    {
      number: '2',
      type: 'modern',
      owned_by: 'Mulago',
      driver: 'Francis Xavier',
      phone: '0705408078',
      sick_beds: 1,
      aid_kits: 1,
      charge: 50000
    },
    {
      number: '3',
      type: 'ordinary',
      owned_by: 'Kibuli Hospital',
      driver: 'Namubiru Florence',
      phone: '0705408078',
      sick_beds: 2,
      aid_kits: 4,
      charge: 80000
    },
    {
      number: '5',
      type: 'modern',
      owned_by: 'Case Hospital',
      driver: 'Zahara ',
      phone: '0705408078',
      sick_beds: 2,
      aid_kits: 4,
      charge: 20000
    },
    {
      number: '6',
      type: 'ordinary',
      owned_by: 'Mukawya Hospital',
      driver: 'Jon Doe',
      phone: '0705408078',
      sick_beds: 2,
      aid_kits: 7,
      charge: 5000
    }
  ]
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.top}>
        <FontAwesome5 name="ambulance" size={40} color="white" style={styles.icon}/>
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
                      <FontAwesome5 name="ambulance" size={24} color="black" />

                    </View>
                    <View style={styles.card_content}>
                      <Text style={styles.text}> Ambulance No: {item.number}</Text>
                      <Text> Type: {item.type}</Text>
                      <Text numberOfLines={1} style={styles.text}> Owned By: {item.owned_by}</Text>
                      <Text style={styles.text}> charge /km: {item.charge} UGX</Text>
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