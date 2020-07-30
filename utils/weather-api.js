const axios = require('axios');
const weatherAPIkey = process.env.OPEN_WEATHER_API_KEY;
const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Dallas&appid='

module.exports = async function () {
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
        return {
            temp: 66,
            weather: "sunshine and rainbows"
        };
    }
}
