Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const routes = require('./controller/routes');

routes(app);

app.listen(port, function () {
    console.log('Server started on port ', port);
});