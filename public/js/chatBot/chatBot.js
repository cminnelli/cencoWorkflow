
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
		var body = $("#chatBody");
		body.append("<p class='msg msgBroom'>" + result +"<p/>")
	})
}

var checkReply = function(reply , palabra){
	if (reply.indexOf(palabra)>0){
		alert("si esta la palabra")
	}
}


initchatbot();

$("#chatInputBox").keypress(function(event) {

	e = event.which;
	if (e === 13){
		var msg = $(this).val();
		var body = $("#chatBody");
		body.append("<p class='msg msgClient'>"+msg+"<p/>")
		$(this).val("") ;
		setTimeout(function(){
			botReply(msg)
		},2000)

		
	}else{

	}
});

})