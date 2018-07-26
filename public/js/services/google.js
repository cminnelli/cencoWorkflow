app.service("google" , function(){



this.agregar = function(ref , orden , ordenObj){
  var db = firebase.database().ref(ref).child(orden).set(ordenObj);

}

this.monitor = function(ref){
  var db = firebase.database().ref(ref);
   db.on('value', function(snapshot) {
    console.log(snapshot.val());
  });
}


})

