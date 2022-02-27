var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CompanySchema = new Schema({
	username: String,
	name: String,
	tagline: String,
	icon: String,
	website: String,
	location: String,
	employees: String,
	compcreated: String,
	jobopening: {
		type: Boolean,
		default: false
	},
	joblink: '',
	investment: {
		goal: String,
		percentage: String,
		current: {
			type: String,
			default: '0'
		}
	},
	pitchdeck: String,
	video: String,
	images: Array,
	description: String,
	members: Array,
	date: {
		type: Date,
		default: Date.now()
	},
	firstEditComplete: {
		type: Boolean,
		default: false
	},
	creatorID: String
})

var Company = mongoose.model('Company', CompanySchema)
module.exports = Company
