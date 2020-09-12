import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from '../firebase';
import { AuthContext } from '../components/providers/AuthProvider';

export default function HomeStack() {
  const [state, dispatch] = useContext(AuthContext);

  //console.log(state);
  const logoutUser = () => {
    firebase.auth().signOut();
    dispatch({ type: 'SET_USER', user: null, token: null });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to ClassMates{} </Text>
      <Button title="Logout" onPress={() => logoutUser()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
