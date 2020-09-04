import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const subSignupScreenFaculty = ({ navigation }) => {
  return (
    <View style={styles.fullPage}>
      <Text style={styles.facultyText}>What's your faculty?</Text>
      <TextInput 
          style = {styles.facultyTI}
          placeholder= "school faculty"
          placeholderTextColor= 'rgb(207, 207, 207)'
          autoCorrect = {false}
        />
        <View style={styles.statusBarView}>
            <Text style={styles.statusText}>1 of 3</Text>
            <Image source = {require("../../assets/1of3.png")} style={styles.statusBar}></Image>
        </View>
        <View>
            <TouchableOpacity
                onPress = {() => navigation.navigate('subSignupScreenMajor')}
            >
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(232, 232, 232)',
  },
  facultyText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)'
  },
  facultyTI:{
    borderColor: 'rgb(61, 139, 227)',
    backgroundColor: 'rgba(0,0,0,0)',
    height: 65,
    width: 320,
    marginVertical: 10,
    borderRadius: 4,
    fontSize: 18,
    color: 'black',
    borderBottomWidth: 2,
    fontSize: 30   
  },
  statusBar:{
    height: 15,
    width: 320,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20
  },
  statusBarView:{
    width: 320,
  },
  statusText:{
      fontSize: 15,
      fontWeight: '700',
      marginTop: 20,
      alignSelf: 'flex-end',
      color: 'grey'
    },
buttonView:{
    height: 40,
    backgroundColor: 'rgb(61, 139, 227)',
    width: 325,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center'
    },
buttonText:{
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
},

});

export default subSignupScreenFaculty;
