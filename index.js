
const EventEmitter = require('events');
const express = require('express')
const app = express()
const port = 3000
const log = require('./logs')

/** observer pattern  */
const subject = new EventEmitter();
subject.on('after_save_booking', (data) => {
  console.log('handle send email', data);
});
subject.on('after_save_booking', (data) => {
    console.log('handle send notification', data);
});



app.get('/booking', (req, res) => {
  // sau khi save booking
  subject.emit('after_save_booking', { name: 'event_name'});
  res.send('Hello World!')

})

/** adapter pattern */
app.get('/log', (req, res) => {
    log.info("log info")
    res.send('request to log!')
  
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})