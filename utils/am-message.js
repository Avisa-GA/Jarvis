const time = require('./time');
const customer = process.env.CUSTOMER;

module.exports = async function(getWeather, getQuote) {
        const {
            temp,
            weather
        } = await getWeather();
    
        // const { 
        //     quote, 
        //     author } = await getQuote();
            
            let endsWithS = weather.description.substr(weather.description.length -1, 1) === 's';

            let quote = 'I was a poet and didn\'t know it';
            let author = 'unknown';
    
        return `Good Morning, ${customer}, the current temperature is ${temp} degrees Fahrenheit. \n\nAs of ${time()}, the current weather condition suggests ${endsWithS ? 'a ' + weather.description : weather.description}. \n\nHere is your Quote of the Day:\n\n"${quote}" -${author}`;
         
}