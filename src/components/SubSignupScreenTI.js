import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

//This is the component that defines text inputs in the subSignupScreens
const SubSignupScreenTI = (props) => {
  return (
    <View style={styles.tiView}> 
      {props.icon}
      <TextInput
        style={styles.textIn}
        placeholder={props.placeholder}
        placeholderTextColor="rgb(207, 207, 207)"
        autoCapitalize="none"
        autoCorrect={false}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(val) => props.onChangeText(val)}
      />
      <TouchableOpacity 
          style={{justifyContent:'center', height: 65}}
          onPress={()=>props.onChangeText("")}
        >
          <Feather name="x-circle" color='grey' size={15} style={{alignSelf:'center'}}/>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //styling for:

  //text input
  textIn: {
    borderColor: 'rgb(61, 139, 227)',
    backgroundColor: 'rgba(0,0,0,0)',
    height: 65,
    width: 250,
    marginVertical: 1,
    borderRadius: 4,
    fontSize: 30,
    color: 'black',
    paddingHorizontal: 10
  },

  //TI view
  tiView: {
    borderBottomWidth: 2,
    flexDirection: 'row',
    borderColor: 'rgb(61, 139, 227)',
    width: 300,
    paddingHorizontal: 10,
  }
});

export default SubSignupScreenTI;
