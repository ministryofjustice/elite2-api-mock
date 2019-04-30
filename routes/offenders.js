const express = require('express')

const router = express.Router()

const alerts = require('./stubs/alerts')

router.get('/:offenderNo/alerts', (req, res) => {
  const { offenderNo } = req.params
  res.send(
    alerts.filter(alert => {
      return offenderNo === alert.offenderNo
    })
  )
})

module.exports = router
