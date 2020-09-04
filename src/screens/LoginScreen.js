import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AuthContext from '../components/context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useContext(AuthContext);

  return (
    <View style={styles.fullPage}>
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/classmatesTextBlue.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.emailPassView}>
        <TextInput
          style={styles.emailPassTI}
          placeholder="school email"
          placeholderTextColor="rgb(207, 207, 207)"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
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
      <View style={styles.forgotView}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleSignIn(email, password)}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountSignView}>
        <Text style={styles.loggedin}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.forgot}> Signup here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 210,
    alignSelf: 'center',
  },
  logoView: {
    borderColor: 'white',
  },
  emailPassTI: {
    borderColor: 'rgb(61, 139, 227)',
    backgroundColor: 'rgba(0,0,0,0)',
    height: 45,
    width: 320,
    marginTop: 5,
    borderRadius: 4,
    fontSize: 18,
    color: 'white',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
  },
  emailPassView: {
    height: 105,
    justifyContent: 'space-between',
  },
  tick: {
    height: 20,
    width: 20,
  },
  loggedin: {
    color: 'grey',
  },
  forgot: {
    color: 'rgb(61, 139, 227)',
  },
  forgotView: {
    width: 310,
    height: 40,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'black',
  },
  loginButton: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    height: 40,
    backgroundColor: 'rgb(61, 139, 227)',
  },
  fullPage: {
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  accountSignView: {
    width: 310,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
