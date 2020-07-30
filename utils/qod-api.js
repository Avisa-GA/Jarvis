const axios = require('axios');

module.exports = async function () {
    try {
        let quote; 
        await axios.get('https://quotes.rest/qod', {
            accept: 'Application/json'
        }).then(({data}) => {
            const [ quoteText ] = data.contents.quotes;
            quote = quoteText;
        });
        quote.author = quote.author ? quote.author : "Unknown";
        quote.quote = quote.quote ? quote.quote : "Don't treat people how you want to be treated, treat them how THEY want to be treated";
        return quote;
    } catch (error) {
        return {
            quote: 'Not everything that can be counted counts and not everything that counts can be counted',
            author: 'Albert Einstein'
        };
    }
}


