-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-03-2021 a las 00:55:46
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `presupuestopersonal`
--
CREATE DATABASE IF NOT EXISTS `presupuestopersonal` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci;
USE `presupuestopersonal`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `idCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `Categoria` varchar(100) COLLATE utf8_general_mysql500_ci NOT NULL,
  `idTipoMovimiento` int(11) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci AUTO_INCREMENT=9 ;

--
-- Truncar tablas antes de insertar `categoria`
--

TRUNCATE TABLE `categoria`;
--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `Categoria`, `idTipoMovimiento`) VALUES
(1, 'Sueldo', 1),
(2, 'Comida', 2),
(3, 'Educacion', 2),
(4, 'Impuestos', 2),
(5, 'Ropa', 2),
(6, 'Gastos Hogar', 2),
(7, 'Gastos Auto', 2),
(8, 'Gastos Alquiler', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concepto`
--

DROP TABLE IF EXISTS `concepto`;
CREATE TABLE IF NOT EXISTS `concepto` (
  `idConcepto` int(11) NOT NULL AUTO_INCREMENT,
  `Concepto` varchar(100) COLLATE utf8_general_mysql500_ci NOT NULL,
  `idCategoria` int(11) NOT NULL,
  PRIMARY KEY (`idConcepto`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci AUTO_INCREMENT=29 ;

--
-- Truncar tablas antes de insertar `concepto`
--

TRUNCATE TABLE `concepto`;
--
-- Volcado de datos para la tabla `concepto`
--

INSERT INTO `concepto` (`idConcepto`, `Concepto`, `idCategoria`) VALUES
(1, 'Sueldo', 1),
(2, 'Tomate', 2),
(3, 'Lechuga', 2),
(4, 'carne', 2),
(5, 'manzana', 2),
(6, 'pomelo', 2),
(7, 'mochila', 3),
(8, 'notebook', 3),
(9, 'cuaderno', 3),
(10, 'lapicera', 3),
(11, 'cartuchera', 3),
(12, 'libro', 3),
(13, 'Luz', 4),
(14, 'Agua', 4),
(15, 'Gas', 4),
(16, 'TSG', 4),
(17, 'Pantalon', 5),
(18, 'Camisa', 5),
(19, 'chomba', 5),
(20, 'campera', 5),
(21, 'heladera', 6),
(22, 'televisor', 6),
(23, 'seguro', 7),
(24, 'patente', 7),
(25, 'vtv', 7),
(26, 'cambio correa', 7),
(27, 'Alquiler', 8),
(28, 'Expensas', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

DROP TABLE IF EXISTS `movimientos`;
CREATE TABLE IF NOT EXISTS `movimientos` (
  `idMovimiento` int(11) NOT NULL AUTO_INCREMENT,
  `idTipo` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `Concepto` varchar(50) COLLATE utf8_general_mysql500_ci NOT NULL,
  `Monto` decimal(7,2) NOT NULL,
  `Fecha` date NOT NULL,
  PRIMARY KEY (`idMovimiento`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci AUTO_INCREMENT=24 ;

--
-- Truncar tablas antes de insertar `movimientos`
--

TRUNCATE TABLE `movimientos`;
--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`idMovimiento`, `idTipo`, `idCategoria`, `Concepto`, `Monto`, `Fecha`) VALUES
(22, 1, 1, '1', '100.00', '2021-03-20'),
(23, 2, 4, '13', '-10.00', '2021-03-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipomovimiento`
--

DROP TABLE IF EXISTS `tipomovimiento`;
CREATE TABLE IF NOT EXISTS `tipomovimiento` (
  `idTipoMovimiento` int(11) NOT NULL AUTO_INCREMENT,
  `TipoMovimiento` varchar(50) COLLATE utf8_general_mysql500_ci NOT NULL,
  PRIMARY KEY (`idTipoMovimiento`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci AUTO_INCREMENT=3 ;

--
-- Truncar tablas antes de insertar `tipomovimiento`
--

TRUNCATE TABLE `tipomovimiento`;
--
-- Volcado de datos para la tabla `tipomovimiento`
--

INSERT INTO `tipomovimiento` (`idTipoMovimiento`, `TipoMovimiento`) VALUES
(1, 'Ingreso'),
(2, 'Egreso');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
