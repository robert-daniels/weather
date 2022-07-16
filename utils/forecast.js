const request = require('request');
const apiKeys = require('../config/apikeys');

/**
 * Gets weather data from weatherstack.com api 
 * 
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {function} callback function processes the response from request
 */

exports.getForecast = (latitude, longitude, callback) => {
    const weatherURL = `http://api.weatherstack.com/current` +
                       `?access_key=${apiKeys.keyWeatherAPI}` +
                       `&query=${latitude},${longitude}`

    request(
        {
            url: weatherURL,
            json: true
        },
        (error, response) => {
            if (error) {
                callback('Unable to connect to weather services. Low level error. Possible cause: connectivity error', undefined);
            }
            else if (response.body.error) {
                callback(`Error! Response from api: ${response.body.error.info}`, undefined);
            }
            else {
                data = response.body.current;
                for (let property in data) {
                    console.log(`${property}: ${data[property]}`);
                }
            }
        }
    )
}