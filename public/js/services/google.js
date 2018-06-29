app.service("google" , function(){

  // USUARIO ACTUAL INFO
  this.currentUser = function(){
    var user = firebase.auth().currentUser;
    return user;
  }

  //CARGAR ARCHIVO
  this.storage = function(child, userName, file , cb){
    var storage = firebase.storage();
    var storageRef = storage.ref().child( child + "/" + userName + "/" + file.name);    
    var task = storageRef.put(file);

    task.on('state_changed', function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      var downloadURL = task.snapshot.downloadURL;
      $("#progress").css('width', progress + "%");     
      cb(downloadURL);
    })    
  }

  // NUEVO REGISTRO
  this.nuevoDato = function(path , obj, cb){
    database = firebase.database();
    firebase.database().ref(path).push(obj);
    cb();       
  }

  // ACTUALIZAR REGISTRO
  this.update = function(path , obj){
    database = firebase.database();
    firebase.database().ref(path).update(obj);            
  }

  // REMOVER REGISTRO
  this.remove = function(path , child){
    database = firebase.database();
    firebase.database().ref(path + "/" + child).remove();           
  }



  //FILTRAR 

  this.filter = function(pth , property , equalTo ,  callback) {
    var database = firebase.database().ref(pth).orderByChild(property).equalTo(equalTo);
    database.once('value', function(snapshot) {
       callback(snapshot.val())
    });
  }



  //MONITOREAR BASE DE DATOS
  this.monitor = function(pth , callback) {
    var database = firebase.database().ref(pth);
    database.on('value', function(snapshot) {
     callback(snapshot.val())
    });
    
  }

  //MONITOREAR BASE DE DATOS UNA VEZ
  this.onmonitor = function(pth , callback) {
    var database = firebase.database().ref(pth);
    database.once('value', function(snapshot) {
     callback(snapshot.val())
    });
    
  }

  //GOOGLE AUTH

  this.googleAuth = function(cb){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
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
    console.log("autorizado")


    }).catch(function(error) {
      // An error happened.
    });
  }



})

