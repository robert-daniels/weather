/**
 * Retreive Weather Data, in progress
 */

const request = require('request');
const apiKeys = require('./config');
const geoLocation = require('./utils/geolocation.js');
const forecast = require('./utils/forecast.js')

let addressString = '1600 Pennsylvania Ave NW, Washington DC';

geoLocation.getLocation(addressString, (error, data) => {
    if (error){
        console.log(error);
    }
    else {
        console.log('Data:', data);
    }
});

forecast.getForecast(40.7831, -73.9712, (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
})












// weatherURL = `http://api.weatherstack.com/current` +
//              `?access_key=${apiKeys.keyWeatherAPI}` +
//              `&query=40.7831,-73.9712`

// request(
//     {
//         url: weatherURL,
//         json: true
//     },
//     (error, response) => {
//         if (error) {
//             console.log('Unable to connect to weather service! Please check connectivty and try again later');
//         } else if (response.body.error){
//             console.log(`Unable to find weather for given location`);
//         } 
//         else {
//             data = response.body.current;
//             for (let property in data) {
//                 console.log(`${property}: ${data[property]}`);
//             }
//         }
        
        
//     }
// )