import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyB8c54FTvu10BxNfUPACbLxzpRmJBX452s",
	authDomain: "facebook-messenger-7fd86.firebaseapp.com",
	projectId: "facebook-messenger-7fd86",
	storageBucket: "facebook-messenger-7fd86.appspot.com",
	messagingSenderId: "933939472964",
	appId: "1:933939472964:web:53aecd1288ca9131ebea11",
	measurementId: "G-GZQT4BHSZK",
});
const db = firebaseApp.firestore();
export default db;
