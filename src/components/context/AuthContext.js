import React, { useContext, useReducer } from 'react';

//this is the data layer
const AuthContext = React.createContext();

export const AuthProvider = ({ reducer, initialState, children }) => {
  <AuthContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContext.Provider>;
};

//this is how we use it inside of a component
export const useAuthValue = () => useContext(AuthContext);

export default AuthContext;
