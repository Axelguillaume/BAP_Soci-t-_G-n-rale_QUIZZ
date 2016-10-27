-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 27 Octobre 2016 à 15:50
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `quizz`
--

-- --------------------------------------------------------

--
-- Structure de la table `test_question`
--

CREATE TABLE IF NOT EXISTS `test_question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `option1` text NOT NULL,
  `option2` text NOT NULL,
  `option3` text NOT NULL,
  `option4` text NOT NULL,
  `answer` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Contenu de la table `test_question`
--

INSERT INTO `test_question` (`id`, `test_id`, `question`, `option1`, `option2`, `option3`, `option4`, `answer`) VALUES
(1, 1, 'What does PHP stand for?', 'Hypertext Preprocessor', 'pretext Hypertext Processor', 'Preprocessor Home Page', 'Preprocessor', '1'),
(2, 1, 'PHP files have a default file extension of..', '.html', '.xml', '.php', '.ph', '3'),
(3, 1, 'A PHP script should start with ___ and end with ___:', '< php >', '< ? php ?>', '<?>', '<?php ?>', '4'),
(4, 1, 'Which of the below statements is equivalent to $add += $add ?', '$add = $add', '$add = $add +$add', '$add = $add + 1', '$add = $add + $add + 1', '2'),
(5, 2, 'Which version of PHP introduced the advanced concepts of OOP?', 'PHP 4', 'PHP 5', 'PHP 5.3', 'PHP 6', '2'),
(6, 2, 'Which one of the following is the right way to clone an object?', '_clone(targetObject);', 'destinationObject = clone targetObject;', 'destinationObject = _clone(targetObject);', 'destinationObject = clone(targetObject);', '2'),
(7, 2, 'If one intends to create a model that will be assumed by a number of closely related objects, which class must be used?', 'Normal class', 'Static class', 'Abstract class', 'Interface', '3'),
(8, 2, 'If your object must inherit behavior from a number of sources you must use a/an', 'Interface', 'Object', 'abstract class', 'static class', '1'),
(9, 2, 'Which feature allows us to call more than one method or function of the class in single instruction?', 'Typecasting', 'Method Including', 'Method adding', 'Method chaining', '4'),
(10, 2, 'Which magic method is used to implement overloading in PHP?', '__call', '__invoke', '__wakeup', '__unset', '1'),
(11, 3, 'A webpage displays a picture. What tag was used to display that picture?', 'picture', 'image', 'img', 'src', '3'),
(12, 3, ' <b> tag makes the enclosed text bold. What is other tag to make text bold?', '<strong>', '<dar>', '<black>', '<emp>', '1'),
(13, 3, 'Tags and test that are not directly displayed on the page are written in _____ section.', '<html>', '<head>', '<title>', '<body>', '2'),
(14, 3, 'Which tag inserts a line horizontally on your web page?', '<hr>', '<line>', '<line direction=”horizontal”>', '<tr>', '1'),
(15, 3, 'What should be the first tag in any HTML document?', '<head>', '<title>', '<html>', '<document>', '3'),
(16, 3, 'Which tag allows you to add a row in a table?', '<td> and </td>', '<cr> and </cr>', '<th> and </th>', '<tr> and </tr>', '4'),
(17, 3, 'How can you make a bulleted list?', '<list>', '<nl>', '<ul>', '<ol>', '3'),
(18, 4, 'What is data hiding ?', 'It is related with hiding internal object details', 'It is related with showing internal object details', 'It is related with datatypes', 'None of above', '1'),
(19, 4, 'What is class in c++ ?', 'When you define a class, you define a blueprint for a data type.', 'When you define a class, you make get more funtionality.', 'When you define a class, you define the logic.', 'When you define a class, you make debugging.', '1'),
(20, 4, 'What is object in C++ ?', 'Object is part of syntax of a class.', 'Object is datatype of a class.', 'Object is an instance of a class.', 'Object is function of a class.', '3'),
(21, 4, 'What is purpose of abstract class ?', 'to provide help with database connectivity.', 'to provide data input to other classes.', 'to provide security to other classes.', 'to provide an appropriate base class from which other classes can inherit.', '4'),
(22, 4, 'What is default visibility mode for members of classes in C++ ?', 'Private', 'Public', 'Protected', 'Depends', '1'),
(23, 5, 'Once installed on a device, each Android application lives in_______?', 'device memory', 'external memory', 'security sandbox', 'None of the above', '3'),
(24, 5, 'Parent class of Activity?', 'Object', 'Context', 'ActivityGroup', 'ContextThemeWrapper', '4'),
(25, 5, 'What are the indirect Direct subclasses of Activity?', 'LauncherActivity', 'PreferenceActivity', 'TabActivity', 'All the above', '4'),
(26, 5, 'Parent class of Service?', 'Object', 'Context', 'ContextWrapper', 'ContextThemeWrapper', '3'),
(27, 5, 'What are the indirect Direct subclasses of Services?', 'RecognitionService', 'RemoteViewsService ', 'SpellCheckerService', 'InputMethodService', '4');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
