CREATE DATABASE users;
DROP DATABASE users; 

CREATE TABLE users_types(
	id int PRIMARY KEY AUTO_INCREMENT,
    type varchar(100) NOT NULL
);

CREATE TABLE users(
	id int PRIMARY KEY AUTO_INCREMENT,
    type_id int,
    is_active int,
    email varchar(100) NOT NULL,
    username varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    FOREIGN KEY (type_id) REFERENCES users_types(id)
);

ORM - Object Relational Mapping

INSERT INTO users(nome, login, senha) VALUES ('Admin', 'admin@admin.com.br', '123123'); 
INSERT INTO users(nome, login, senha) VALUES ('Teste', 'teste@teste.com.br', '123123'); 

