import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler';

//This is the component that defines the major text inputs in the app like the one on the SignupScreen
const PasswordTextInput = (props) => {

    //useStates to manage the password eye icon and hide/show password
    const[hidePassword, setHidePassword] = useState(true);
    const[passwordIcon, setPasswordIcon] = useState("eye");

    //this function chnages the password eye icon when clicked
    //this functon toggles between showing and hiding the password
    function changePassIconAndHide(){
        hidePassword ? setHidePassword(false) : setHidePassword(true);
        passwordIcon=="eye" ? setPasswordIcon("eye-off") : setPasswordIcon("eye")
    }
    return (
        <View style={styles.tiView}>

            {/* The icon on the left of the text input as determined by the parent (usually padlock icon)*/}
            {props.icon}
            
            {/* text input */}
            <TextInput
                style={styles.textIn}
                placeholder="password"
                placeholderTextColor="rgb(207, 207, 207)"
                autoCapitalize="none"
                autoCorrect={false}
                value={props.value}
                secureTextEntry={hidePassword}
                onChangeText={(val) => props.onChangeText(val)}
            />
            
            {/* clickable eye/eye-off button on the right of the text input to show/hide password*/}
            <TouchableOpacity
                style={{ justifyContent: 'center', height: 45 }}
                onPress={() => changePassIconAndHide()}
            >
                <Feather name={passwordIcon} color='grey' size={15} style={{ alignSelf: 'center' }} />
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

export default PasswordTextInput;
