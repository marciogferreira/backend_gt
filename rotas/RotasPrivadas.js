const express = require('express');
const UsersRotas = require('./UsersRotas');
const PostsRotas = require('./PostsRotas');

const RotasPrivadas = express.Router();

// MIDDLEWARE
RotasPrivadas.use((request, response, next) => {
    let isLogged = false;

    const token = request.headers.token || null;

    if(token === '123123') {
        isLogged = true;
    }

    if(isLogged === false) {
        return response.status(403).send("Não tem autorização");
    }

    next()
});

RotasPrivadas.use(UsersRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;