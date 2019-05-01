# Elite2 API mock

Nomis mocks for the licences service built in node

# Get Started

1. Install the dependencies required to run the service:

```
$ npm install
```

2. Start the server

```
$ npm run start

application will run on port 9090

```

# Routes of interest to PECS

The following routes are of particular interest to PECS:

## Offender info

Available offendeNos: A1234BC, A1234BD

Available bookingIds: 1234, 1235

- `/elite2api/api/prisoners/:offenderNo`
- `/elite2api/api/offenders/:offenderNo/alerts`
- `/elite2api/api/bookings/:bookingId/alerts`

## Movements

Based on the proposed extended movement endpoint.

There are 10 movement records, one for each day, between the datetimes: 2020-01-01T09:00:00 to 2020-01-10T09:00:00

- `/elite2api/api/movements?fromDateTime=YYYY-MM-DDTHH:MM:SS.SSSS&toDateTime=YYYY-MM-DDTHH:MM:SS.SSSS`

## Reference

- `/elite2api/api/agencies`
- `/elite2api/api/reference-domains/domains/MOVE_TYPE`

# Building and pushing docker image

1. Build the image locally

```
docker build -t mojdigitalstudio/licences-nomis-mocks:latest .
```

2. Push the image to the docker repo

```
docker push mojdigitalstudio/licences-nomis-mocks:latest
```
