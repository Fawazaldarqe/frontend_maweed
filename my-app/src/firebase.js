// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCUUcfdwWFul6_3cDoUaMve3XDxeexECe0",
  authDomain: "maweed-8cc59.firebaseapp.com",
  projectId: "maweed-8cc59",
  storageBucket: "maweed-8cc59.appspot.com",
  messagingSenderId: "1047960951741",
  appId: "1:1047960951741:web:82c876425e3732aed790d4",
  measurementId: "G-NXWHX78D8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export function signup(email,password){
 return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
 }