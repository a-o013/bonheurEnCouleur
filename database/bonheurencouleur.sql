-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 28 fév. 2019 à 08:16
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bonheurencouleur`
--

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `nom_complet` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom_complet` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rue_livraison` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `postcode_livraison` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `commune_livraison` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ' ',
  `numtel` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `society` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tvasociety` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `montant_total` decimal(6,3) DEFAULT NULL,
  `commentaires` varchar(500) DEFAULT NULL,
  `nom_pdf` varchar(120) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=117 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `date`, `nom_complet`, `prenom_complet`, `rue_livraison`, `postcode_livraison`, `commune_livraison`, `email`, `numtel`, `society`, `tvasociety`, `montant_total`, `commentaires`, `nom_pdf`) VALUES
(70, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(69, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(68, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(67, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(65, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(66, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(64, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(63, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(62, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(79, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'undefined-2019-02-25.pdf'),
(80, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'Bonaert-2019-02-25.pdf'),
(81, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'Bonaert-2019-02-25.pdf'),
(82, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'Bonaert-2019-02-25.pdf'),
(83, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'C:UsersCélestine BonaertDesktoponheurEnCouleurackapibonaert-2019-02-25.pdf'),
(84, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'C:UsersCélestine BonaertDesktoponheurEnCouleurackapibonaert-2019-02-25.pdf'),
(85, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'C:UsersCélestine BonaertDesktoponheurEnCouleurackapibonaert-2019-02-25.pdfbonaert-2019-02-25.pdf'),
(86, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', 'C:UsersCélestine BonaertDesktoponheurEnCouleurackapibonaert-2019-02-25.pdfbonaert-2019-02-25.pdfbonaert-2019-02-25.pdf'),
(87, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(88, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(89, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(49, NULL, 'Masamba', 'Audrey', 'rue de la source, 8', '6720', 'Hachy', 'masambaaudrey1@gmail.com', '0496617706', 'masamba', 'BE 000000009', '50.000', 'undefined', ''),
(31, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(32, NULL, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '50.000', 'undefined', ''),
(33, NULL, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '50.000', 'undefined', ''),
(34, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(35, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaer@tmail.com', '049', 'undefined', 'undefined', '50.000', 'undefined', ''),
(36, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaer@tmail.com', '049', 'undefined', 'undefined', '50.000', 'undefined', ''),
(37, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(38, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(39, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(40, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(41, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(42, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(43, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(71, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(72, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(73, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(74, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(75, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(76, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(77, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(78, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', ''),
(90, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(91, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdf'),
(92, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdfonaert-2019-02-25.pdf'),
(93, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(94, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(95, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(96, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(97, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(98, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(99, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(100, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(101, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdf'),
(102, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(103, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdf'),
(104, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(105, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdf'),
(106, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(107, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(108, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdf'),
(109, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdf'),
(110, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-25.pdfonaert-2019-02-25.pdfonaert-2019-02-26.pdf'),
(111, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-26.pdf'),
(112, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-26.pdf'),
(113, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-26.pdfonaert-2019-02-26.pdf'),
(114, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-26.pdfonaert-2019-02-26.pdfonaert-2019-02-26.pdf'),
(115, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-26.pdf'),
(116, NULL, 'Bonaert', 'Celestine', 'Rue de la station, 19', '1325', 'Longueville', 'celestine.bonaert@hotmail.com', '0496617706', '03847735', 'undefined', '50.000', 'undefined', '..frontpublicfacturesonaert-2019-02-26.pdf');

-- --------------------------------------------------------

--
-- Structure de la table `detail`
--

DROP TABLE IF EXISTS `detail`;
CREATE TABLE IF NOT EXISTS `detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `quantité` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_produit` (`id_produit`),
  KEY `id_commande` (`id_commande`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
