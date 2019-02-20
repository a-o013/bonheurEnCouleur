var express = require('express');
var router = express.Router();
var connection = require('../conf');

/* GET home page. */
router.post('/', function(req, res, next) {
  const formData = req.body;
  connection.query('INSERT INTO commande (region) VALUES ?', formData, (err, results) => {
    if (err) {
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
  });
});

module.exports = router;
