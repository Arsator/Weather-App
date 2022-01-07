const request = require("request");

const getGeocode = (address, callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYW5pc2hqaGEiLCJhIjoiY2t4cnJrY2UzMnUzYzJxcWs3OWluYmZzZCJ9.euPJjxuC-_a5lShsWM6l5w";

    request({
        url: geocodeUrl,
        json: true
    }, (error, {body}) => {
        if(error) {
            callback("Unable to connect to location services!", undefined);
        }
        else if(body.features.length === 0) {
            callback("Unable to find ocation!", undefined);
        }
        else {
            const data = body.features[0];
            const location = data.place_name;
            const latitude = data.center[1]
            const longitude = data.center[0]
            callback(undefined, {
                location,
                latitude,
                longitude
            });
        }
    })
}

module.exports = getGeocode;