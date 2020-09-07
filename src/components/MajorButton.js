import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//This is the component that defines the major buttons in the app like the one on the SignupScreen
const MajorButton = (props) => {
    return (
        <View>

            {/* When the user clicks this button, the user is navigated to the next screen determined by the parent */}
            <TouchableOpacity
                onPress={() => { props.nextScreen() }}
            >
                <View style={[styles.buttonView, { width: props.buttonWidth }, { borderRadius: props.borderRadius }]}>
                    <Text style={styles.buttonText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    //styling for:

    //the background of the button
    buttonView: {
        height: 40,
        backgroundColor: 'rgb(61, 139, 227)',
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    //the text inside the button
    buttonText: {
        fontSize: 22,
        color: 'white',
        fontWeight: '500',
    },

});

export default MajorButton;
