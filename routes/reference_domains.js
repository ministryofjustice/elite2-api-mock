const express = require('express')

const router = express.Router()

const moveTypes = [
  {
    domain: 'MOVE_TYPE',
    code: 'ADM',
    description: 'Admission',
    activeFlag: 'Y',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'ADMIN',
    description: 'Administrative',
    activeFlag: 'N',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'CRI',
    description: 'Community Report In',
    activeFlag: 'N',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'CRT',
    description: 'Court',
    activeFlag: 'Y',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'INT',
    description: 'Internal Transfer',
    activeFlag: 'N',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'INTAKE',
    description: 'Intake',
    activeFlag: 'N',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'INTER',
    description: 'Intermittant Custody',
    activeFlag: 'N',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'OJ',
    description: 'Outside Jurisdiction',
    activeFlag: 'N',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'REL',
    description: 'Release',
    activeFlag: 'Y',
  },
  {
    domain: 'MOVE_TYPE',
    code: 'TAP',
    description: 'Temporary Absence',
    activeFlag: 'Y',
  },
]

router.get('/domains/MOVE_TYPE', (req, res) => {
  res.send(moveTypes)
})

module.exports = router
