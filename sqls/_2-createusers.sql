CREATE TABLE `test`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

--Add created column
ALTER TABLE `test`.`messages`
  ADD COLUMN `created` DATETIME NOT NULL AFTER `message`;

