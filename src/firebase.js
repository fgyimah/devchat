import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCoxdprg6a-4mrElNb4RFeam-e93Mnfjdo',
  authDomain: 'slack-clone-application.firebaseapp.com',
  databaseURL: 'https://slack-clone-application.firebaseio.com',
  projectId: 'slack-clone-application',
  storageBucket: 'slack-clone-application.appspot.com',
  messagingSenderId: '405045287832',
  appId: '1:405045287832:web:a27ef6b62ad2055b'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
