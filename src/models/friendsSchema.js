const {mongoose} = require('../config/dbConnection')


const friends = mongoose.model('friends', { name: String });

exports.friends=friends