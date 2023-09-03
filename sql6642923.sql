-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql6.freesqldatabase.com
-- Generation Time: Sep 03, 2023 at 12:57 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6642923`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `product_title` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `image`) VALUES
(1, 'Product 1', 'lorem ipsum dolor emt dxif folor mojor fixlo', 100, 'https://asestechbd.com/wp-content/uploads/2022/12/15-DW3024NIA-3.png'),
(2, 'Product 2', 'lorem ipsum dolor emt dxif folor mojor fixlo', 120, 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06242267.png'),
(3, 'Product 3', 'lorem ipsum dolor emt dxif folor mojor fixlo', 150, 'https://www.mobiledokan.com/wp-content/uploads/2023/08/Xiaomi-Redmi-12.jpg'),
(4, 'Product 4', 'lorem ipsum dolor emt dxif folor mojor fixlo', 200, 'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg'),
(5, 'Computer', 'very nice powerful computer', 1000, 'https://i0.wp.com/digitalbridgebd.com/wp-content/uploads/2018/03/lenovo-desktop-computer-500x500.jpg'),
(6, 'Mobile', 'pro mobile phone is grate', 500, 'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Editor'),
(3, 'Viewer');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role_id`) VALUES
(2, 'Donald', 'Trump', 'donal@trump.com', 'pass123', NULL),
(4, 'Jony', 'Dep', 'j@deep.com', '$2b$12$TDNfwH8MkpWot6j40V/8HuiQjkwl1leMYbggICK/5i827VwqcS4wi', NULL),
(5, '', 'Dep', 'j2@deep.com', '$2b$12$kUDdeiIH5uwt7.b5TyDIrOsctnTq7E5B9Wq7HaWNJhJCuRGB8JKzO', NULL),
(6, 'Jon', 'Dep', 'j2@j.com', '$2b$12$zME30HvfJ2e/Mv3C7OATJeikKxvfv5BDLkFxr16D8pzUCgyavTFXy', NULL),
(7, 'Jon', 'Dep', 'j2@js.com', '$2b$12$9VlojX4wJTkT1YqImcGoxOexZcfUFpHtjPpjl79aKHh1X4W8o6eMe', NULL),
(8, 'Maruf', 'Kabir', 'm@m.com', '$2b$12$AVya9odufBM4NJHTEw9ghOM4KSxZEtr5WVJBgvUlPSr6/Kely30iW', NULL),
(9, 'test', 'D', 't@j.com', '$2b$12$NTxKaRQ5iXfpXC9hZc.DoeVMfXoK6WRJzKNrH1wz4njEBEpEKsXda', NULL),
(10, 'Jon', 'Vowet', 'j@v.com', '$2b$12$kVWJl.bh83d00B1mtLaVRuhwUFo9oTCXGpIVTMLkmmQiNNydlSqX.', NULL),
(12, 'Jon', 'Vowet', 'j@sv.com', '$2b$12$CeZmOqmCAt3mRzGIAihfK.50pVkEI5IqiPvu2cNVqdApZ3o9fVK52', NULL),
(15, 'Jon', 'V', 'j@s.com', '$2b$12$P/0oUJDAoosNMI9KudRlxujY0L5sMVd6xNI1vUxOOHWS6SdbfKndK', NULL),
(16, 'Jon', 'V', '12j1@s.com', '$2b$12$T2fmtlVmiQB9JhcaTvFMPuA6BLkY53chqhOUblV0BTscBJQnGsiqO', NULL),
(18, 'Jon', 'V', 'jon@v.com', '$2b$12$j/h3hfBi3/IKtZi9Zgd5Q.xmzLmER92bOjGZJc27Y4HZE2Z.WOxvW', 3),
(20, 'test', 'D', 't@t1.com', '$2b$12$zfZikrTalpRw6EUYLveRNesa3R2NHE.mJmJN1FgYgKHV7rxZiQEhC', 1),
(21, 'zar', 'wali', 'zar@email.com', '$2b$12$EbduVs6J8mddJgWyZv.MCuGupMxOTHrnueQ75lqCl5pCMxLQjGsJG', 3),
(22, 'zar', 'wali', 'za2@email.com', '$2b$12$N1lAoKwJfMrd7I0XNRE5AezDzoJePSu9C1nmzEQlBzter581os.kC', 3),
(23, 'Fadric', 'Kfo', 'f@k.com', '$2b$12$V4lr7BZYAD1wI/PALlF7OOR9z1nGaaNVsokkdYljo.t/HoF.cj4fO', 1),
(24, 'Maruf', 'K', 'maruf@email.com', '$2b$12$prLD.25NSrT1qmODMnzbRu8tntmmzJWndBMi.6iBzdsA34e/Af17G', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_145532db85752b29c57d2b7b1f1` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD KEY `FK_a2cecd1a3531c0b041e29ba46e1` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FK_145532db85752b29c57d2b7b1f1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_a2cecd1a3531c0b041e29ba46e1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
