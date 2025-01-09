import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../constants/Colors'
import Input from '../../components/input'
import Button from '../../components/button'

const Register = () => {
    const { height, width } = Dimensions.get('window');
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <View style={styles.container}>

                <View style={[styles.textContainer, { width: width, height: height * 0.2 }]} >
                    <Text style={styles.text}>Sign Up</Text>
                    <Text style={styles.subtext}>Please Sign Up To Get Started</Text>
                </View>

                <View style={[styles.loginContainer, { width: width, height: height * 0.8 }]} >
                    <Input label={'Name'} placeholder='aileru lateefat' placeholderTextColor={Colors.Monochrome[900]} sty={{ marginTop: 20 }} />
                    <Input label={'Email'} placeholder='example@gmail.com' placeholderTextColor={Colors.Monochrome[900]} sty={{ marginTop: 20 }} />
                    <Input label={'Password'} placeholder='* * * * * * *' placeholderTextColor={Colors.Monochrome[900]} />
                    <Input label={'Comfirm Password'} placeholder='* * * * * * *' placeholderTextColor={Colors.Monochrome[900]} />

                    <Pressable>
                        <Text style={styles.forgot}>Forgot Password</Text>
                    </Pressable>

                    <Button text='SIGN UP i' />

                    <View style={styles.signUp}>
                        <Text style={styles.sign}>Don't have an account?</Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.forgot}>Sign Up</Text>
                        </Pressable>
                    </View>

                </View>


            </View>
        </SafeAreaView >
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#293345'
    },
    loginContainer: {
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        bottom: 0,
        padding: 15,
        gap: 30,
        justifyContent: 'center'

    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1
    },
    text: {
        fontSize: 40,
        fontWeight: 'black',
        color: Colors.Monochrome[100],
    },
    subtext: {
        fontSize: 20,
        color: Colors.Monochrome[100],

    },
    forgot: {
        width: '100%',
        textAlign: 'right',
        color: Colors.Sunset[700],
        fontWeight: 'bold',
        fontSize: 17
    },
    signUp: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap:5
    }

})