
// ANGULAR APP
app = angular.module("myApp" , []);

app.controller("mainController" , function($scope , google){    

$scope.userInfo;
$scope.ordenes;


$scope.initWorkflow = function(){
      google.monitor("ordenes" , function(data){
        $scope.ordenes = data;
      });
   
}

$scope.retFecha = function(fecha){
 var nf = moment(fecha).format('DD-MM-YYYY');
 return nf;
}

$scope.tiempo = function(fecha){
  moment.locale('es');
  var nf = moment(fecha).fromNow();
  return nf;
}

$scope.accesos = function(tipoAcceso){

  if ( tipoAcceso === "vis"){
    $("input:checkbox").attr('disabled', true);
  }else{
    $("input:checkbox").attr('disabled', false);
  
  }
}

$scope.buscarUsuario = function(clave){
  var clave = $(".userCode").val();

   var usuarioData = $scope.usuarios.find(function(item){
    return item.clave === clave
   })
    $scope.userInfo = usuarioData;
    $scope.accesos($scope.userInfo.acceso)

} 

$scope.crearOrden = function(coleccion){
  var ordenNum = $(".ordenNum").val() ;
  var espacio = $(".espacio").val() 
  var empresario = $(".empresario").val() ;
  var razon = $(".razon").val() ;
  var comentario = $(".comentario").val() ;

  var ordenDes = {
    nro:ordenNum,
    fecha: Date.now(),
    usuario:$scope.userInfo.nombre,
    empresario:empresario,
    razon:razon,
    espacio:espacio,
    comentario:comentario,
    faseUno:{
      comercial:{
        estado: false,
        aprobacion:"",
        comentario:"",
      },
      finanzas:{
        estado: false,
        aprobacion:"",
        comentario:""
      },
      legales:{
        estado: false,
        aprobacion:"",
        comentario:""
      }

    },
    faseDos:{
      facturacion:{
        estado: false,
        aprobacion:"",
        comentario:""
      },

      legales:{
        estado: false,
        aprobacion:"",
        comentario:""
      }

    },  }

 google.agregar("ordenes",  ordenNum.toString(), ordenDes);
}


$scope.habilitar = function(sector, sectorUsuario){
  var sectorUsuario= $scope.userInfo.sector
  if (sector === sectorUsuario){
    return false;
  }else{
    return true;
  }
}


$scope.guardarOrden = function(e , orden){
  var clases = e.target.className.split(" ");
  var ref = orden + "/" + clases[0]  + "/" +  clases[1];
  google.agregar("ordenes" , ref , {estado:event.target.checked , aprobacion: Date.now()})

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