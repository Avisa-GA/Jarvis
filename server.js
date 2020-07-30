const express = require('express');
const app = express();


require('dotenv').config();


const sms = require('./utils/sms');
const getQOD = require('./utils/qod-api');
const schedule = require('node-schedule');
const getMessage = require('./utils/am-message');
const getWeatherData = require('./utils/weather-api');


app.set('view engine', 'ejs');

app.use(express.json());



const scheduleObj = {
    hour: 5,
    minute: 0,
    dayOfWeek: [0, 1, 2, 3, 4, 5, 6]
};


schedule.scheduleJob(scheduleObj, async function() {
    const message  = await getMessage(getWeatherData, getQOD);
    sms(message);
});


app.get('/', function(req, res) {
    res.send('Hello, from Jarvis');
});

app.get('/*', function(req, res) {
    res.redirect('/');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Jarvis is listening on port ${port}`)
});