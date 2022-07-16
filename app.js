/**
 * Get geocode from string address / location
 */

const request = require('request');
const apiKeys = require('./config');

let addressString = '1600 Pennsylvania Ave NW, Washington DC';

geoLocationURL = `http://api.positionstack.com/v1/forward` + 
                 `?access_key=${apiKeys.keyGeoAPI}` +
                 `&query=${addressString}` +
                 `&limit=1`

// request(
//     {
//         url: geoLocationURL,
//         json: true
//     },
//     (error, response) => {
//         data = response.body.data[0];
//         console.log(`Longitude: ${data.longitude}`);
//         console.log(`Latitude: ${data.latitude}`);
//     }
// )

weatherURL = `http://api.weatherstack.com/current` +
             `?access_key=${apiKeys.keyWeatherAPI}` +
             `&query=40.7831,-73.9712`

request(
    {
        url: weatherURL,
        json: true
    },
    (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service! Please check connectivty and try again later');
        } else {
            data = response.body.current;
            for (let property in data) {
                console.log(`${property}: ${data[property]}`);
            }
        }
        
        
    }
)