var firebase = require("firebase")

var config = {
  apiKey: "AIzaSyBVv2H5J_8UPqsR5EVxq-XLFjmYSddHW8g",
  authDomain: "miinmobiliaria-5d612.firebaseapp.com",
  databaseURL: "https://miinmobiliaria-5d612.firebaseio.com",
  projectId: "miinmobiliaria-5d612",
  storageBucket: "miinmobiliaria-5d612.appspot.com",
  messagingSenderId: "419549112646"
};

firebase.initializeApp(config);

var firebaseNuevoUsuario = function(email, password){

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
  





exports.config = config
exports.nuevoUsuario = firebaseNuevoUsuario;