const express = require('express');
const app = express();
const axios = require('axios');
const schedule = require('node-schedule');

require('dotenv').config();

const weatherAPIkey = process.env.OPEN_WEATHER_API_KEY;
const textbeltKey = process.env.TEXTBELT_KEY;
const phone = process.env.PHONE;
const customer = process.env.CUSTOMER;
const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Dallas&appid='

app.use(express.json());



async function sendSMS(message) {
    try {
        axios.post('https://textbelt.com/text', {
            phone,
            message,
            key: textbeltKey,
        });
    } catch (error) {

    }
}


async function getWeatherData() {
    try {
        const {
            data
        } = await axios.get(OPEN_WEATHER_BASE_URL + weatherAPIkey);
        const [weather] = data.weather;
        return {
            temp: Math.round(data.main.temp),
            weather
        };
    } catch (error) {

    }
}


async function genMessage() {
    const {
        temp,
        weather
    } = await getWeatherData();
    const message = `Good Morning, ${customer}, the current temperature is ${temp} degrees Fahrenheit. As of ${new Date().toLocaleTimeString()}, the current weather condition suggests ${weather.description}.`;
    return message;
}

const scheduleObj = {
    hour: 5,
    minute: 0,
    dayOfWeek: [0, 1, 2, 3, 4, 5, 6]
};

schedule.scheduleJob(scheduleObj, function () {
    const message = genMessage();
    message.then(data => sendSMS(data));
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Jarvis is listening on port ${port}`)
});