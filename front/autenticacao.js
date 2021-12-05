//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// Initialize Firebase
/*var firebase = require("firebase");
firebase.initializeApp();

var defaultAuth = firebase.auth();*/

import firebase from 'firebase'
require('firebase/auth')

// button
var btnAcessar = document.getElementById('btnAcessar');
//var btnSair = document.getElementById('btnSair');

//inputs
var user_name = document.getElementById('user-name');
var password = document.getElementById('password');

//mensagem display

btnAcessar.addEventListener('click', function() {
    firebase.auth().signInWithEmailAndPassword(user_name.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('OK')
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('NOT OK')
      });
    });


/*const auth = getAuth();
signInWithEmailAndPassword(auth, user_name.value, password.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('OK')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('NOTE OK')
  })*/

// logar
/*btnAcessar.addEventListener('click', function() {
    firebase.auth()
        .signInWithEmailAndPassword(user_name.value, password.value)
        .then(function(result){
            console.log(result);
            //displayName.innerText = 'Bem vindo, ' + user_name.value;
            alert('AUTENTICADO')
            window.location.replace("interno.html");
        })
        .catch(function(error){
            console.error(error.code);
            console.error(error.message);
            //displayName.innerText = 'Falha de autenticação.';
            alert('FALHA')
        });
});*/

// sair
/*btnSair.addEventListener('click', function() {
    firebase
        .auth()
        .signOut()
        .then(function(){
            console.log(result);
            alert('Você está deslogado do sistema.')
        }, function(error) {
            console.error(error);
        });
    });*/