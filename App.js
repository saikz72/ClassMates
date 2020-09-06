import React, { useEffect, useReducer } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from './src/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RootStackScreen from './src/screens/RootStackScreen';
import AuthReducer, {
  initialState,
} from './src/components/reducers/AuthReducer';
import AuthContext from './src/components/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  let newEmail = '';
  let newPassword = '';

  const authContext = React.useMemo(
    () => ({
      //function to sign in user
      handleSignIn: (email, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((auth) => dispatch({ type: 'LOGIN', token: 'TOKEN' }))
          .catch((e) => console.log(e));
      },
      //function to sign out user
      handleSignOut: () => {
        firebase.auth().signOut();
        dispatch({ type: 'LOGOUT', token: null, user: null });
      },
      //retrieves the email and password that user enters on signup
      handleSignUp: (email, password) => {
        newEmail = email;
        newPassword = password;
      },
      //authenticate signed up users credentials in firebase
      signupUserInFirebase: () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(newEmail, newPassword)
          .then((auth) => dispatch({ type: 'SIGNUP', token: 'TOKEN' }))
          .catch(() => console.log('ERROR WITH SIGN UP'));
      },
    }),
    []
  );

  //{/* runs on app start to determine the currentuser state (either logged in or not) */}
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
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

  //display a spinner to give feedback to user when loading
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
        {/* check the user token to determine what screen to display */}
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
