import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBpfLZEdTUMaRFi0p3eJgAUqqt-Xq2YufA",
    authDomain: "serial-6c579.firebaseapp.com",
    databaseURL: "https://serial-6c579.firebaseio.com",
    projectId: "serial-6c579",
    storageBucket: "serial-6c579.appspot.com",
    messagingSenderId: "159537532873"
};
var fire = firebase.initializeApp(config);
export default fire;