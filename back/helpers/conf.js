const mysql = require('mysql');
const connexion = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '',
    database : 'bonheurencouleur',
})

module.exports = connexion;