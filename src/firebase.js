import firebase from 'firebase/app'
import 'firebase/storage'
// import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDt3B9io65vJP5xQDYokevR06K8d5ftl84",
    authDomain: "rentme-35bee.firebaseapp.com",
    projectId: "rentme-35bee",
    storageBucket: "rentme-35bee.appspot.com",
    messagingSenderId: "709064003120",
    appId: "1:709064003120:web:6201d0879a36f43d5c27f5"
})

export const auth = app.auth()
export default app