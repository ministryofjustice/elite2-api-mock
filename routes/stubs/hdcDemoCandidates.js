const moment = require('moment')

module.exports = [
  {
    bookingId: 1200664,
    offenderNo: 'A5001DY',
    firstName: 'ALISTAIR',
    lastName: 'TODD',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'HMP Albany',
    internalLocationDesc: 'T-T1-001',
    facialImageId: 1,
    sentenceDetail: {
      bookingId: 1200664,
      conditionalReleaseDate: moment()
        .add(7, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(5, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewActualDate: '2019-09-13',
      automaticReleaseDate: '2020-02-02',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200616,
    offenderNo: 'A0002XX',
    firstName: 'MATTHEW',
    lastName: 'WHITFIELD',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 2,
    sentenceDetail: {
      bookingId: 1200616,
      conditionalReleaseDate: moment()
        .add(14, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(9, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200649,
    offenderNo: 'A0003XX',
    firstName: 'DAVID',
    lastName: 'CLARKE',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 3,
    sentenceDetail: {
      bookingId: 1200649,
      conditionalReleaseDate: moment()
        .add(11, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(7, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200657,
    offenderNo: 'A0004XX',
    firstName: 'JIM',
    lastName: 'MUSGRAVE',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 1,
    sentenceDetail: {
      bookingId: 1200657,
      conditionalReleaseDate: moment()
        .add(14, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(8, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200669,
    offenderNo: 'A0005XX',
    firstName: 'LIAM',
    lastName: 'BALL',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 4,
    sentenceDetail: {
      bookingId: 1200669,
      conditionalReleaseDate: moment()
        .add(28, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(2, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1129006,
    offenderNo: 'A0006XX',
    firstName: 'MICHAEL',
    lastName: 'WILLIS',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 6,
    sentenceDetail: {
      bookingId: 1129006,
      conditionalReleaseDate: moment()
        .add(28, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(2, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1088811,
    offenderNo: 'A0007XX',
    firstName: 'JIM',
    lastName: 'SMITH',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 5,
    sentenceDetail: {
      bookingId: 1088811,
      conditionalReleaseDate: moment()
        .add(53, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(4, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200667,
    offenderNo: 'A0008XX',
    firstName: 'BRIAN',
    lastName: 'MCKNIGHT',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 3,
    sentenceDetail: {
      bookingId: 1200667,
      conditionalReleaseDate: moment()
        .add(16, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(1, 'year')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2018-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1062084,
    offenderNo: 'A0009XX',
    firstName: 'EDWARD',
    lastName: 'SHANNON',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 4,
    sentenceDetail: {
      bookingId: 1062084,
      conditionalReleaseDate: moment()
        .add(15, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(1, 'year')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200642,
    offenderNo: 'A0011XX',
    firstName: 'TIMOTHY',
    lastName: 'TAYLOR',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 2,
    sentenceDetail: {
      bookingId: 1200642,
      conditionalReleaseDate: moment()
        .add(119, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(2, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1110602,
    offenderNo: 'A0012XX',
    firstName: 'JULIAN',
    lastName: 'DOS REMEDIOS',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 4,
    sentenceDetail: {
      bookingId: 1110602,
      conditionalReleaseDate: moment()
        .add(6, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(4, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200668,
    offenderNo: 'A0013XX',
    firstName: 'MATTHEW',
    lastName: 'WHITTAKER',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 6,
    sentenceDetail: {
      bookingId: 1200668,
      conditionalReleaseDate: moment()
        .add(15, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(9, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1165795,
    offenderNo: 'A0014XX',
    firstName: 'MALCOLM',
    lastName: 'CASIMIR',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 2,
    sentenceDetail: {
      bookingId: 1165795,
      conditionalReleaseDate: moment()
        .add(12, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(10, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 2200635,
    offenderNo: 'A0015XX',
    firstName: 'DAVID',
    lastName: 'KING',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 5,
    sentenceDetail: {
      bookingId: 2200635,
      conditionalReleaseDate: moment()
        .add(22, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(13, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1173571,
    offenderNo: 'A0016XX',
    firstName: 'PETER',
    lastName: 'BELL',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 6,
    sentenceDetail: {
      bookingId: 1173571,
      conditionalReleaseDate: moment()
        .add(23, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(16, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1167792,
    offenderNo: 'A0017XX',
    firstName: 'PETER',
    lastName: 'PHILLIPS',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 3,
    sentenceDetail: {
      bookingId: 1167792,
      conditionalReleaseDate: moment()
        .add(8, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(5, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1080794,
    offenderNo: 'A0018XX',
    firstName: 'JOHN',
    lastName: 'ROBERTSON',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 1,
    sentenceDetail: {
      bookingId: 1080794,
      conditionalReleaseDate: moment()
        .add(12, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(5, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200666,
    offenderNo: 'A0019XX',
    firstName: 'STEVE',
    lastName: 'RENDALL',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 2,
    sentenceDetail: {
      bookingId: 1200666,
      conditionalReleaseDate: moment()
        .add(53, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(8, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1068733,
    offenderNo: 'A0020XX',
    firstName: 'DOMINIC',
    lastName: 'BULL',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 3,
    sentenceDetail: {
      bookingId: 1068733,
      conditionalReleaseDate: moment()
        .add(28, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(18, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1152613,
    offenderNo: 'A0021XX',
    firstName: 'JAMIE',
    lastName: 'DRAPER',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 6,
    sentenceDetail: {
      bookingId: 1152613,
      conditionalReleaseDate: moment()
        .add(24, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(12, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200665,
    offenderNo: 'A0022XX',
    firstName: 'JOHN',
    lastName: 'FITZPATRICK',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 1,
    sentenceDetail: {
      bookingId: 1200665,
      conditionalReleaseDate: moment()
        .add(20, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(3, 'weeks')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1068236,
    offenderNo: 'A0023XX',
    firstName: 'STEVEN',
    lastName: 'BAPAGA',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 5,
    sentenceDetail: {
      bookingId: 1068236,
      conditionalReleaseDate: moment()
        .add(95, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(7, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200659,
    offenderNo: 'A0024XX',
    firstName: 'STEVEN',
    lastName: 'WILSON',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 3,
    sentenceDetail: {
      bookingId: 1200659,
      conditionalReleaseDate: moment()
        .add(77, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(5, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200637,
    offenderNo: 'A0025XX',
    firstName: 'ZALID',
    lastName: 'ALI',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 4,
    sentenceDetail: {
      bookingId: 1200637,
      conditionalReleaseDate: moment()
        .add(81, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(5, 'years')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1130463,
    offenderNo: 'A0026XX',
    firstName: 'AMJAD',
    lastName: 'KAHN',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 1,
    sentenceDetail: {
      bookingId: 1130463,
      conditionalReleaseDate: moment()
        .add(14, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(1, 'week')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200617,
    offenderNo: 'A0027XX',
    firstName: 'RAJ',
    lastName: 'KAHN',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 2,
    sentenceDetail: {
      bookingId: 1200617,
      conditionalReleaseDate: moment()
        .add(13, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(3, 'days')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1200645,
    offenderNo: 'A0028XX',
    firstName: 'TREVOR',
    lastName: 'RICHARDSON',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 5,
    sentenceDetail: {
      bookingId: 1200645,
      conditionalReleaseDate: moment()
        .add(100, 'weeks')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(15, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1173494,
    offenderNo: 'A0029XX',
    firstName: 'ANDREW',
    lastName: 'MARKE',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 4,
    sentenceDetail: {
      bookingId: 1173494,
      conditionalReleaseDate: moment()
        .add(40, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(22, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
  {
    bookingId: 1131447,
    offenderNo: 'A0030XX',
    firstName: 'GLEN',
    lastName: 'MAILER',
    dateOfBirth: '1989-10-22',
    agencyLocationId: 'LT1',
    agencyLocationDesc: 'Licence Auto Test Prison',
    internalLocationDesc: 'A-1-1',
    facialImageId: 5,
    sentenceDetail: {
      bookingId: 1131447,
      conditionalReleaseDate: moment()
        .add(39, 'months')
        .format('YYYY-MM-DD'),
      homeDetentionCurfewEligibilityDate: moment()
        .add(34, 'months')
        .format('YYYY-MM-DD'),
      automaticReleaseDate: '2020-02-02',
      homeDetentionCurfewActualDate: '2019-09-13',
      sentenceExpiryDate: '2020-05-24',
      licenceExpiryDate: '2020-05-02',
      topupSupervisionExpiryDate: '2020-10-15',
    },
  },
]
