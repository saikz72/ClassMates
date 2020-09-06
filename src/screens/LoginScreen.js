import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AuthContext from '../components/context/AuthContext';
import MajorButton from '../components/MajorButton';
import MajorTextInput from '../components/MajorTextInput';

//useStates to handle input from user
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useContext(AuthContext);

  return (
    <View style={styles.fullPage}>

      {/* View that encapsulates the logo(text version) */}
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/classmatesTextBlue.png')}
          style={styles.logo}
        />
      </View>

      {/* View that encapsulates the text inputs (TIs) for email and password */}
      <View style={styles.emailPassView}>

        {/* TI for email */}
        <MajorTextInput
          placeholder="school email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          secureTextEntry={false}
        />

        {/* TI for password */}
        <MajorTextInput
          placeholder="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
      </View>

      {/* View that encapsulates the forgot password button */}
      <View style={styles.forgotView}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login button which navigates to the app HomeScreen */}
      <MajorButton
        text="Login"
        nextScreen={() => navigation.navigate('HomeScreen')}
        buttonWidth={270}
        borderRadius={10}
      />

      {/* View that encapsulates "Don't have account" */}
      <View style={styles.accountSignView}>
        <Text style={{ color: 'grey' }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.forgot}> Signup here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styling for:

  //the logo (text version)
  logo: {
    height: 100,
    width: 210,
    alignSelf: 'center',
  },

  //logo view
  logoView: {
    borderColor: 'white',
  },

  //the view for email and password text inputs
  emailPassView: {
    height: 105,
    justifyContent: 'space-between',
  },

  //the text forgot password button
  forgot: {
    color: 'rgb(61, 139, 227)',
  },

  //the view that houses the forgot password button
  forgotView: {
    width: 310,
    height: 40,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'black',
  },

  //the entire page/background
  fullPage: {
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //the view that has "Don't have an account"
  accountSignView: {
    width: 310,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
