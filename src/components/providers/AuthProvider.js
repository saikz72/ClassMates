import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ authreducer, initialState, children }) => {
  return (
    <AuthContext.Provider value={useReducer(authreducer, initialState)}>
      {children}
    </AuthContext.Provider>
  );
};
