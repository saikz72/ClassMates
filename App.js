import React, { useEffect, useReducer } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import firebase from './src/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RootStackScreen from './src/screens/RootStackScreen';
import reducer, { initialState } from './src/components/reducer';
import AuthContext from './src/components/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authContext = React.useMemo(
    () => ({
      handleSignIn: (email, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((auth) => dispatch({ type: 'LOGIN', token: 'TOKEN' }))
          .catch((e) => console.log(e));
      },
      handleSignOut: () => {
        firebase.auth().signOut();
        dispatch({ type: 'LOGOUT', token: null, user: null });
      },
      handleSignUp: (email, password) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => dispatch({ type: 'SIGNUP', token: 'TOKEN' }))
          .catch((e) => console.log(e));
      },
    }),
    []
  );

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: 'LOGIN',
          user: authUser,
          token: 'TOKEN',
        });
      } else {
        dispatch({
          type: 'LOGOUT',
          user: null,
          token: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken !== null ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
