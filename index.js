const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const route = require("./router/router");
var bodyParser = require("body-parser");

// Uses to parse json
app.use(express.json()); //  Enable it For API
app.use(bodyParser.urlencoded({ extended: true })); // Keep it for Form data to pass

// Setting the Pug
app.set("view engine", "pug");
app.use(express.static("public"));

// Redirecting the Traffic to Routers
app.use("/", route);

//connect to DB
try {
  mongoose.connect(
    process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connect")
  );
} catch (error) {
  console.error(error);
}

app.listen(80, () => {
  console.log("Started on http://localhost");
});
