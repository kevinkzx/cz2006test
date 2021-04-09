import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDQqDdByz7RV0721d5rYNfU7HWo98LiTr0",
    authDomain: "stone-tract-307908.firebaseapp.com",
    projectId: "stone-tract-307908",
    storageBucket: "stone-tract-307908.appspot.com",
    messagingSenderId: "1059213021124",
    appId: "1:1059213021124:web:6fbe536b5710eaddc9de91",
    measurementId: "G-Q87TYX0BVP"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;