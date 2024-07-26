const express = require('express')
const UserController = require('../controllers/UserController')

const UsersRotas = express.Router()

const userController = new UserController();

UsersRotas.get('/users',  userController.findAll)
UsersRotas.get('/users/:id', userController.findId)
UsersRotas.post('/users', userController.create)
UsersRotas.put('/users/:id', userController.update)
UsersRotas.delete('/users/:id', userController.delete)

module.exports = UsersRotas;
// export default UsersRotas;