const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/:offenderNo', (req, res) => {
  const { offenderNo } = req.params
  fs.readFile(`./fixtures/person-${offenderNo}.json`, 'utf-8', (err, template) => {
    if (err) {
      throw err
    }

    res.setHeader('Content-Type', 'application/json')
    res.send(template)
  })
})

module.exports = router
