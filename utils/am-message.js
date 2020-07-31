const time = require('./time');
const customer = process.env.CUSTOMER;

module.exports = async function (getWeather, getQuote) {
    const {
        temp,
        weather
    } = await getWeather();

    const {
        quote,
        author
    } = await getQuote();

    return `Good Morning, ${customer}, the current temperature is ${temp} degrees Fahrenheit. \n\nAs of ${time()}, the current weather condition suggests ${weather.description}. \n\nHere is your Quote of the Day:\n\n"${quote}" -${author}`;

}