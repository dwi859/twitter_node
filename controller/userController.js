const User = require('../models/user')
const jwt = require('jsonwebtoken')

const cors = require('cors')

const bcrypt = require('bcrypt')
exports.home = (req,res) => {
  res.send("Wellcome to API projek user")
}

exports.listUser = async (req,res) => {
	let data = await User.find()
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.detailUser = async (req,res) => {
	const data = await User.findById(req.params.id)
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.tambahUser = async (req,res) => {
	const user = new User(req.body)
	const status = await user.save()
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.ubahUser = async (req,res) => {
	const {id} = req.params
	const status = await User.update({_id : id}, req.body)
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.hapusUser = async (req,res) => {
	const {id} = req.params
	const status = await User.remove({_id : id})
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

// exports.getToken = async (req,res) => {
//   let { username,password } = req.body
//   const cek = await User.findOne({username : username, password : password})
//   if (cek != null) {
//     const user = {
//       username : cek.username,
//       password : cek.password
//     }

//     jwt.sign({user}, 'secretkey', (err,token) => {
//       res.send(JSON.stringify({"status" : 200, "error" : null, "token" : token}))
//     })
//   } else {
//     res.sendStatus(403)
//   }
// }
exports.registerUser = async(req,res) => {

  const userData = {
    username: req.body.username,
    telp: req.body.telp,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address
  }

  User.findOne({
  
    username: req.body.username
    
  })
    .then(user => {
      if(user){
      if (user.username, req.body.username) {
        res.json({ error: 'User already exists' })
          
      
      } 
    }else {
      User.create(userData)
          .then(user => {
            res.json({ status: user.email + 'Registered!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
    }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}
exports.loginUser = async(req,res) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  })
    .then(user => {
      if (user) {
        if (req.body.password, user.password )   {
         
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username,
            password: user.password
           
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
          
        } else {
          // Passwords don't match
         
          res.json({ error: 'Password Wrong' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}

exports.getToken = async(req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}

