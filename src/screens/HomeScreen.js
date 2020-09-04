import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../components/context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { handleSignOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => handleSignOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
