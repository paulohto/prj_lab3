//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
 
 var firebaseConfig = {
     apiKey: "AIzaSyCqCLMHvRzSVZbaJV-Ob8Umu1--W0C3Yjs",
     authDomain: "temp211-97241.firebaseapp.com",
     databaseURL: "https://temp211-97241-default-rtdb.firebaseio.com",
     projectId: "temp211-97241",
     storageBucket: "temp211-97241.appspot.com",
     messagingSenderId: "252474961720",
     appId: "1:252474961720:web:8765d86182ef481c6fdbcd"
   };
   
   const { response } = require("express");

   // Initialize Firebase
   var firebase = require("firebase");
   firebase.initializeApp(firebaseConfig);
   
  let express = require('express');
  const { json } = require("express");
  let app = express(); // cria servidor

  app.use(express.static('front'));
 
  app.get('/', (req, res) => {
    res.sendFile(__dirname + "/front/log.html");
    console.log(__dirname);
  });
   
 /* Ouvindo porta */
   app.listen(8001, () => {
        console.log("Ouvindo a porta 8001");
   });

   /*var ref = firebase.database().ref();
   var dbRef = ref.child("produto").child("categoria").child("bebida");
   dbRef.on("value", snap => console.log(snap.val()));*/
 