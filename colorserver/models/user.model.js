const mongoose = require('mongoose');

const User = new mongoose.Schema({
	name: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('User', User);