import React from 'react'
import { View, Button, StyleSheet, FlatList, Text } from 'react-native'
import Screen from '../components/Screen'
import { FontAwesome5,  Fontisto } from '@expo/vector-icons';


export default function AmbulanceScreen({ navigation }) {

  const ambulances = [
    {
      number: '1',
      type: 'Hospital',
      name: 'mulago',
      owned_by: 'governent',
      location: 'Wandeya',
      phone: '0705408078',
      sick_beds: 2,
      aid_kits: 4,
      charge: 200000
    },
    {
      number: '2',
      type: 'Hospital',
      name: 'St. Francis',
      owned_by:'Catolic church',
      location: 'Nsambia',
      phone: '0705408078',
      sick_beds: 1,
      aid_kits: 1,
      charge: 50000
    },
    {
      number: '3',
      type: 'Clinic',
      name: 'Case Clinic',
      owned_by: 'private',
      location: 'Wandeya',
      phone: '0705408078',
      sick_beds: 2,
      aid_kits: 4,
      charge: 80000
    },
    {
      number: '5',
      type: 'Hospital',
      name: 'Mukwaya',
      owned_by: 'private',
      location: 'Bweyogere',
      sick_beds: 2,
      aid_kits: 4,
      charge: 20000
    },
    {
      number: '6',
      type: 'Hospital',
      name: 'Novik',
      owned_by: 'private',
      location: 'kabaka Rd Kampala',
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
        <Fontisto name="hospital" size={40} color="white" style={styles.icon} />
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
                    <FontAwesome5 name="hospital" size={24} color="black" />

                    </View>
                    <View style={styles.card_content}>
                      <Text style={styles.text}> Name: {item.name}</Text>
                      <Text style={styles.text}> Type: {item.type}</Text>
                      <Text style={styles.text}> Owned By: {item.owned_by}</Text>
                      <Text style={styles.text}> charge : {item.charge} UGX</Text>
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