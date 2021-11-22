-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/oIh9KQ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE `Users` (
    `id_user` int AUTO_INCREMENT NOT NULL ,
    `username` varchar(100)  NOT NULL ,
    `password` varchar(100)  NOT NULL ,
    `nom` varchar(100)  NOT NULL ,
    `prenom` varchar(100)  NOT NULL ,
    `mail` varchar(255)  NOT NULL ,
    `role` enum('ADMIN','USER')  NOT NULL ,
    PRIMARY KEY (
        `id_user`
    ),
    CONSTRAINT `uc_Users_username` UNIQUE (
        `username`
    )
);

CREATE TABLE `Annonces` (
    `id_ann` int AUTO_INCREMENT NOT NULL ,
    `id_user` int  NOT NULL ,
    `date_pub` date  NOT NULL ,
    `titre` varchar(100)  NOT NULL ,
    `description` varchar(500)  NOT NULL ,
    `prix` DECIMAL(10,2)  NOT NULL ,
    `photo` varchar(500)  NULL ,
    `state` tinyint(1)  NOT NULL ,
    PRIMARY KEY (
        `id_ann`
    )
);

CREATE TABLE `Propositions` (
    `id_prop` int AUTO_INCREMENT NOT NULL ,
    `id_user` int  NOT NULL ,
    `id_ann` int  NOT NULL ,
    `date_prop` date  NOT NULL ,
    `message` varchar(500)  NULL ,
    `proposition` DECIMAL(10,2)  NOT NULL ,
    PRIMARY KEY (
        `id_prop`
    )
);

CREATE TABLE `Sales` (
    `id_sales` int AUTO_INCREMENT NOT NULL ,
    `id_user` int  NOT NULL ,
    `id_ann` int  NOT NULL ,
    `date_sale` date  NOT NULL ,
    PRIMARY KEY (
        `id_sales`
    )
);

ALTER TABLE `Annonces` ADD CONSTRAINT `fk_Annonces_id_user` FOREIGN KEY(`id_user`)
REFERENCES `Users` (`id_user`);

ALTER TABLE `Propositions` ADD CONSTRAINT `fk_Propositions_id_user` FOREIGN KEY(`id_user`)
REFERENCES `Users` (`id_user`);

ALTER TABLE `Propositions` ADD CONSTRAINT `fk_Propositions_id_ann` FOREIGN KEY(`id_ann`)
REFERENCES `Annonces` (`id_ann`);

ALTER TABLE `Sales` ADD CONSTRAINT `fk_Sales_id_user` FOREIGN KEY(`id_user`)
REFERENCES `Users` (`id_user`);

ALTER TABLE `Sales` ADD CONSTRAINT `fk_Sales_id_ann` FOREIGN KEY(`id_ann`)
REFERENCES `Annonces` (`id_ann`);

