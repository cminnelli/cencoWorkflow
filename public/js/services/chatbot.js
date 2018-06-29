app.service("chatbot" , function(google){

  var bot ;
  var that = this;


  // this.checkReply = function(reply){
  //   var rta = false;
  //   if (reply.indexOf("@")>=0){
  //     google.nuevoDato("usuarios" , {mail: reply} , function(){
  //           console.log("enviando a google")
  //           that.agregarMsg("listo, ya estas en guggel", "broom")
  //     })
  //   }else if(reply.indexOf("hola")>=0){
  //     console.log("saludando");
  //   }
  // }

  this.init = function(){

          bot = new RiveScript({async: true});

          bot.loadFile([
            "/js/chatBot/chat.rive",
          ], loading_done, loading_error);

          function loading_done (batch_num) {
            console.log("Batch #" + batch_num + " termino de cargar");
            bot.sortReplies();
          }

          function loading_error (error) {
            console.log("Error cuando carga el archivo: " + error);
          } 
  }


this.agregarMsg = function(msg, tipo){
  var body = $("#chatBody") 
  if(tipo === "broom"){
    body.append("<p class='msg msgBroom'>"+msg+"<p/>")

  }else if (tipo ==="cliente"){
    body.append("<p class='msg msgClient'>"+msg+"<p/>")
    $("#chatInputBox").val("");
  } 
}




this.botReply = function(msg){
  var reply = bot.reply("local-user", msg)
  reply.then(function(result){
    var res = result;
    that.agregarMsg(res , "broom")
  })
}


$("#chatIcon , #close").click(function(event) {
       $("#chatBot").fadeToggle();      
});

// $( "button" ).live( "keypress", function() {
//   alert( "Goodbye!" ); 
// });

$( document ).on( "keypress", "#chatMail", function(event) {
         var e = event.which;
        var mail = $(this).val();
        if (e === 13){
        google.nuevoDato("usuarios" , {mail: mail } , function(){
              console.log("enviando a google")
              that.agregarMsg("listo, ya estas en nuestra tipo nah base de datos", "broom")
            })
      };
});



})

