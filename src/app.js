const request = require("request");
const getGeocode = require("../utils/geocode");
const getForecast = require("../utils/forecast");

const address = process.argv[2];

if(!address) {
    console.error("Please provide a location!");
    process.exit(1);
}
getGeocode(address, (error, {location, latitude, longitude} = {}) => {
    if(error) {
        return console.log(error);
    }
    getForecast(latitude, longitude, (error, forecastData) => {
        if(error) {
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    });
});


