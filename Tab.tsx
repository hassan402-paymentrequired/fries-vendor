import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from './constants/Colors'

interface Props {
  label?: string,
}

const FormInputGroup = ({ label, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} {...rest}  />
      </View>
    </View>
  )
}

export default FormInputGroup

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10
  },
  inputGroup:
  {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    // backgroundColor: Colors.Custom[100]
  },
  input: {
    height: 49,
    fontSize: 16,
    color: Colors.Custom[100],
    paddingHorizontal: 10
  },
  label: {
    fontSize: 15,
    marginVertical: 4
  },
})