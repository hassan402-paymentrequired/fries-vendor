import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const Input = ({ label, sty, ...rest }: { label: string, sty?: any }) => {
    return (
        <View style={[styles.container]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput  {...rest}  style={styles.input} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'column',
        gap: 4
    },
    label: {
        fontSize: 16,
        color: Colors.Monochrome[500],
    },
    input: {
        backgroundColor: Colors.Monochrome[100],
        height: '100%',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        fontSize: 17
    }
})