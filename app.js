/**
 * Retreive Weather Data, in progress
 */

const request = require('request');
const apiKeys = require('./config');
const geoLocation = require('./utils/geolocation.js');
const forecast = require('./utils/forecast.js')

let addressString = process.argv[2];

if (!addressString){
    console.log("Error: you must provide an address in the command line to run")
} else{
    geoLocation.getLocation(addressString, (error, data) => {
        if (error){
            return console.log(error);
        }
        
        forecast.getForecast(data.latitude, data.longitude , (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(`Here is the weather for: ${data.label}`);
            console.log(forecastData);
            
        })
        
        
    });
}




