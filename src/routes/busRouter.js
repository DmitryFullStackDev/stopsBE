const express = require('express')
const router = express.Router()
const busController = require('../controlles/busController')

router.get('/stops', busController.getBusList)
router.get('/', busController.getWelcome)


module.exports = router
