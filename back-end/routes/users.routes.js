const express = require('express')
const { getUser } = require('../controllers/users.controllers')
const router = express.Router()

router.get('/', getUser)

router.post('/', (req, res) => {
    res.send('OK')
})

module.exports = router