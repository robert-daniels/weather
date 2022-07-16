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



