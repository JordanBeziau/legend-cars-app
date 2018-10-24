# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 127.0.0.1 (MySQL 5.7.23)
# Base de données: legend_cars
# Temps de génération: 2018-10-24 15:12:03 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table cars
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cars`;

CREATE TABLE `cars` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` tinytext,
  `description` text,
  `model` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;

INSERT INTO `cars` (`id`, `brand`, `color`, `price`, `description`, `model`)
VALUES
	(2,'Ford','Black','45,000','The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car.','Mustang'),
	(23,'Ferrari','Yellow','130,000','The Ferrari F355 (Type F129) is a sports car manufactured by Italian car manufacturer Ferrari as an evolution of the Ferrari 348 from May 1994 to 1999.','F355'),
	(24,'Chevrolet','Lunar gray','66,445','The Chevrolet Corvette, known colloquially as a Vette or Chevy Corvette, is a sports car manufactured by Chevrolet. The car has been produced through seven generations.','Corvette'),
	(25,'Aston Martin','Gray','149,995','The Aston Martin Vantage is a two-seater sports car manufactured by British automotive manufacturer Aston Martin as a successor to the previous outgoing model which had been in production for 12 years.','Vantage'),
	(26,'Dodge','Red','121,395','The Dodge Viper is a sports car manufactured by Dodge (SRT for 2013 and 2014), a division of American car manufacturer FCA US LLC from 1991 through 2017, having taken a brief hiatus from 2010–2013.','Viper');

/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
