-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/oIh9KQ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE `Users` (
    `id_user` int  NOT NULL AUTO_INCREMENT,
    `username` varchar(100)  NOT NULL ,
    `password` varchar(100)  NOT NULL ,
    `nom` varchar(100)  NOT NULL ,
    `prenom` varchar(100)  NOT NULL ,
    `mail` varchar(255)  NOT NULL ,
    PRIMARY KEY (
        `id_user`
    ),
    CONSTRAINT `uc_Users_username` UNIQUE (
        `username`
    )
);

CREATE TABLE `Annonces` (
    `id_ann` int  NOT NULL AUTO_INCREMENT,
    `id_user` int  NOT NULL ,
    `date_pub` date  NOT NULL ,
    `titre` varchar(100)  NOT NULL ,
    `description` varchar(500)  NOT NULL ,
    `prix` DECIMAL(10,2)  NOT NULL ,
    `photo` varchar(500)  NULL ,
    `state` varchar(100)  NOT NULL ,
    PRIMARY KEY (
        `id_ann`
    )
);

CREATE TABLE `Propositions` (
    `id_prop` int  NOT NULL AUTO_INCREMENT,
    `id_user` int  NOT NULL ,
    `id_ann` int  NOT NULL ,
    `date_prop` date  NOT NULL ,
    `message` varchar(500)  NOT NULL ,
    `proposition` DECIMAL(10,2)  NOT NULL ,
    PRIMARY KEY (
        `id_prop`
    )
);

ALTER TABLE `Annonces` ADD CONSTRAINT `fk_Annonces_id_user` FOREIGN KEY(`id_user`)
REFERENCES `Users` (`id_user`);

ALTER TABLE `Propositions` ADD CONSTRAINT `fk_Propositions_id_user` FOREIGN KEY(`id_user`)
REFERENCES `Users` (`id_user`);

ALTER TABLE `Propositions` ADD CONSTRAINT `fk_Propositions_id_ann` FOREIGN KEY(`id_ann`)
REFERENCES `Annonces` (`id_ann`);

