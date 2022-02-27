var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LikeSchema = new Schema({
	userid: String,
	projectid: String
})

var Likes = mongoose.model('Likes', LikeSchema)
module.exports = Likes
