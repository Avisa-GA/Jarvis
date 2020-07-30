const axios = require('axios');
const textbeltKey = process.env.TEXTBELT_KEY;
const phone = process.env.PHONE;


module.exports = async function (message) {
    try {
        axios.post('https://textbelt.com/text', {
            phone,
            message,
            key: textbeltKey,
        });
    } catch (error) {
        console.log(error)
    }
}