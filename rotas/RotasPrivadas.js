const express = require('express');
const UsersRotas = require('./UsersRotas');
const PostsRotas = require('./PostsRotas');
const CommentsRotas = require('./CommentsRotas');

const RotasPrivadas = express.Router();

// MIDDLEWARE
RotasPrivadas.use((request, response, next) => {
    let isLogged = false;

    // const token = request.headers.token || null;

    // if(token === '123123') {
    //     isLogged = true;
    // }

    // if(isLogged === false) {
    //     return response.status(403).send("Não tem autorização");
    // }

    next()
});

RotasPrivadas.use(UsersRotas);
RotasPrivadas.use(PostsRotas);
RotasPrivadas.use(CommentsRotas)

module.exports = RotasPrivadas;