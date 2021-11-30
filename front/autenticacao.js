// Initialize Firebase
var firebase = require("firebase");
firebase.initializeApp();

var defaultAuth = firebase.auth();

// button
var btnAcessar = document.getElementById('btnAcessar');
//var btnSair = document.getElementById('btnSair');

//inputs
var user_name = document.getElementById('user-name');
var password = document.getElementById('password');

//mensagem display

// logar
btnAcessar.addEventListener('click', function() {
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
});

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