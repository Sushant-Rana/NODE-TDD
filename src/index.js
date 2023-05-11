const express = require('express')
const router = express.Router()

const customRoutes = require('./routes/custom.routes')

router.use('/test', customRoutes)

module.exports = router
