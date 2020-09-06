import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';

//This is the component that defines the status bar in the subSignupScreens
const StatusBar = (props) => {
    return (
        <View style={styles.statusBarView}>
            <Text style={styles.statusText}>{props.step}</Text>
            <Image
                source={props.source}
                style={styles.statusBar}
            ></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    //styling for:

    //the status bar
    statusBar: {
        height: 15,
        width: 320,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
    },

    //the view that encapsulates the status bar status text
    statusBarView: {
        width: 320,
    },

    //the text for status bar "3of3"
    statusText: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 20,
        alignSelf: 'flex-end',
        color: 'grey',
    },
});

export default StatusBar;
