import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.fullPage}>
      <View style={styles.logoView}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/collaboration.jpg')}
          style={styles.image}
        />
        <Text style={styles.about}>
          ClassMates is a way to remotely connect students with other students
          undertaking the same course. It allows students to collaborate and
          share knowledge with each other.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress
          style={styles.button}
          onPress={() => navigation.navigate('SignupScreen')}
        >
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signView}>
        <Text style={{ fontSize: 13, color: 'grey' }}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              fontSize: 15,
              color: 'rgb(61, 139, 227)',
              fontWeight: 'bold',
            }}
          >
          Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  logoView: {
    borderColor: 'black',
  },
  image: {
    height: 180,
    width: 290,
    alignSelf: 'center',
    borderRadius: 10,
  },
  imageView: {
    borderColor: 'black',
    width: 330,
    height: 280,
    margin: 10,
    justifyContent: 'space-between',
  },
  about: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgb(61, 139, 227)',
  },
  fullPage: {
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStarted: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 270,
    height: 40,
    backgroundColor: 'rgb(61, 139, 227)',
  },
  signView: {
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    borderColor: 'black',
    justifyContent: 'space-between',
  },
});

export default GetStartedScreen;
