const axios = require('axios');

async function getQuoteOfTheDay() {
    try {
        let quote; 
        await axios.get('https://quotes.rest/qod', {
            accept: 'Application/json'
        }).then(({data}) => {
            const [ quoteText ] = data.contents.quotes;
            quote = quoteText;
        });
        return quote;
    } catch (error) {
        return {
            quote: 'Not everything that can be counted counts and not everything that counts can be counted',
            author: 'Albert Einstein'
        };
    }
}

module.exports = getQuoteOfTheDay;