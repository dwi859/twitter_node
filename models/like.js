var mongoose = require('mongoose')

var likeSchema = mongoose.Schema({
  username: {
		type: String,
		required: true
	},
},
{
  timestamps: true
})

var Like = module.exports = mongoose.model('like', likeSchema)
