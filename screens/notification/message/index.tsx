import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const MessageList = ({ navigation }) => {
  const messageData = [
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'Hey! How are you?',
      timestamp: '2:30 PM',
      avatar: require("../../../assets/images/splash.jpeg"), // Replace with actual avatar URLs
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'See you tomorrow!',
      timestamp: '1:15 PM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      lastMessage: 'Can we reschedule?',
      timestamp: '12:00 PM',
      avatar: 'https://via.placeholder.com/50',
    },
  ];

  const handlePress = (user) => {
    navigation.navigate('ChatScreen', { user });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem} onPress={() => handlePress(item)}>
            <Image source={require("../../../assets/images/splash.jpeg")} style={styles.avatar} />
            <View style={styles.messageDetails}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {item.lastMessage}
              </Text>
            </View>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
});
