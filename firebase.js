import firebase from "gatsby-plugin-firebase";
import 'firebase/firestore';

// Firebase Cloud Firestore service
const databaseService = firebase.firestore();

export default databaseService