
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
	
});