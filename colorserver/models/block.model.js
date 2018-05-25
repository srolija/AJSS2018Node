const mongoose = require('mongoose');

const Block = new mongoose.Schema({
	color: mongoose.SchemaTypes.String,
	x: mongoose.SchemaTypes.Number,
	y: mongoose.SchemaTypes.Number
});

module.exports = mongoose.model('Block', Block);