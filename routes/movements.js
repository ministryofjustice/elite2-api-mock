const express = require('express')

const router = express.Router()

const movements = [
  '2020-01-01T09:00:00.770Z',
  '2020-01-02T09:00:00.770Z',
  '2020-01-03T09:00:00.770Z',
  '2020-01-04T09:00:00.770Z',
  '2020-01-05T09:00:00.770Z',
  '2020-01-06T09:00:00.770Z',
  '2020-01-07T09:00:00.770Z',
  '2020-01-08T09:00:00.770Z',
  '2020-01-09T09:00:00.770Z',
  '2020-01-10T09:00:00.770Z',
].map(date => {
  return {
    offenderNo: '1',
    createDateTime: date,
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
  }
})

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
