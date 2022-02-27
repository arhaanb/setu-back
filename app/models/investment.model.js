var mongoose = require('mongoose')
var Schema = mongoose.Schema

var InvestmentSchema = new Schema({
	userid: String,
	compusername: String,
	amount: String,
	percentage: String,
	companyname: String
})

var Investment = mongoose.model('Investment', InvestmentSchema)
module.exports = Investment
