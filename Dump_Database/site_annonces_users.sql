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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `role` enum('ADMIN','USER') DEFAULT 'USER',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `uc_Users_username` (`username`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'account','$2a$08$WNCW6qspngk0eQMhawBHUeZPA3rP4J20iGNS6G/0eP4iThX7byv8m','account','account','account@test.com','USER'),(6,'oberthiax','$2a$08$GNZWdcCwvS3FHAsVN/me9.sXApWfdvKO2NQ.bceqhbA2n7x5P3Q6G','BERTHIAU','Olivier','o.berthiau@gmail.com','USER'),(7,'test0','$2a$08$kF3GxSLltAwZSyn.XNsiIeV0IrXRGKTmMeNgLO1aV7M2ZuyI6FfJq','test','test','test@test.com','USER'),(13,'test','$2a$08$fyM9ofxEEMnbrucwew9dzuzC71X2diKPFFbzOIP55eWo7vXDNGCQq','test','test','test@test.fr','USER'),(16,'babou','$2a$08$suI9XdjvfRVOTsUhBZLJYO6N41mK3TX8NpPCeHw61TuWVEn3gOMz6','Lerouley','Baptiste','babou@gmail.com','USER'),(19,'spiderman','$2a$08$mm/rLwGGiCH7ytVNMKLG8uJ4FLfZd1GBn2die1wAkJonOtrBAvh2u','Spiderman','Spiderman','spiderman@gmail.com','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
