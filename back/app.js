const express = require('express')
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
let routes = require('./api/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/api', routes);

let server = app.listen( process.env.PORT || port, function(){
    console.log('Listening on port ' + server.address().port);
    });