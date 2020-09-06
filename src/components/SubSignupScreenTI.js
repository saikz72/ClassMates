import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

//This is the component that defines text inputs in the subSignupScreens
const SubSignupScreenTI = (props) => {
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
        height: 65,
        width: 320,
        marginVertical: 10,
        borderRadius: 4,
        fontSize: 30,
        color: 'black',
        borderBottomWidth: 2,
    },
});

export default SubSignupScreenTI;
