import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/100', // Replace with an actual profile picture URL
    totalOrders: 25, // Example total number of orders
  };

  const handleViewProfile = () => {
    // Logic to view profile info
    console.log('View Profile Info Pressed');
  };

  const handleViewReviews = () => {
    // Logic to view all reviews
    console.log('View All Reviews Pressed');
  };

  const handleSettings = () => {
    // Logic to navigate to settings
    console.log('Settings Pressed');
  };

  const handleLogout = () => {
    // Logic to log out
    console.log('Logout Pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleViewProfile}>
        <Text style={styles.buttonText}>View Profile Info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleViewReviews}>
        <Text style={styles.buttonText}>View All Reviews</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSettings}>
        <Text style={styles.buttonText}>View Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Total Orders: {user.totalOrders}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#007BFF',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
  },
});
