
$(document).ready(function($) {
// CHATBOT
var bot ;

var initchatbot = function(){
	bot = new RiveScript({async: true});

	bot.loadFile([
		"/js/chatBot/chat.rive",
	], loading_done, loading_error);

	function loading_done (batch_num) {
		console.log("Batch #" + batch_num + " has finished loading!");
		bot.sortReplies();
	}

	function loading_error (error) {
		console.log("Error when loading files: " + error);
	}	
}

var botReply = function(msg){
	var reply = bot.reply("local-user", msg)
	reply.then(function(result){
		var res = result;
		checkReply(res , "@");
		agregarMsg(res , "broom")
	})
}

var checkReply = function(reply , palabra){
	if (reply.indexOf(palabra)>0){
		console.log("si esta la palabra")
		console.log(reply)
	}
}

var agregarMsg = function(msg, tipo){
	var body = $("#chatBody")	
	if(tipo === "broom"){
		body.append("<p class='msg msgBroom'>"+msg+"<p/>")

	}else if (tipo ==="cliente"){
		body.append("<p class='msg msgClient'>"+msg+"<p/>")
		$("#chatInputBox").val("");
	}	
}


initchatbot();

$("#chatInputBox").keypress(function(event) {

	e = event.which;
	if (e === 13){
		// consulta cliente
		var msg = $(this).val();
		agregarMsg(msg , "cliente")	

		//respuesta broom
		setTimeout(function(){			
			botReply(msg)
		},2000)

		
	}else{

	}
});

})