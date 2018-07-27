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
    console.log(data);
  });
}


})

