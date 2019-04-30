const express = require('express')

const router = express.Router()

const agencies = [
  {
    agencyId: '474052',
    description: 'Romford Probation Office',
    agencyType: 'COMM',
  },
  {
    agencyId: '648804',
    description: 'Fareham Probation Office',
    agencyType: 'COMM',
  },
  {
    agencyId: 'ABDALE',
    description: 'Abbey Dale Court, London',
    agencyType: 'HSHOSP',
  },
  {
    agencyId: 'ABDRCT',
    description: 'Aberdare County Court',
    agencyType: 'CRT',
  },
  {
    agencyId: 'ABDRMC',
    description: 'Aberdare MC',
    agencyType: 'CRT',
  },
  {
    agencyId: 'ABDRYC',
    description: 'Aberdare Youth Court',
    agencyType: 'CRT',
  },
  {
    agencyId: 'ABGVMC',
    description: 'Abergavenny MC',
    agencyType: 'CRT',
  },
  {
    agencyId: 'ABRYCT',
    description: 'Aberystwyth County Court',
    agencyType: 'CRT',
  },
  {
    agencyId: 'ABRYMC',
    description: 'Aberystwyth MC',
    agencyType: 'CRT',
  },
  {
    agencyId: 'ABRYYC',
    description: 'Aberystwyth Youth Court',
    agencyType: 'CRT',
  },
]

router.get('/', (req, res) => {
  res.send(agencies)
})

router.get('/prison/:agencyLocationId', (req, res) => {
  res.send({
    agencyId: 'LT1',
    addressType: 'BUS',
    premise: 'HMP Albany',
    city: 'Testington',
    locality: 'Testville',
    country: 'England',
    postCode: 'AB1 1AB',
    phones: [
      {
        number: '0111 999 999',
        type: 'BUS',
        ext: '999',
      },
      {
        number: '0222 999 999',
        type: 'FAX',
        ext: '999',
      },
    ],
  })
})

module.exports = router
