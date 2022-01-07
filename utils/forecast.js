const request = require("request");

const getForecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=e0f12bffab69ebaa3374034336a29782&query=" + latitude + "," + longitude;

    request({
        url,
        json: true,
    }, (error, {body}) => {
        if(error) {
            callback("Unable to connect to forecast api at this moment!", undefined);
        }
        else if(body.error) {
            callback("Invalid location!", undefined);
        }
        else {
            const data = body.current;
            const currentTemperature = data.temperature;
            callback(undefined, data.weather_descriptions[0] + ". Current temperature is " + currentTemperature + " degree.");
        }
    })
}

module.exports = getForecast;