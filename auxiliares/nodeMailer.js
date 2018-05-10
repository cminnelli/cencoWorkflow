var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'charileminn88@gmail.com ',
    pass: 'alaska77'
  },
  tls: {
    rejectUnauthorized: false
}
});



var enviarMail = function (mailoptionsObj){
transporter.sendMail(mailoptionsObj, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


exports.enviar = enviarMail;