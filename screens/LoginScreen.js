import React, {useContext} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Screen from '../components/Screen'

export default function LoginScreen({ navigation }) {

    // const { user, setUser} = useContext()
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

const signIn = (username, password) => {
    
}
    return (
        <Screen>
            <View style={styles.main}>
                <View style={styles.top}>
                    <Text style={styles.text}>QykE-Response</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.formContainer}>

                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TouchableOpacity
                            onPress={() => signIn({ username, password })}
                            style={styles.button}
                        >
                            <Text style={styles.title}>login</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </Screen>

    )
}



const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    top: {
        flex: 2,
        backgroundColor: '#990000',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        flex: 3,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center'
    },

    formContainer: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    input: {
        width: '80%',
        height: 40,
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        borderColor: '#ffffff'

    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff'

    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: '#990000',
        marginVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        color: '#ffffff',
        fontSize: 15,
        textTransform: 'uppercase'
    }

});