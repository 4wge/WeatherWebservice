Object.defineProperty(exports, "__esModule", { value: true });
const weather = require('../service/weather');
const weather_zip = require('../service/weatherZip')


const controllers = {
    getWeather: function (req, res) {
        weather.find(req, res);
    },
    getWeatherZip: function (req, res) {
        weather_zip.find(req, res);
    }
};
module.exports = controllers;
