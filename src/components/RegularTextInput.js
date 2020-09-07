import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler';

//This is the component that defines the major text inputs in the app like the one on the SignupScreen
const RegularTextInput = (props) => {
  return (
    <View style={styles.tiView}>

      {/* The icon on the left of the text input as determined by the parent */}
      {props.icon}

      {/* text input */}
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

      {/* clickable x button on the right of the text input to clear text input */}
      <TouchableOpacity
        style={{ justifyContent: 'center', height: 45 }}
        onPress={() => props.onChangeText("")}
      >
        <Feather name="x-circle" color='grey' size={15} style={{ alignSelf: 'center' }} />
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
    height: 45,
    width: 260,
    borderRadius: 4,
    fontSize: 18,
    color: 'black',
    paddingLeft: 10,
  },

  //TI view
  tiView: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: 'rgb(61, 139, 227)',
    width: 320,
    paddingHorizontal: 10,
    borderRadius: 10
  },
});

export default RegularTextInput;
