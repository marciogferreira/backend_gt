const express = require('express')
const CommentsController = require('../controllers/CommentsController')

const CommentsRotas = express.Router()

const commentsController = new CommentsController();
CommentsRotas.get('/comments', commentsController.findAll)
CommentsRotas.get('/comments/:id', commentsController.findId)
CommentsRotas.post('/comments', commentsController.create)
CommentsRotas.put('/comments/:id', commentsController.update)
CommentsRotas.delete('/comments/:id', commentsController.delete)

module.exports = CommentsRotas;