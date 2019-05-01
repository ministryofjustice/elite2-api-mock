const express = require('express')

const router = express.Router()

const prisoners = [
  {
    offenderNo: 'A1234BC',
    title: 'Mr',
    suffix: 'string',
    firstName: 'Derek',
    middleNames: 'string',
    lastName: 'Trotter',
    dateOfBirth: '1945-12-03',
    gender: 'Male',
    sexCode: 'string',
    nationalities: 'string',
    currentlyInPrison: 'string',
    latestBookingId: 1,
    latestLocationId: 'OUT',
    latestLocation: 'OUT',
    internalLocation: 'string',
    pncNumber: '111111',
    croNumber: '222222',
    ethnicity: 'White British',
    birthCountry: 'Great Britain',
    religion: 'None',
    convictedStatus: 'string',
    imprisonmentStatus: 'string',
    receptionDate: '19/01/1983',
    maritalStatus: 'M',
    currentWorkingFirstName: 'Del',
    currentWorkingLastName: 'Trotter',
    currentWorkingBirthDate: 'string',
  },
  {
    offenderNo: 'A1234BD',
    title: 'Mr',
    suffix: 'string',
    firstName: 'Rodney',
    middleNames: 'string',
    lastName: 'Trotter',
    dateOfBirth: '1960-12-03',
    gender: 'Male',
    sexCode: 'string',
    nationalities: 'string',
    currentlyInPrison: 'string',
    latestBookingId: 2,
    latestLocationId: 'OUT',
    latestLocation: 'OUT',
    internalLocation: 'string',
    pncNumber: '333333',
    croNumber: '444444',
    ethnicity: 'White British',
    birthCountry: 'Great Britain',
    religion: 'None',
    convictedStatus: 'string',
    imprisonmentStatus: 'string',
    receptionDate: '19/01/1990',
    maritalStatus: 'M',
    currentWorkingFirstName: 'Rodney',
    currentWorkingLastName: 'Trotter',
    currentWorkingBirthDate: 'string',
  },
]

router.get('/', (req, res) => {
  const { offenderNo, lastName, firstName } = req.query
  res.send(
    prisoners.filter(prisoner => {
      if (offenderNo) {
        return offenderNo === prisoner.offenderNo
      }
      if (lastName) {
        if (!firstName) {
          return lastName.toUpperCase() === prisoner.lastName.toUpperCase()
        }
        return lastName === prisoner.lastName.toUpperCase() && prisoner.firstName.toUpperCase().includes(firstName)
      }
      return undefined
    })
  )
})

router.get('/:offenderNo', (req, res) => {
  const { offenderNo } = req.params
  res.send(
    prisoners.filter(prisoner => {
      return offenderNo === prisoner.offenderNo
    })
  )
})

module.exports = router
