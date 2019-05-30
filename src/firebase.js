import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE3yzi0lwjvUumxEByqVn4p9oUxaLEdP8",
  authDomain: "ideation-7769d.firebaseapp.com",
  databaseURL: "https://ideation-7769d.firebaseio.com",
  projectId: "ideation-7769d",
  storageBucket: "ideation-7769d.appspot.com",
  messagingSenderId: "967743901139",
  appId: "1:967743901139:web:f6dd859f8ac9c72e"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();