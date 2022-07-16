/**
 * Get geocode from string address / location
 */

const request = require('request');
const apiKeys = require('./config');
const geoLocation = require('./utils/geolocation.js');

let addressString = '1600 Pennsylvania Ave NW, Washington DC';

geoLocation.getLocation(addressString, (error, data) => {
    console.log(error);
    console.log('Data:', data);
});












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