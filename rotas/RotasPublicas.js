const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const RotasPublicas = express.Router()

const authController = new AuthController();
const userController = new UserController();

RotasPublicas.post('/login', authController.login)
RotasPublicas.post('/register', userController.create)

module.exports = RotasPublicas