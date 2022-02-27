var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ThreadSchema = new Schema({
	p1: String,
	p2: String,
	p1seen: Boolean,
	p2seen: Boolean,
	messages: [
		{
			content: String,
			from: String,
			date: Date
		}
	],
	lastMessage: Date
})

var Likes = mongoose.model('Threads', ThreadSchema)
module.exports = Likes
