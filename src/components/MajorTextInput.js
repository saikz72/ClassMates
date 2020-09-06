import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

//This is the component that defines the major buttons in the app like the one on the SignupScreen
const MajorTextInput = (props) => {
  return (
    <View>
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
        width: 320,
        marginTop: 5,
        borderRadius: 4,
        fontSize: 18,
        color: 'black',
        borderBottomWidth: 2,
        paddingHorizontal: 15,
    },
    

});

export default MajorTextInput;
