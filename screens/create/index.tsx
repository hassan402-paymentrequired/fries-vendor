import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInputGroup from '../../Tab'
import { Colors } from '../../constants/Colors'
import Button from '../../components/button'
import ImagePickerCom from '../../components/imageSelector'

const CreateProduct = () => {
  const [itemName, setItemName] = useState<string>('');
  const [itemDesc, setItemDesc] = useState<string>('');
  const [itemPrice, setItemPrice] = useState<string | number>('');
  const [itemUnit, setItemUnit] = useState<string | number>('');
  const [itemDiscount, setItemDiscount] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const toggleSwitch = () => setIsAvailable(previousState => !previousState);

  const handleSubmit = () => {
    const payload = {
      itemName: itemName,
      itemDesc: itemDesc,
      itemPrice: itemPrice,
      itemUnit: itemUnit,
      itemDiscount: itemDiscount,
      image: image,
      isAvailable: isAvailable
    }
    console.log(payload);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        <Text style={styles.title}>Create Product</Text>
        <FormInputGroup placeholder='Item Name' value={itemName} onChangeText={setItemName} />
        <FormInputGroup placeholder='Describe the Item'
          multiline={true}
          numberOfLines={5}
          value={itemDesc} onChangeText={setItemDesc}
        />
        <View style={{ marginVertical: 10 }}>
          <ImagePickerCom image={image} setImage={setImage} />
        </View>
        <FormInputGroup placeholder='Item price' value={itemPrice} onChangeText={setItemPrice} />
        <FormInputGroup placeholder='Item Unit' value={itemUnit} onChangeText={setItemUnit} />
        <FormInputGroup placeholder='Discount Price (optional)' value={itemDiscount} onChangeText={setItemDiscount} />

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

        <Button text='Create Item' onPress={handleSubmit}/>
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
    alignItems: 'center',
    marginBottom: 20
  },
})