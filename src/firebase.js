import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  //fill with your own data, people are using my firebase account anyhow
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
