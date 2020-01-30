const Barang = require('../models/transaksi')

exports.home = (req,res) => {
	res.send("Wellcome to API projek transaksi")
}

exports.listTransaksi = async (req,res) => {
	let data = await Barang.find()
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}
