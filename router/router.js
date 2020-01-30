
const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userController = require('../controller/userController')
const commentController = require('../controller/commentController')
const likeController = require('../controller/likeController')
const auth = require('../middleware/auth.js')


process.env.SECRET_KEY = 'secret'

module.exports = app => {
	app.get('/', userController.home)

	//api user
	app.get('/user', userController.listUser)
	app.post('/register', userController.registerUser)
	app.get('/landing', userController.getToken)
	app.get('/user/:id', userController.detailUser)
	app.post('/user/', userController.tambahUser)
	app.post('/login/', userController.loginUser)
	app.put('/user/:id', userController.ubahUser)
	app.delete('/user/:id', userController.hapusUser)
	app.post('/comment', commentController.tambahKomen)
	app.get('/comment', commentController.listKomen)
	app.get('/jumlahcomment', commentController.jumlahKomen)
	app.post('/like', likeController.tambahLike)
	app.get('/like', likeController.listLike)
	app.get('/jumlahlike', likeController.jumlahLike)

	//get token
	app.post('/token', userController.getToken)

}
