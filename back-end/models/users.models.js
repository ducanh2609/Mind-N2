const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: [String],
})

const userModel = mongoose.model('users', userSchema)

module.exports.getAllUserDb = () => {
    return userModel.find()
}
module.exports.getUserOneDb = (data) => {
    return userModel.findOne(data)
}
module.exports.postUserToDb = (data) => {
    return userModel.create(data)
}