var express = require("express");
var firebase = require("firebase")
var fireAux = require("./auxiliares/fireFunc.js")
var fireConfig = fireAux.config
var nodemon = require("nodemon")

var app = express();
const port = process.env.PORT || 3000;
var path = require("path");

/*BODY PARSER MIDDLEWARE*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*SERVE STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));

/*LISTENING PORT*/
app.listen(port, function(req , res){
	console.log("Listening Broom Web: " + port);
})

/*INDEX ROUTES*/
app.get("/" , function(req,res){
	res.sendFile(path.join(__dirname , "index.html"))
})


app.post("/auth" , function(req,res){
	var us = req.body.us
	var ps = req.body.ps
	fireAux.nuevoUsuario(us, ps);

})


/*CREA NUEVO GRUPO pasarle parametros*/
app.post("/nuevoGrupo/:grupo&:userId&:descripcion" , function(req,res){
	var photo = "/imagenes/web/grupo.png";
	var grupo = req.params.grupo;
	var userId = req.params.userId;
	var descripcion = req.params.descripcion;


	grupos.agregarGrupo(userId, grupo , descripcion, photo, function(data){
		res.send(data);
	})
	
})



/*MIS GRUPOS*/
app.get("/misGrupos/:userId" , function(req,res){
	var user =  req.params.userId;
	usuarios.populateUser(user , function(data){	
	res.send(data);
	})
	
})

/*SUMARSE A  GRUPO*/
app.post("/sumarseGrupo/:userId&:grupoId" , function(req,res){
	var userId =  req.params.userId;
	var grupoId =  req.params.grupoId;

	usuarios.sumarseGrupo(userId,grupoId, function(data){
		res.send(data)
	});
});
