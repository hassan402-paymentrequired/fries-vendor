import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const Product = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <Text style={styles.title}>My Food List</Text>
      <View style={[styles.container, { marginTop: 10, width: '100%' }]}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={[1, 2, 4, 5, 56, 3,4,5,6,4,3,3,3,3]}
          style={{padding:5, gap:10, marginBottom: 19, width}}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemInner}>
                <Image
                  source={require('../../assets/images/fry.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemInnerInfo}>
                <Text style={styles.itemName}>Chicken Thai Biriyani</Text>
                <View style={styles.iem}>
                  <Text style={styles.itemPrice}>₹ 250</Text>
                </View>
                <View style={styles.itemRating}>
                  <View style={styles.ratingInner}>
                    <AntDesign name="star" size={10} color={Colors.Custom[50]} />
                    <Text style={styles.itemRatingCount}>4.5</Text>
                    <Text >(10 Reviews)</Text>
                  </View>
                  <Text style={styles.delivery}>Pick Up</Text>
                </View>
              </View>
            </View>
          )}



        />
      </View>
    </SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Custom.background
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    padding: 10
  },
  item: {
    width: '100%',
    height: 100,
    shadowColor: '#000',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',

    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 5,
    flexDirection: 'row',
    gap: 3,
    padding: 3
  },
  itemInner: {
    flex: 1,
    overflow: 'hidden',
    objectFit: 'cover',
    borderRadius: 5
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5

  },
  itemInnerInfo: {
    flex: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'column'
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: Colors.Custom.text,
    marginTop: 10
  },
  itemRating: {
    flexDirection: 'row',
    width: 200,
    marginTop: 10,
    // justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 5,
    // borderWidth:1
  },
  itemRatingCount: {
    fontSize: 14,
    color: Colors.Custom[50],
  },
  ratingInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  delivery: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 20,
  }
})