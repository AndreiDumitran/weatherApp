const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=b2ac74b65923cece89b554d5cb948cf6&query=37.8267,-122.4233";

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
