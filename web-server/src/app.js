#!/usr/bin/env node
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/weather");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000; // starts on heroku port or localhost:3000

// Define PATHS
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars & views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// ----------- ROUTES -------
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Andrei",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    name: "Andrei",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    name: "Andrei",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send({
      error: "Must provide an address",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error: error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return re.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrei",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrei",
    errorMessage: "Page not found!",
  });
});

// ------------- START -------------
app.listen(port, () => {
  console.log("Server up on PORT 3000");
});
