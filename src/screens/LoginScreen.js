import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import firebase from '../firebase';
import MajorButton from '../components/MajorButton';
import RegularTextInput from '../components/RegularTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/providers/AuthProvider';
import Loading from '../components/Loading';

//useStates to handle input from user
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useContext(AuthContext);

  const loginUser = (email, password) => {
    //dispatch({ type: 'LOG_USER' });
    console.log('button pressed');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) =>
        dispatch({
          type: 'SET_USER',
          loading: true,
          user: user,
          token: 'TOKEN',
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  function renderLoginButton() {
    if (state.loading) {
      return <Loading />;
    } else {
      return (
        <MajorButton
          text="Login"
          nextScreen={() => loginUser(email, password)}
          buttonWidth={270}
          borderRadius={10}
        />
      );
    }
  }

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
        <RegularTextInput
          placeholder="school email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          secureTextEntry={false}
          icon={
            <Feather
              name="mail"
              color="rgb(61, 139, 227)"
              size={25}
              style={{ alignSelf: 'center' }}
            />
          }
        />

        {/* TI for password */}
        <PasswordTextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          icon={
            <Feather
              name="lock"
              color="rgb(61, 139, 227)"
              size={25}
              style={{ alignSelf: 'center' }}
            />
          }
        />
      </View>

      {/* View that encapsulates the forgot password button */}
      <View style={styles.forgotView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login button which navigates to the app HomeScreen */}
      {renderLoginButton()}
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
