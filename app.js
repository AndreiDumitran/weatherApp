const geocode = require("./utils/geocode");
const forecast = require("./utils/weather");

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location } = {}) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log("Forecast", forecastData);
  });
});
