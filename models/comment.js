var mongoose = require('mongoose')

var CommentSchema = mongoose.Schema({
  username: {
		type: String,
		required: true
	},

	comment: {
		type: String,
		required: true
	},
	
	
},
{
  timestamps: true
})

var Comment = module.exports = mongoose.model('comment', CommentSchema)
