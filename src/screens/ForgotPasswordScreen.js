import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import MajorButton from '../components/MajorButton';
import RegularTextInput from '../components/RegularTextInput';
import Feather from 'react-native-vector-icons/Feather';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    //this is code that customizes the alert when the user clicks the send button
    const sentAlert = () => {
        Alert.alert(
            "We've sent your reset password link to: ",
            email,
            [
                {
                    text: "Go back to login",
                    onPress: () => navigation.navigate('LoginScreen'),
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.fullPage}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

            {/* This is the forgot password icon/image */}
            <Image
                source={require('../../assets/forgotPasswordIcon.png')}
                style={styles.forgotPasswordIcon}>
            </Image>

            {/* View that contains subtexts about sending link to user's email */}
            <View style={styles.textContainer}>
                <Text style={styles.subText1}>Enter the email address associated with your account.</Text>
                <Text style={styles.subText2}>We will email you a link to reset your password.</Text>
            </View>

            {/* View that encapsulates text input and send button */}
            <View style={styles.TIandButton}>

                {/* Text input so user can type in email */}
                <RegularTextInput
                    placeholder="Enter email address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    secureTextEntry={false}
                    icon={<Feather name="mail" color='rgb(61, 139, 227)' size={25} style={{ alignSelf: 'center' }} />}
                />

                {/* Send button which sends email to user */}
                <MajorButton
                    text="Send"
                    nextScreen={() => { sentAlert() }} //this is the custom alert from above
                    buttonWidth={100}
                    borderRadius={20}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    //styling for: 

    //the entire page/background
    fullPage: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgb(232, 232, 232)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    //the "Forgot Password?" text at the top of thr page
    forgotPasswordText: {
        fontSize: 26,
        fontWeight: '600',
        color: 'rgb(61, 139, 227)',
        marginBottom: 20
    },

    //the forgot password icon
    forgotPasswordIcon: {
        height: 200,
        width: 200,
        marginLeft: 50
    },

    //subText1 
    subText1: {
        color: 'rgb(61, 139, 227)',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20,
        fontWeight: '600',
    },

    //subText2
    subText2: {
        color: 'rgba(0,0,0,0.2)',
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 10,
    },

    //the view for subText1 and subText 2
    textContainer: {
        width: 300,
    },

    //the view for the text, text input and send button
    TIandButton: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
    },
});

export default ForgotPasswordScreen;
