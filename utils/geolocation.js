const request = require('request');
const apiKeys = require('../config/apikeys');

/**
 * Pulls latitude and longitude from Positionstack API
 * 
 * @param {string} addressString of location to request from API
 * @param {function} callback function, what to do with the request response
 */


exports.getLocation = (addressString, callback) => {
    const geoLocationURL = `http://api.positionstack.com/v1/forward` + 
                           `?access_key=${apiKeys.keyGeoAPI}` +
                           `&query=${addressString}` +
                           `&limit=1`;

   
    request(
        {
            url: geoLocationURL,
            json: true
        },
        (error, response) => {
            if (error) {
                callback('Unable to connect to location services. Low level error. Possible cause: connectivity error', undefined)
            } 
            else if (response.body.error){
                callback(`Error! Response from api: ${response.body.error.context.query.message}`, undefined);
            }
            else {
                data = response.body.data[0];
                callback(
                    undefined, 
                    {
                        latitude: data.latitude, 
                        longitude: data.longitude, 
                        label: data.label
                    }
                )
            }
        }
    )
}





