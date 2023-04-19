-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: api
-- ------------------------------------------------------
-- Server version	8.0.32

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
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(63) NOT NULL,
  `email` varchar(127) NOT NULL,
  `password` varchar(127) NOT NULL,
  `role` int NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'João J. Morães','joao_jose@gmail.com','$2b$10$Od.vXiOoyMeSI7c2WP2kh.R7Cf.Zn8.YbDp46c.zddXGGrqldf27S',1,'2023-04-06 00:29:28','2023-04-06 00:29:28'),(6,'Mariana Morães','mariana@gmail.com','$2b$10$oNszS5ZklkLCmbVq/sG8m.TPfS9xANIfyOwbidBUIl/iqBfExZA2O',1,'2023-04-06 00:29:57','2023-04-06 00:29:57'),(13,'Juliana Morães','juliana@gmail.com','$2b$10$e4dxKhfhRUSlj7lvYxd9Q.jLm4wltmofekNovYbPFwg9.X.m5vubC',1,'2023-04-08 22:34:52','2023-04-08 22:34:52'),(14,'Paulo Morães','paulo@gmail.com','$2b$10$oGlDTcsQcPCTw.lWmD.k/OjGbGNsabcKWLR8BJ.2Jq9Ub9g8RCqdu',1,'2023-04-09 15:09:41','2023-04-09 15:09:41'),(15,'João Morães','joão@gmail.com','$2b$10$3AbKPZhLVS1ZXDW.fymVh.2LYCmShDqc0SrYSXRXJaQoaqZ7CYnRi',1,'2023-04-11 01:06:45','2023-04-11 01:06:45'),(20,'Claudio Morães','claudio@gmail.com','$2b$10$iHGgksaSMHgga9D/dFRGC.weUNebi0dihsO6a0NotBfmpZoT7/4ne',1,'2023-04-13 22:07:43','2023-04-13 22:07:43'),(21,'Martin Morães','martin@gmail.com','$2b$10$BLNXfbWYo2CkOPhFO0XQEu4BiLMINZVI2IX.WCpDoE.wyR945pW8u',2,'2023-04-13 22:29:02','2023-04-13 22:29:02'),(24,'Carlos Morães','carlos@gmail.com','$2b$10$NKwq95Kc4fr/PeiiidYHeO1Qsq2vxqbaJ/ClkTA0wijNFvD7oS2Qq',1,'2023-04-17 14:58:50','2023-04-17 14:58:50'),(25,'Marcos Morães','marcos@gmail.com','$2b$10$h2s1jP/mNNB6UX5oZYanyed.5QuGOf.tJGLFy/uqtF6z4W2mUAKUC',1,'2023-04-17 15:08:58','2023-04-17 15:08:58'),(26,'Izabel Morães','izabel@gmail.com','$2b$10$LQ5L2L5zmNlOm1gGhM4fPOT8VN1x5LLxBztBvAp9SqcOexZZnDR/i',1,'2023-04-17 20:32:53','2023-04-17 20:32:53'),(27,'Carolina Morães','carol@gmail.com','$2b$10$MGtKSq6su/nrWORsMc5ZweniQKeXGGEUeqzwiwSqcTviRGFi4oQ..',1,'2023-04-17 21:32:51','2023-04-17 21:32:51'),(28,'Mandirituba Morães','mandi@gmail.com','$2b$10$bdYthQi7m9/XKuBwrf2xMuV8sqEPXHKsmqS8TTArFXkHbVvdwVhle',1,'2023-04-17 21:37:32','2023-04-17 21:37:32');
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

-- Dump completed on 2023-04-19  8:12:14
