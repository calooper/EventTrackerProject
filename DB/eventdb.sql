-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `fast`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fast` ;

CREATE TABLE IF NOT EXISTS `fast` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `description` VARCHAR(300) NULL,
  `length_hours` DOUBLE NULL,
  `start_fast` TIME NULL DEFAULT 170000,
  `end_fast` TIME NULL DEFAULT 060000,
  `calories` INT NULL,
  `remarks` VARCHAR(300) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `fast`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `fast` (`id`, `date`, `description`, `length_hours`, `start_fast`, `end_fast`, `calories`, `remarks`) VALUES (1, '2019-11-27', 'null', 13, '170000', '060000', 2900, NULL);
INSERT INTO `fast` (`id`, `date`, `description`, `length_hours`, `start_fast`, `end_fast`, `calories`, `remarks`) VALUES (2, '2019-11-28', NULL, 13, '170000', '060000', 3200, NULL);
INSERT INTO `fast` (`id`, `date`, `description`, `length_hours`, `start_fast`, `end_fast`, `calories`, `remarks`) VALUES (3, '2019-11-29', NULL, 13, '170000', '060000', 2600, NULL);
INSERT INTO `fast` (`id`, `date`, `description`, `length_hours`, `start_fast`, `end_fast`, `calories`, `remarks`) VALUES (4, '2019-11-30', NULL, 13, '170000', '060000', 3000, NULL);
INSERT INTO `fast` (`id`, `date`, `description`, `length_hours`, `start_fast`, `end_fast`, `calories`, `remarks`) VALUES (5, '2019-12-01', NULL, 13, '170000', '060000', 2700, NULL);

COMMIT;

