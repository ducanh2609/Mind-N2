const bcrypt = require('bcrypt')
const { getAllUserDb, postUserToDb } = require('../models/users.models')

module.exports.getUser = async (req, res) => {
    try {
        let getUser
        if (!req.body.username) {
            getUser = await getAllUserDb()
        } else {
            getUser = req.user
        }
        res.send(getUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports.postUser = async (req, res) => {
    const { username, password, email } = req.body
    try {
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        const role = ['user']
        const response = await postUserToDb({ username, pass, email, role })
        if (response)
            res.json({ message: "Creat successfully" })
    } catch (error) {
        console.log(error)
        res.send({ message: error })
    }
}
