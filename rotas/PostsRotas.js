const express = require('express')
const PostController = require('../controllers/PostController')

const PostsRotas = express.Router()

const postController = new PostController();
PostsRotas.get('/posts', postController.findAll)
PostsRotas.get('/posts/:id', postController.findId)
PostsRotas.post('/posts', postController.create)
PostsRotas.put('/posts/:id', postController.update)
PostsRotas.delete('/posts/:id', postController.delete)


module.exports = PostsRotas;