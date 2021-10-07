import React from 'react'
import { View , Button} from 'react-native'
import Emergency from '../components/Emergency';

function EmergencyScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Emergency/>
        <Button
          title="Go To Booking"
          onPress={() => navigation.navigate('booking')}
        />
        
      </View>
    );
  }

  export default EmergencyScreen;