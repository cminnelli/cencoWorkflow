var bcrypt = require("bcrypt");
/*GENERAR EL HASH*/
function generarHash (plainPassword){
	var has = "dasdsa"; 	
	var saltRounds = 10;
	bcrypt.genSalt(saltRounds, function(err, salt) {
	    bcrypt.hash(plainPassword, salt, function(err, hash) {
	        console.log(hash)
	    });
	});

	
}
/*COMPARAR EL HASH*/
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // res == false
});


exports.generarHash = generarHash;
