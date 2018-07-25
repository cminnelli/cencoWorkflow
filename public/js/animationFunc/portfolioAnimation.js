jQuery(document).ready(function($) {

var items = {
	portfolio: $(".image"),

}


var functions = {
	showImages:function(n){
		var n =  items.portfolio.length;
		var cont= 1;
		var slide = 150 
		var w = $(".imageWrapper").width() / n;
		setInterval(function(){
			if (cont === n){
				cont = 1;	
				slide= 150;	
				items.portfolio	
				.css({
					transform: 'translateX(0px)',
					opacity:"0.1"
			});
			}else{
				items.portfolio
					.css({
						transform: 'translateX(-'+ slide +'px)',
						opacity:"0.1",
						});

				items.portfolio.eq(cont)
					.css({
						opacity: '1',
					});


				items.portfolio.eq(cont -1)
					.css({
						opacity: '0.05',

					});

				items.portfolio.eq(cont +1)
					.css({
						opacity: '0.1',
					});
			}

		cont +=1	
		slide+=500

		},3000)

	}
}

functions.showImages(33)



});