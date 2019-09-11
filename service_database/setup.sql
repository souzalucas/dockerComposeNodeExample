CREATE DATABASE IF NOT EXISTS loja;

USE loja;

CREATE TABLE IF NOT EXISTS Clientes (
    ID      int NOT NULL AUTO_INCREMENT,
    Nome    varchar(150) NOT NULL,
    CPF     char(11) NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO Clientes(Nome,CPF) VALUES ('teste1', '12345678901');