import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAQiMmnopFapLGNP99yctOQlpS3czbjO9k",
    authDomain: "wily-app-91f1e.firebaseapp.com",
    databaseURL: "https://wily-app-91f1e.firebaseio.com",
    projectId: "wily-app-91f1e",
    storageBucket: "wily-app-91f1e.appspot.com",
    messagingSenderId: "1088122582415",
    appId: "1:1088122582415:web:3690893ce67c93da8987fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();