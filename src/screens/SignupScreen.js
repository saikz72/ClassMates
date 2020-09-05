import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import AuthContext from '../components/context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignUp } = useContext(AuthContext);

  const signUp = (email, password) => {
    //TODO validate credentials
    handleSignUp(email, password);
    navigation.navigate('subSignupScreenFaculty');
  };

  return (
    <View style={styles.fullPage}>
      {/* View that encapsulates the ClassMates logo(text version) */}
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/classmatesTextBlue.png')}
          style={styles.logo}
        />
      </View>

      {/* View that encapsulates text inputs for both email and passowrd */}
      <View style={styles.emailPassView}>
        {/* TI for email */}
        <TextInput
          style={styles.emailPassTI}
          placeholder="school email"
          placeholderTextColor="rgb(207, 207, 207)"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        {/* TI for password */}
        <TextInput
          style={styles.emailPassTI}
          placeholder="password"
          placeholderTextColor="rgb(207, 207, 207)"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* Signup button */}
      <TouchableOpacity
        onPress={() => signUp(email, password)}
        style={styles.signupButton}
      >
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>

      {/* View that encapsulates Microsoft authentication */}
      <View style={styles.msAccountView}>
        <Text style={styles.msAccountText}>
          Or signup using your Microsoft account
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/msLogo.png')}
            style={styles.msLogo}
          />
        </TouchableOpacity>
      </View>

      {/* View that encapsulates text for terms and conditions */}
      <View style={styles.termsAndCondView}>
        <Text style={styles.agreeText}>By signing up you agree to our</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/document/d/19qLGCM1354GiFU7JCmP9pU8gyY0A1GpQp1ZUHCNe0l0/edit?usp=sharing'
            )
          }
        >
          <Text style={styles.termsAndCondText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styling for:

  //the logo (text version)
  logo: {
    height: 80,
    width: 210,
    alignSelf: 'center',
  },

  //the view for the logo
  logoView: {
    borderColor: 'white',
  },

  //text inputs for the email and password
  emailPassTI: {
    borderColor: 'rgb(61, 139, 227)',
    backgroundColor: 'rgba(0,0,0,0)',
    height: 45,
    width: 320,
    marginTop: 5,
    borderRadius: 4,
    fontSize: 18,
    color: 'black',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
  },

  //the view that holds email and password TIs
  emailPassView: {
    height: 105,
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  //the background for the signup button
  signupButton: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    height: 40,
    backgroundColor: 'rgb(61, 139, 227)',
  },

  //full page/background
  fullPage: {
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //the text inside the signup button
  signupText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },

  //the text for signing up using Microsoft
  msAccountText: {
    color: 'grey',
    fontWeight: '800',
  },

  //the view that encapsulates text about signup using MS and Ms logo
  msAccountView: {
    width: 300,
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  //the ms logo
  msLogo: {
    height: 40,
    width: 40,
  },

  //the text "By signing..."
  agreeText: {
    color: 'grey',
    fontSize: 10,
  },

  //the text for the "Terms and Conditions"
  termsAndCondText: {
    color: 'rgb(61, 139, 227)',
    fontSize: 10,
  },

  //the view that encapsulates everything about terms and conditions
  termsAndCondView: {
    width: 310,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;
