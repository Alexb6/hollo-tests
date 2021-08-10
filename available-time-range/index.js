const eventsTest = require('./eventsTest');
const { findFreeTimes } = require('./function');
const moment = require('moment');

const events = [
   {
      "start": "2017-02-21T12:00:00-05:00",
      "end": "2017-02-21T12:30:00-05:00",
   },
   {
      "start": "2017-02-21T14:00:00-05:00",
      "end": "2017-02-21T16:00:00-05:00"
   }
];

const start = moment('2017-02-21T08:00:00-05:00');
const end = moment('2017-02-21T18:00:00-05:00');

const Outputs = findFreeTimes(start, end, 30, events);
// const Outputs = findFreeTimes(start, end, 30, eventsTest);
console.log(Outputs);
