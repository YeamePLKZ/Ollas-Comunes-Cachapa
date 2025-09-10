import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';

const Bienvenido = () => {
  const handlePress = () => {
    router.push('/login');
  };

  return (
    <ImageBackground source={require('../assets/olla1.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        {/* Logo container */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo gl.png')} style={styles.logo} />
        </View>

        {/* Content container */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Bienvenido Olla Común</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%', 
    height: '100%', 
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%', 
    height: '100%', 
    
  },
  logoContainer: {
    position: 'absolute', 
    top: 50, 
    left: 20, 
    zIndex: 1, 
  },
  logo: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'orange', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Bienvenido;
