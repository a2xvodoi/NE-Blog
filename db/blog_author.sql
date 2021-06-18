-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `idAuthor` int NOT NULL AUTO_INCREMENT,
  `accountName` char(15) NOT NULL,
  `pass` char(15) NOT NULL,
  `authorName` varchar(45) NOT NULL,
  `job` varchar(45) DEFAULT NULL,
  `intro` varchar(1000) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAuthor`),
  UNIQUE KEY `idauthor_UNIQUE` (`idAuthor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'tuonguyen','123456','Tường Uyên','IT','IT SE  ','blog-avatar.jpg'),(2,'tinhto','123456','Tinh To','Social Content Lead','I am a story addict, both reading and writing. Playing with words to create the emotional journey for those who called my soul-mate is my favourite \"game\". I love travelling too. Step out my small corner to see how the world moves and prove myself how far I can go. It\'s really ridiculous! Working for ITviec is over my expectation so that you cannot to find any point to blame. Only kind people, be happy not war and the most important: working is enjoying actually. My favorite quotes is \"Life is a race, if you don\'t run fast you\'ll get trampled.\"','39df92b6048544e5b0b43bc61d8bd886.png'),(3,'a2xvodoi','123456','Việt Nguyễn','IT','IT','OIP (1).jpg');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-18  8:12:20
