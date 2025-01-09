import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/button'
import Loading from '../../components/loading'
import { Image } from 'react-native'
import { Colors } from '../../constants/Colors';
import Input from '../../components/input';

const logo = require("../../assets/images/google.png")

const Login = () => {
    const { height, width } = Dimensions.get('window');
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(false)
    const [phoneNumber, setphoneNumber] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>

            <View>
                <View style={styles.headerContainer}>
                    {/* <Logo /> */}
                    <Text style={styles.headerText}>Welcome Back</Text>
                    <Text style={styles.subHeaderText}>
                        Log into your account using mobile number or social networks
                    </Text>
                </View>

                <Pressable style={styles.googleLoginButton}>
                    <Image source={logo} style={styles.googleLogo} />
                    <Text style={styles.googleLoginText}>Login With Google</Text>
                </Pressable>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>Or use your email and password</Text>
                    <View style={styles.divider} />
                </View>

                <Input
                    placeholder="Enter Mobile Number"
                    value={phoneNumber}
                    onChangeText={(text) => setphoneNumber(text)}
                    type={'numeric'}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secure={true}
                />

                <Pressable style={{ width: '100%' }} onPress={() => navigation.navigate("app")}>
                    <Text style={styles.forgotPasswordLink}>
                        Forgot Password?
                    </Text>
                </Pressable>

                <Button
                    text={isLoading ? <AntDesign name="reload1" size={24} color="white" /> : "Login"}
                    onPress={handleLogin}
                // style={{ marginTop: 10 }}
                />

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>
                    {/* <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.signUpLink}>Sign Up</Text>
                    </Pressable> */}
                </View>
            </View>
            <Loading show={isLoading} />

        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 32,
        color: Colors.Custom.text,
        textAlign: 'center',
        marginTop: 20
    },
    subHeaderText: {
        fontSize: 14,
        color:Colors.Custom.text,
        textAlign: 'center',
    },
    googleLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        boxShadow: '0px 0px 3px rgba(0, 0, 0,0.2)',
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    googleLoginText: {
        fontSize: 18,
        color:Colors.Custom.text,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 8,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.Custom.background,
    },
    dividerText: {
        fontSize: 16,
        color: Colors.Custom.text,
        marginHorizontal: 8,
    },
    forgotPasswordLink: {
        color: Colors.Custom[50],
        alignSelf: 'flex-end',
        marginTop: 2,
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    signUpText: {
        fontSize: 16,
        color:Colors.Custom.text,
    },
    signUpLink: {
        fontSize: 16,
        color: Colors.Custom[50],
        marginLeft: 4,
    },
    topBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3
    }
});

export default Login;
