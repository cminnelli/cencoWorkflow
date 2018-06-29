
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

app.controller("mainController" , function($scope , google , chatbot){         

  $scope.servicios = {
    charlie:[
    {nombre:"Responsive Design" , 
    descripcion: "Diseño que se adapta a cualquier dispositivo: notebooks, pc, tablets y moviles!",
    image:"022-management.png",
    prueba:true
  },
      {nombre:"UX Design" , 
    descripcion: "Buscamos apasionadamente que la experiencia de usuario sea lo mejor",
    image:"052-user-1.png",
    prueba:false
  },
      {nombre:"Socios Digitales" , 
    descripcion: "Nos interesa convertirnos en sus socios digitales, entendiendo sus necesidades y blabla",
    image:"003-deal.png",
    prueba:false
  },
      {nombre:"Chatbots" , 
    descripcion: "Los chatbots son herramientas de gran utilidad ya que muchas veces suplen a la persona blabla",
    image:"048-forum.png",
    prueba:true
  },
      {nombre:"Base de datos tiempo real" , 
    descripcion: "Usamos firebase! una herramienta de google para almacenar e interactuar con datos en tiempo real",
    image:"016-computing-cloud.png",
    prueba:true
  },
      {nombre:"Contenido Autoadministrable (CMS)" , 
    descripcion: "Maneja tus productos a tu forma, edita y elimina!",
    image:"033-faq.png",
    prueba:true
  }


    ],
    tomy:[]
  }

  $scope.skills = {

    charlie:[
    {nombre:"Javascript" , 
    descripcion: "Diseño que se adapta a cualquier dispositivo: notebooks, pc, tablets y moviles!",
    image:"022-management.png",
  },
      {nombre:"Jquery" , 
    descripcion: "Buscamos apasionadamente que la experiencia de usuario sea lo mejor",
    image:"052-user-1.png",
  },
      {nombre:"Bootrstrap" , 
    descripcion: "Nos interesa convertirnos en sus socios digitales, entendiendo sus necesidades y blabla",
    image:"003-deal.png",
  },
      {nombre:"NodeJs" , 
    descripcion: "Los chatbots son herramientas de gran utilidad ya que muchas veces suplen a la persona blabla",
    image:"048-forum.png",
  },
      {nombre:"AngularJs" , 
    descripcion: "Usamos firebase! una herramienta de google para almacenar e interactuar con datos en tiempo real",
    image:"016-computing-cloud.png",
  },
      {nombre:"MongoDb" , 
    descripcion: "Maneja tus productos a tu forma, edita y elimina!",
    image:"033-faq.png",
  },
     {nombre:"Firebase" , 
    descripcion: "Maneja tus productos a tu forma, edita y elimina!",
    image:"033-faq.png",
  }


    ],
    tomy:[]
  }


    $scope.initApp = function(){
      chatbot.init();
    }
  
    $scope.conversacion = function(e){
        e = event.which;
        if (e === 13){
          // CONSULTA CLIENTE
          var msg = $("#chatInputBox").val();
          //agrega mensaje al chat
          chatbot.agregarMsg(msg , "cliente") 

          //RESPUESTA BROOM
            chatbot.botReply(msg)


      }
    }





})