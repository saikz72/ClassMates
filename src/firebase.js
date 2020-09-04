import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAtIux3E2cizqQ-lvy3JSjI6MPu2THdOk0',
  authDomain: 'classmates-269f9.firebaseapp.com',
  databaseURL: 'https://classmates-269f9.firebaseio.com',
  projectId: 'classmates-269f9',
  storageBucket: 'classmates-269f9.appspot.com',
  messagingSenderId: '1078426457538',
  appId: '1:1078426457538:web:d9d6906fc86da409e6725b',
  measurementId: 'G-WD9HVJGP7G',
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
