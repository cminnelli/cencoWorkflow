var config = {
  apiKey: "AIzaSyDlaTC5yjLYwaAbXk9m0KFinsUkNqGSDLE",
  authDomain: "cencoworkflow.firebaseapp.com",
  databaseURL: "https://cencoworkflow.firebaseio.com",
  projectId: "cencoworkflow",
  storageBucket: "cencoworkflow.appspot.com",
  messagingSenderId: "148647249812"
};

firebase.initializeApp(config);


app.service("google" , function(){

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
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
    }
  

this.objarray = function(obj, cb){
  var arr = [];
  for (x in obj){
   arr.push(obj[x])
  }
  cb(arr);
  return arr;

}

this.agregar = function(ref , orden , ordenObj){
  var db = firebase.database().ref(ref).child(orden).set(ordenObj);

}

this.actualizar = function(ref , orden , value){
  var db = firebase.database().ref(ref).child(orden).update(value);

}

this.monitor = function(ref , cb){
  var db = firebase.database().ref(ref);
   db.on('value', function(snapshot) {
   	var data = snapshot.val()
   	cb(data)
  });
}


})

