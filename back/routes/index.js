const connexion = require('../helpers/conf');
const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');

routes.post('/envoiformulaire', function(req, res, next){
    const formData = req.body;
    connexion.query(`INSERT INTO commande (nom_complet, prenom_complet, rue_livraison, postcode_livraison, commune_livraison, email, numtel, society, tvasociety, montant_total, commentaires) VALUES ('${formData. nom_complet}', '${formData.prenom_complet}', '${formData.rue_livraison}', '${formData.postcode_livraison}', '${formData.commune_livraison}', '${formData.email}', '${formData.numtel}', '${formData.society}', '${formData.tvasociety}', '50' , '${formData.commentaires}') `, function (err, results, fields){
        if (err){
            console.log(err)
            return res.status(500).send("Erreur lors de l'envoi de la commande");           
         }else{
             return res.send('Commande validée!');
         };
    });
});

module.exports = routes;