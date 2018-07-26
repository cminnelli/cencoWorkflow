
// ANGULAR APP
app = angular.module("myApp" , []);

app.controller("mainController" , function($scope , google){    

$scope.userInfo;     

$scope.buscarUsuario = function(clave){
  var clave = $(".userCode").val();
   var usuarioData = $scope.usuarios.find(function(item){
    return item.clave === clave
   })

 $scope.userInfo = usuarioData;
} 

google.monitor("ordenes");

$scope.crearOrden = function(coleccion){
  var ordenNum = $(".ordenNum").val() ;
  var empresario = $(".empresario").val() ;
  var razon = $(".razon").val() ;
  var comentario = $(".comentario").val() ;

  var ordenDes = {
    fecha: Date(),
    usuario:$scope.userInfo.nombre,
    empresario:empresario,
    razon:razon,
    comentario:comentario,
    faseUno:{
      finanzas:false,
      cobranzas:false,
      comercial:false,
    },
    faseDos:{
      finanzas:false,
      cobranzas:false,
      comercial:false,
    }
  }

 google.agregar("ordenes",  ordenNum.toString(), ordenDes);
}


$scope.leerOrdenes = function(){
 google.verOrdenes();
}

$scope.usuarios = [
{nombre:"Astrid Van de Vorde" , acceso:"adm" , sector:"comercial", clave: "VAN321"},
{nombre:"Luis Cifuentes" , acceso:"adm" , sector:"legales", clave: "LEG321"},
{nombre:"Fabian Berria" , acceso:"vis" , sector:"legales", clave: "LEG321"},
{nombre:"Facundo Coxe" , acceso:"adm" , sector:"cobranzas", clave: "VAN321"},
{nombre:"Agustín Albesa" , acceso:"adm" , sector:"cobranzas", clave: "VAN321"},
{nombre:"Nicolas Lencina" , acceso:"vis" , sector:"cobranzas", clave: "VAN321"},
{nombre:"Totaro, Claudia" , acceso:"adm" , sector:"comercial", clave: "VAN321"},
{nombre:"Minnelli, Carlos" , acceso:"adm" , sector:"comercial", clave: "0963"},

]

})