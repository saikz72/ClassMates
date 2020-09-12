import React from 'react';
import { AuthProvider } from '../components/providers/AuthProvider';
import authreducer, { initialState } from '../components/reducers/authReducer';
import Routes from './Routes';

export default function Providers() {
  return (
    <AuthProvider initialState={initialState} authreducer={authreducer}>
      <Routes />
    </AuthProvider>
  );
}
