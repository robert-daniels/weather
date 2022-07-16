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

request(
    {
        url: geoLocationURL,
        json: true
    },
    (error, response) => {
        data = response.body.data[0];
        console.log(`Longitude: ${data.longitude}`);
        console.log(`Latitude: ${data.latitude}`);
    }
)