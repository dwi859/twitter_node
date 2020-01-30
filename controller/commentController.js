const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

exports.tambahKomen = async(req,res) => {
    const {id} = req.params
    const isi = {
      username : req.body.username,
      comment : req.body.comment
    }
    const status2 = await Comment.create(isi)
    const jumlah  = await Comment.find()
        res.send({ "status" : jumlah })
    }

  exports.listKomen = async (req,res) => {
	let data = await Comment.find()
  res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
  }

  exports.jumlahKomen = async (req,res) => {
    let data = await Comment.count()
    res.send({ "status" : data })
    }