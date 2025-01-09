import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/images/splash.jpeg');

const Onboarding = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0)).current; 
  const { height } = Dimensions.get('window');
  const navigation = useNavigation(); 

  useEffect(() => {
    
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={[styles.textContainer, { bottom: height * 0.4 }]}>
            {/* Animated Fryback */}
            <Animated.View
              style={[
                styles.fryback,
                {
                  transform: [{ scale: scaleAnim }],
                  opacity: fadeAnim,
                },
              ]}
            >
              <Image
                source={require('../../assets/images/fry.png')}
                style={styles.fry}
              />
            </Animated.View>

            {/* Animated Text */}
            <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
              FRIE'S N FRESH
            </Animated.Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  fry: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  fryback: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 36,
    lineHeight: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
});
