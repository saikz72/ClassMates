import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

//This is the component that defines text inputs in the subSignupScreens
const CourseTab = (props) => {
    return (
        // View that wraps each box that holds the course and delete button
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.conatiner}>
                <Text style={styles.courseText}>{props.course}</Text>
            </View>

            {/* Trsh can to remove the course from the list */}
            <TouchableOpacity 
                style={{ alignSelf: 'center', paddingHorizontal: 10 }}
                onPress={()=>props.deleteCourse(props.course)}
            >
                <Feather name="trash-2" size={20}/>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({

    //the container for each course text
    conatiner: {
        backgroundColor: 'rgb(232, 232, 232)',
        height: 30,
        width: 230,
        marginVertical: 5,
        borderColor: 'rgb(61, 139, 227)',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    //the text of each course
    courseText: {
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
});

export default CourseTab;
