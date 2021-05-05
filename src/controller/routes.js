Object.defineProperty(exports, "__esModule", { value: true });

const controller = require('./controller');

module.exports = function (app) {
    app.route('/city/:location').get(controller.getWeather);
    app.route('/zip/:zip_code').get(controller.getWeatherZip);
};