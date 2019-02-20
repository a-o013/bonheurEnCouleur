var  api_key  = '84466675d47196da0b451bf7fde6fd0b-9ce9335e-d94adc12' ; 
var  domain  = 'sandboxccaa58477b1a4caca1457b29c3113d24.mailgun.org' ; 
var  mailgun  = require ( ' mailgun-js ' ) ( { apiKey :  api_key ,  domain :  domain } ) ; 

var  data  = { 
    from : ' Utilisateur excité <me@samples.mailgun.org> ' , 
    à : ' serobnic@mail.ru ' , 
    sujet : ' Bonjour ' , 
    texte : ' Tester quelques génies Mailgun! ' 
  } ;