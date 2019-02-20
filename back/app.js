const express = require('express')
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
let routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var  api_key  = '84466675d47196da0b451bf7fde6fd0b-9ce9335e-d94adc12'; 
var  domain  = 'sandboxccaa58477b1a4caca1457b29c3113d24.mailgun.org' ; 
var  mailgun  = require ( 'mailgun-js' ) ( { apiKey :  api_key ,  domain :  domain } ) ; 

app.use('/api', routes);

app.post('/mailconfirm', function (req, res, next){
    const mail = req.body.email ;
    console.log(mail)
    mailgun.messages().send(
        { 
            from : ' Bonheur en Couleurs  <postmaster@sandboxccaa58477b1a4caca1457b29c3113d24.mailgun.org/>' , 
            to : 'Bonheur en couleur <bonheurwcs@gmail.com>,' + mail, 
            subject : 'Récapitulatif de votre commande Bonheur en couleurs !' , 
            text : ' Merci de nous avoir fait confiance ! Vous recevrez votre commande, dès reception de votre virement. Pour plus d`informations' 
        }, function (error, body) {
              if (error){
                  console.log(error)
                  res.status(500).send(error);
              } else {
                console.log(body)
                res.status(200).send(body)
              }
            
           }
    )
})

let server = app.listen( process.env.PORT || 4000, function(){
    console.log('Listening on port ' + server.address().port);
    });