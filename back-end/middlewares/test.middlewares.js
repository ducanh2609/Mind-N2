const jwt = require('jsonwebtoken')
const { getUserOneDb } = require('../models/users.models')


module.exports.checkExitsUserSignIn = async (req, res, next) => {
    const { username } = req.body
    const user = await getUserOneDb({username})
    console.log(user)
    if (user) res.status(400).json({ message: 'User Exits' })
    else next()
}

module.exports.checkAuthentication = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const decoded = jwt.verify(token, 'testtoken')
        if (decoded) next()
        else res.json({ message: 'bạn chưa đăng nhập' })
    } catch (error) {
        console.log(error)
    }
}
module.exports.checkAuthoziration = (req, res, next) => {
    const { username } = req.body
    const allUser = JSON.parse(fs.readFileSync('./servers/users.json', { encoding: "utf8" }))
    const user = allUser.find(item => item.username == username)
    if (user?.role.includes("admin")) next()
    else res.json({ message: "Bạn không có quyền truy cập" })
}