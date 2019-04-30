const express = require('express')

const router = express.Router()

const movements = [
  {
    offenderNo: '1',
    createDateTime: '2019-01-30T16:24:36.770Z',
    fromAgency: 'string',
    fromAgencyDescription: 'Peckham',
    toAgency: 'string',
    toAgencyDescription: 'string',
    fromCity: 'string',
    toCity: 'string',
    movementType: 'REL',
    movementTypeDescription: 'Released',
    directionCode: 'string',
    movementTime: {
      hour: 0,
      minute: 0,
      second: 0,
      nano: 0,
    },
    movementReason: 'string',
    commentText: 'string',
  },
  {
    offenderNo: '2',
    createDateTime: '2019-01-30T19:25:00.770Z',
    fromAgency: 'string',
    fromAgencyDescription: 'Peckham',
    toAgency: 'string',
    toAgencyDescription: 'string',
    fromCity: 'string',
    toCity: 'string',
    movementType: 'REL',
    movementTypeDescription: 'Released',
    directionCode: 'string',
    movementTime: {
      hour: 0,
      minute: 0,
      second: 0,
      nano: 0,
    },
    movementReason: 'string',
    commentText: 'string',
  },
]

router.get('/', (req, res) => {
  // The toDateTime arg is a proposed extension
  const { fromDateTime, toDateTime, agencyId } = req.query
  res.send(
    movements.filter(movement => {
      if (fromDateTime && !toDateTime) {
        return fromDateTime < movement.createDateTime
      }
      if (!fromDateTime && toDateTime) {
        return toDateTime > movement.createDateTime
      }
      if (fromDateTime && toDateTime) {
        return fromDateTime < movement.createDateTime && toDateTime > movement.createDateTime
      }
      return true
    })
  )
})

router.post('/offenders', (req, res) => {
  res.send(movements)
})

module.exports = router
