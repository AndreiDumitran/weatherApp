const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

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
  res.send("Weather page!");
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
app.listen(3000, () => {
  console.log("Server up on PORT 3000");
});
