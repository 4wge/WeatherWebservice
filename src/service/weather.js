Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();

const request = require('request');
const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
const metricUnits = process.env.METRIC;


const weather = {
    find: function (req, res) {

        const location = req.params.location;
        const weatherUrl = apiUrl + '?q=' + location + metricUnits + apiKey;
        request(weatherUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                const jsonResponse = JSON.parse(body);
                const temp = jsonResponse.main.temp;
                const temp_max = jsonResponse.main.temp_max;
                const temp_min = jsonResponse.main.temp_min;
                const weather_desc = jsonResponse.weather.description;
                console.log('Current temperature in ' + location + ': ' + temp + '°C');
                console.log('Temperature min: ' + temp_min + '°C and max: ' + temp_max + '°C');
                console.log('the weather is: ' + weather_desc);
                res.json({city: location, temp: temp, temp_min: temp_min, temp_max: temp_max});
            } else {
                console.log(response.statusCode + body);
                res.send({temp: -1});
            }
        });
    }
};
module.exports = weather;
