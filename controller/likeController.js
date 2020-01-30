const Like = require('../models/like')
const jwt = require('jsonwebtoken')

exports.tambahLike = async(req,res) => {
    const isi = {
      username : req.body.username
    }
    const status2 = await Like.create(isi)
        res.send({ "status" : status2 })
    }

  exports.listLike = async (req,res) => {
	let data = await Like.find()
  res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
  }

  exports.jumlahLike = async (req,res) => {
    let data = await Like.count()
    res.send({ "status" : data })
    }