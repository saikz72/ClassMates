import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '../firebase';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import RegistrationStack from './RegistrationStack';
import { AuthContext } from '../components/providers/AuthProvider';

export default function Routes() {
  //const [loading, setLoading] = useState(true);
  const [state, dispatch] = useContext(AuthContext);
  console.log(state);
  // Handle user state changes
  function onAuthStateChanged(authUser) {
    //when user's email is verified
  }
  useEffect(() => {
    dispatch({ type: 'SET_USER', loading: false });
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const rightScreen = () => {
    if (state.user && state.token) {
      return <HomeStack />;
    } else if (state.user) {
      return <RegistrationStack />;
    } else {
      return <AuthStack />;
    }
  };

  return <NavigationContainer>{rightScreen()}</NavigationContainer>;
}
