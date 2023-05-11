const express = require('express')
const calculator = require('../mapper/calculator')
const router = express.Router()

router.get('/calculator', function (req, res) {
  const operation = req.query.operation
  const valueOne = Number(req.query.valueOne)
  const valueTwo = Number(req.query.valueTwo)
  const result = calculator(operation, valueOne, valueTwo)
  res.send({ success: true, result })
})

module.exports = router
