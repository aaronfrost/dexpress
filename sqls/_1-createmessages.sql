CREATE TABLE `test`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `message` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));