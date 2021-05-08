const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const route = require("./router/router");
app.use(express.json());

// Redirecting the Traffic to Routers
app.use("/api/v1", route);

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
