import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const MajorButton = ({ navigation }) => {
  return (
    <View>
        <TouchableOpacity>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Next</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonView:{
        height: 40,
        backgroundColor: 'rgb(61, 139, 227)',
        width: 325,
        alignSelf: 'center',
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

export default MajorButton;
