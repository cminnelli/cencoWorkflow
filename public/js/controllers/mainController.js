
// ANGULAR APP
app = angular.module("myApp" , []);

app.controller("mainController" , function($scope , google){    

$scope.userInfo;
$scope.ordenes;
$scope.orden;


$scope.initWorkflow = function(){
      google.monitor("ordenes" , function(data){
        google.objarray(data , function(d){
          $scope.ordenes = d;
          $scope.$apply();
        })
        
      });      
}



$scope.retFecha = function(fecha){
 var nf = moment(fecha).format('DD/MM/YY');
 return nf;
}

$scope.tiempo = function(fecha){
  moment.locale('es');
  var nf = moment(fecha).fromNow();
  return nf;
}

$scope.accesos = function(tipoAcceso, depto){
  if ( tipoAcceso === "vis"){
    $(".btn-aprob").attr('disabled', true);
  }else{
    $(".btn-aprob").attr('disabled', true);
    $("." + depto).attr('disabled', false);
  
  }
}

$scope.buscarUsuario = function(clave){
  var clave = $(".userCode").val();

   var usuarioData = $scope.usuarios.find(function(item){
    return item.clave === clave
   })
    $scope.userInfo = usuarioData;
    $scope.accesos($scope.userInfo.acceso , $scope.userInfo.sector)

} 

$scope.crearOrden = function(coleccion){
  var ordenNum = $(".ordenNum").val() ;
  var espacio = $(".espacio").val() 
  var empresario = $(".empresario").val() ;
  var razon = $(".razon").val() ;
  //var comentario = $(".comentario").val() ;

  var ordenDes = {
    nro:ordenNum,
    fecha: Date.now(),
    usuario:$scope.userInfo.nombre,
    empresario:empresario,
    razon:razon,
    espacio:espacio,
    estado:"En Curso",
    comercial:{
      E:0,
      comentario:"",
      A0:{
        fecha:"",      
      },
    },

    finanzas:{
      E:0,
      comentario:"",
      A0:{
        fecha:"",      
      },
    },

    legales:{
      E:0,
      comentario:"",
      A0:{
        fecha:"",      
      },

    }


  }  

 google.agregar("ordenes",  ordenNum.toString(), ordenDes);

}


$scope.abrirComentario = function(orden){
  $scope.orden = orden;

}

$scope.dejarComentario = function(departamento , comentario){
  var orden = $scope.orden.nro;
  google.actualizar("ordenes" , orden + "/" + departamento , {comentario: comentario})
}

$scope.habilitar = function(sector, sectorUsuario){
  var sectorUsuario= $scope.userInfo.sector
  if (sector === sectorUsuario){
    return false;
  }else{
    return true;
  }
}

$scope.cambiarEstado = function(orden , departamento , estado){
google.actualizar("ordenes" , orden + "/" + departamento + "/A" + estado , {fecha: Date.now()})
google.actualizar("ordenes" , orden + "/" + departamento , {E: estado + 1})
}


// $scope.guardarOrden = function(e , orden){
//   var clases = e.target.className.split(" ");
//   var ref = orden + "/" + clases[0]  + "/" +  clases[1];
//   google.agregar("ordenes" , ref , {estado:event.target.checked , aprobacion: Date.now()})
// }



$scope.tareas = {
  comercial:[
  {ord:1 , tarea:"Firma Orden" },
  {ord:2 , tarea:"Solicitar info Cliente" },
  {ord:3 , tarea:"Enviar Documentacion" },
  {ord:4 , tarea:"Primer OK Sistema" },
  {ord:5 , tarea:"Enviar Borrador" },
  {ord:6 , tarea:"Dar OK sistema" },
   {ord:7 , tarea:"Finalizado" }
  ],
    finanzas:[
  {ord:1 , tarea:"Enviar Valores" },
  {ord:3 , tarea:"Deuda Conciliada" },
  {ord:3 , tarea:"Dar OK sistema" }


  ],
    legales:[
  {ord:1 , tarea:"Analisis Doc." },
  {ord:2 , tarea:"Dar OK sistema" },



  ]
}




$scope.usuarios = [
{nombre:"Astrid Van de Vorde" , acceso:"adm" , sector:"comercial", clave: "VAN321"},
{nombre:"Luis Cifuentes" , acceso:"adm" , sector:"legales", clave: "LEG321"},
{nombre:"Fabian Berria" , acceso:"vis" , sector:"legales", clave: "LEG321"},
{nombre:"Facundo Coxe" , acceso:"adm" , sector:"finanzas", clave: "COX321"},
{nombre:"Agustín Albesa" , acceso:"adm" , sector:"finanzas", clave: "TUC321"},
{nombre:"Nicolas Lencina" , acceso:"vis" , sector:"finanzas", clave: "LEN321"},
{nombre:"Totaro, Claudia" , acceso:"adm" , sector:"comercial", clave: "VAN321"},
{nombre:"Minnelli, Carlos" , acceso:"adm" , sector:"comercial", clave: "0963"},

]

})