-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: site_annonces
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `annonces`
--

DROP TABLE IF EXISTS `annonces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annonces` (
  `id_ann` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `date_pub` date NOT NULL,
  `titre` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `photo` varchar(500) DEFAULT 'assets/images/default_image_annonce.png',
  `state` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_ann`),
  KEY `fk_Annonces_id_user` (`id_user`),
  CONSTRAINT `fk_Annonces_id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonces`
--

LOCK TABLES `annonces` WRITE;
/*!40000 ALTER TABLE `annonces` DISABLE KEYS */;
INSERT INTO `annonces` VALUES (3,5,'2021-11-13','PS5','Tres bon etat',950.50,'assets/images/default_image_annonce.png',1),(4,6,'2021-11-13','RTX 3080','Rog Strix RTX 3080 Non LHR',1250.00,'assets/images/default_image_annonce.png',0),(5,6,'2021-11-13','RTX 3090','Rog Strix RTX 3090 Non LHR',2100.00,'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-300-t.png',1),(6,6,'2021-11-13','Nintendo Switch','Ecran fissuré',50.00,'https://m.media-amazon.com/images/I/71r5EDssKdL._AC_SL1500_.jpg',1),(14,6,'2022-01-06','iPhone 13','Parfait état',1300.34,'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',1),(15,6,'2022-01-06','Mario Kart 8 Deluxe','Encore en bon état mais pas pour longtemps',1.00,'https://m.media-amazon.com/images/I/81fQ6F89g4L._AC_SX466_.jpg',1);
/*!40000 ALTER TABLE `annonces` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-24 22:02:42
