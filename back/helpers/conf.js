const mysql = require('mysql');
const connexion = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : '',
    database : 'bonheurencouleur',
})

module.exports = connexion;