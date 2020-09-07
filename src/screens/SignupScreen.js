import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AuthContext from '../components/context/AuthContext';
import MajorButton from '../components/MajorButton';
import RegularTextInput from '../components/RegularTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import Feather from 'react-native-vector-icons/Feather';

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
        <RegularTextInput
          placeholder="school email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          icon={<Feather name="mail" color='rgb(61, 139, 227)' size={25} style={{alignSelf:'center'}}/>}
        />

        {/* TI for password */}
        <PasswordTextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          icon={<Feather name="lock" color='rgb(61, 139, 227)' size={25} style={{alignSelf:'center'}}/>}
        />
      </View>

      {/* Signup button which navigates to the subSignupScreenFaculty */}
      <MajorButton
        text="Signup"
        nextScreen={() => signUp(email, password)}
        buttonWidth={270}
        borderRadius={10}
      />

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

  //the view that holds email and password TIs
  emailPassView: {
    height: 105,
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  //full page/background
  fullPage: {
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
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
