import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Linking} from 'react-native';

const SignupScreen = () => {
  return (
    <View style = {styles.fullPage}>
      <View style = {styles.logoView}>
        <Image source = {require("../../assets/classmatesTextBlue.png")} style={styles.logo}/>
      </View>
      <View style = {styles.emailPassView}>
        <TextInput 
          style = {styles.emailPassTI}
          placeholder= "school email"
          placeholderTextColor= 'rgb(207, 207, 207)'
          autoCapitalize = "none"
          autoCorrect = {false}
        />
        <TextInput 
          style = {styles.emailPassTI}
          placeholder= "password"
          placeholderTextColor= 'rgb(207, 207, 207)'
          secureTextEntry={true}
          autoCapitalize = "none"
          autoCorrect = {false}
        />
      </View>
      <View>
        <TouchableOpacity onPress style={styles.signupButton}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.msAccountView}>
        <Text style={styles.msAccountText}>Or signup using your Microsoft account</Text>
        <TouchableOpacity>
          <Image source = {require("../../assets/msLogo.png")} style={styles.msLogo}/>
        </TouchableOpacity>
      </View>
      <View style = {styles.termsAndCondView}>
        <Text style = {styles.agreeText}>By signing up you agree to our</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://docs.google.com/document/d/19qLGCM1354GiFU7JCmP9pU8gyY0A1GpQp1ZUHCNe0l0/edit?usp=sharing')}
        >
          <Text style = {styles.termsAndCondText}> Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create ({
  logo:{
    height:  80,
    width: 210,
    alignSelf: 'center',
  },
  logoView:{
    borderColor: 'white',
  },
  girlsPic:{
    height:  150,
    width: 250,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  emailPassTI:{
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
  emailPassView:{
    height: 105,
    justifyContent: 'space-between',
    marginBottom: 20
  },
  signupButton:{
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    height: 40,
    backgroundColor: 'rgb(61, 139, 227)'
  },
  fullPage:{
    flex: 1,
    padding: 100,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText:{
    fontSize: 22,
    color: 'white',
    fontWeight: '500'
  },
  msAccountText:{
    color: 'grey',
    fontWeight: "800"
  },
  msAccountView:{
    width: 300,
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between',
    marginVertical: 20
  },
  msLogo:{
    height: 40,
    width: 40
  },
  agreeText:{
    color: 'grey',
    fontSize: 10
  },
  termsAndCondText:{
    color: 'rgb(61, 139, 227)',
    fontSize: 10
  },
  termsAndCondView:{
    width: 310,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default SignupScreen;
