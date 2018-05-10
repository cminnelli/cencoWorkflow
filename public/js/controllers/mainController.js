
// CONFIGURACION FIREBASE
  var config = {
    apiKey: "AIzaSyB_pK2rypETX2rroDgmdVZ2G6S8cocRGF0",
    authDomain: "broomdevelop.firebaseapp.com",
    databaseURL: "https://broomdevelop.firebaseio.com",
    projectId: "broomdevelop",
    storageBucket: "broomdevelop.appspot.com",
    messagingSenderId: "478555603925"
  };

// INICIA FIREBASE
firebase.initializeApp(config);

// ANGULAR APP
app = angular.module("myApp" , []);



app.controller("mainController" , function($scope , $http, googleService){         
	
	$scope.avatar = "/imagenes/web/avatar2.jpg"

})