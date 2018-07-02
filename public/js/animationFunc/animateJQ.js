
$(document).ready(function($) {

// SERVICIO GENERAL SLIDER

$(".servicioItem").click(function(event) {
	var el = event.target.id;
	$("." + el).css({
		left: '0',
		property2: 'value2'
	});

if (el === "desarrolloMobile"){
		$(".desarrolloWeb").css({
			left: '100%',
		});
		$(".render").css({
			left: '-100%',
			property2: 'value2'
		});

	}else if (el === "desarrolloWeb"){

		$(".desarrolloMobile").css({
			left: '-100%',
			transform: 'rotateZ(0deg)'
		});
		$(".render").css({
			left: '-100%',
			property2: 'value2'
		});

	}else if (el === "render"){

		$(".desarrolloWeb").css({
			left: '100%',
			transform: 'rotateZ(0deg)'
		});
		$(".desarrolloMobile").css({
			left: '100%',
			property2: 'value2'
		});

	}

});



// CUBO


var rot = 0;
var trans = 10;
var zeta = 0;
var movimiento = 1

setInterval(function(){
	rot += 90;
	if  (movimiento  === 1){

		$(".cuboWrapper").css({
			transform: "rotateX(" + 90 + "deg) rotateZ("+10+ "deg) rotateY("+30 + "deg)  translateZ(" + 0 + "px)",
		});	

		movimiento = 2;	
	}else if (movimiento ===2){
		$(".cuboWrapper").css({
			transform: "rotateX(" + 0 + "deg) rotateZ("+95+ "deg) rotateY("+90 + "deg)  translateZ(" + -30 + "px)",
		});

		movimiento = 3;	

	}else{

		$(".cuboWrapper").css({
			transform: "rotateX(" + -90 + "deg) rotateZ("+-45+ "deg) rotateY("+0 + "deg)  translateZ(" + 30+ "px)",
		});	

		movimiento = 1;
	}


},1000)

	
});