const express = require('express')

const router = express.Router()
const fs = require('fs')

const alerts = require('./stubs/alerts')

router.get('/:bookingId/aliases', (req, res) => {
  res.send([
    {
      firstName: 'Marky',
      middleName: 'string',
      lastName: 'Andrews',
      age: 0,
      dob: '2018-01-11',
      gender: 'string',
      ethnicity: 'string',
      nameType: 'string',
      createDate: '2018-01-11',
    },
  ])
})

router.get('/:bookingId/identifiers', (req, res) => {
  res.send([
    {
      type: 'PNC',
      value: 'PNC/A0001XX',
      issuedAuthorityText: 'issuedBySomeone',
      issuedDate: '01-01-2001',
      caseloadType: 'INST',
    },
    {
      type: 'CRO',
      value: 'CRO/A0001XX',
      issuedAuthorityText: 'issuedBySomeone',
      issuedDate: '01-01-2001',
      caseloadType: 'INST',
    },
    {
      type: 'middleName',
      value: 'Middle',
      issuedAuthorityText: 'issuedBySomeone',
      issuedDate: '01-01-2001',
      caseloadType: 'INST',
    },
  ])
})

router.get('/:bookingId/mainOffence', (req, res) => {
  const crimes = [
    {
      bookingId: 1200635,
      offenceDescription:
        "Cause exceed max permitted wt of artic' vehicle - No of axles/configuration (No MOT/Manufacturer's Plate)",
    },
  ]

  res.send(crimes)
})

router.get('/:bookingId/relationships', (req, res) => {
  res.send([
    {
      lastName: 'Orton',
      firstName: 'Ryan',
      middleName: 'string',
      contactType: 'string',
      contactTypeDescription: 'string',
      relationship: 'string',
      relationshipDescription: 'string',
      emergencyContact: true,
      nextOfKin: true,
      relationshipId: 0,
      personId: 123,
    },
  ])
})

router.get('/:bookingId/alerts', (req, res) => {
  const { bookingId } = req.params
  res.send(
    alerts.filter(alert => {
      return parseInt(bookingId, 10) === alert.bookingId
    })
  )
})

router.get('/offenderNo/:imageId/image/data', (req, res) => {
  const { imageId } = req.params
  const id = imageId === '111111' ? 'del' : 'rodders'

  const src = fs.createReadStream(`routes/images/${id}.png`)
  src.pipe(res)
})

router.get('/offenderNo/:offenderNo/alerts', (req, res) => {
  const { offenderNo } = req.params
  fs.readFile(`./fixtures/alerts-${offenderNo}.json`, 'utf-8', (err, template) => {
    if (err) {
      throw err
    }

    res.setHeader('Content-Type', 'application/json')
    res.send(template)
  })
})

module.exports = router
