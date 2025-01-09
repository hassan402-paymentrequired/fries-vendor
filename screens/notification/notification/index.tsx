import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.notifCon}>
        <View style={styles.notifProfile}>
          {/* image */}
        </View>
        <View style={styles.notifTextCon}>
          <Text style={styles.notifName}>John Doe</Text>
          <Text style={styles.notifMes}>You have a new message from John Doe</Text>
          <Text style={styles.notifTime}>20 min ago</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  notifCon: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderBottomWidth: 1,
    height: 80,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    gap: 5,
    borderColor: '#ccc'

  },
  notifProfile: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ccc'
  },
  notifTextCon: {
    flexDirection: 'column',
    gap: 1,
  },
  notifName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  notifTime: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 3
  }
})