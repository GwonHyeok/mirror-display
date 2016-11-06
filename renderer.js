// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const kmaJs = require('kma-js');
const kmaWeather = kmaJs.Weather;

kmaWeather.townWeather('37.49543016888596', '127.03781811461468')
    .then(data => console.log(data));
