import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const Button = ({ text, ...rest }: { text: any }) => {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.Custom[50],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text:  {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
})