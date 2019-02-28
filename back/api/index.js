
const connexion = require('../helpers/conf.js');
const express = require('express');
const routes = express.Router();
const puppeteer = require('puppeteer');
require('dotenv').config()


const api_key = process.env.REACT_MAILGUN_KEY;
const domain = process.env.REACT_MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

let mailTo = 'bonheurwcs@gmail.com, ';
let mailAttachment = '../front/public/factures/';
const path = require('path');

let invoiceData = {};

routes.post('/envoiformulaire', function (req, res, next) {
    const formData = req.body.userData;
    mailTo += formData.email;
    mailAttachment = path.join(mailAttachment, `${formData.nom_complet.toLowerCase()}-${new Date().toISOString().slice(0, 10)}.pdf`);
    console.log(req.body)
    connexion.query(`INSERT INTO commande (nom_complet, prenom_complet, rue_livraison, postcode_livraison, commune_livraison, email, numtel, society, tvasociety, montant_total, commentaires, nom_pdf) VALUES ('${formData.nom_complet}', '${formData.prenom_complet}', '${formData.rue_livraison}', '${formData.postcode_livraison}', '${formData.commune_livraison}', '${formData.email}', '${formData.numtel}', '${formData.society}', '${formData.tvasociety}', '50' , '${formData.commentaires}', '${mailAttachment}') `, function (err, results, fields) {
        if (err) {
            console.log(err)
            return res.status(500).send("Erreur lors de l'envoi de la commande");
        } else {
            invoiceData = {
                flowers : req.body.flowers,
                plank: req.body.plank,
                userData: req.body.userData,
            }
            generatePdf()
            res.sendStatus(200);
        };
    });
});

routes.get('/create-invoice', function (req, res, next) {
    if(invoiceData !== null){
       return res.json(invoiceData);
    }
    return res.status(500).send("Erreur lors de l'envoi de la commande");
})

const generatePdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/facture', { waitUntil: 'networkidle2' });
    await page.pdf({ path: mailAttachment, format: 'A4' });
    await browser.close();
    sendConfirmationMail();
};


const sendConfirmationMail = () => mailgun.messages().send(
    {
        from: 'Bonheur en Couleurs  <postmaster@sandboxccaa58477b1a4caca1457b29c3113d24.mailgun.org/>',
        to: mailTo,
        subject: 'Récapitulatif de votre commande Bonheur en couleurs !',
        text: ' Merci de nous avoir fait confiance ! Vous recevrez votre commande, dès reception de votre virement. Pour plus d`informations',
        attachment: mailAttachment
    }
    , function (error, body) {
        mailTo = 'bonheurwcs@gmail.com, ';
        mailAttachment = '../front/public/factures/';
        if (error) {
            console.log(error)
        } else {
            console.log(body)
        }
    }
)

module.exports = routes;