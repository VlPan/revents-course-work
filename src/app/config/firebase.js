import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvDAMomTHfG80axsM2SxZ7eyZyURCAWhU",
  authDomain: "revv-ba647.firebaseapp.com",
  databaseURL: "https://revv-ba647.firebaseio.com",
  projectId: "revv-ba647",
  storageBucket: "revv-ba647.appspot.com",
  messagingSenderId: "683602113672"

};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;