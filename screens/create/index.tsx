import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInputGroup from '../../Tab'
import ImagePickerExample from '../../components/imageSelector'
import { Colors } from '../../constants/Colors'
import Button from '../../components/button'

const CreateProduct = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const toggleSwitch = () => setIsAvailable(previousState => !previousState);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        <Text style={styles.title}>Create Product</Text>
        <FormInputGroup placeholder='Item Name' />
        <FormInputGroup placeholder='Describe the Item'
          multiline={true}
          numberOfLines={5}
        />
        <ImagePickerExample image={image} setImage={setImage} />
        <FormInputGroup placeholder='Item price' />
        <FormInputGroup placeholder='Item Unit' />
        <FormInputGroup placeholder='Discount Price (optional)' />

        <View style={styles.stock}>
          <Text style={{ fontSize: 20 }}>
            Is this service available?
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isAvailable ? Colors.Custom[50] : '#f4f3f4'}
            ios_backgroundColor={Colors.Custom[50]}
            onValueChange={toggleSwitch}
            value={isAvailable}
          />
        </View>

        <Button text='Create Item'/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  stock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
})