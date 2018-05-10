app.service("googleService" , function($http){


/*Autenticar usuarios por medio de Google Firebase*/
this.signIn = function(cb){

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    cb(user)

  }).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  });
}


this.signOut = function(){
firebase.auth().signOut().then(function() {
  console.log("SIGN OUT")
}).catch(function(error) {
  // An error happened.
});
}

this.angularhttp = function(method, urlx ,cb){
        console.log("Ejecutando Servicio Angular HTTP")
        var protocol = location.protocol;
        var host = location.host;
        var web = protocol + "//" + host+ "/"+ urlx

        $http({
          method: method,
          url: web


        }).then(function successCallback(response) {
            cb(response.data)
          }, function errorCallback(response) {

          });
    }
    
})
