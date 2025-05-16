const express = require('express')
const router = express.Router()
const tokenRouter = require('./busRouter')

router.use('/', tokenRouter)

module.exports = router
