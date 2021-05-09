const express = require("express");
const router = express.Router();
const register = require("./register");
const login = require("./login");
const homepage = require("./homepage");

// Diffrent Routes
router.get("/", (req, res) => {
  res.render("index");
});

// Route For Login
router.get("/login", (req, res) => {
  res.render("login");
});

// Router For Register
router.get("/register", (req, res) => {
  res.render("register");
});

// #TODO Need To Check On It In Future
router.get("/:name", homepage);

// API's
// Route for Register
router.post("/api/v1/register", register);
// Route for Login
router.post("/api/v1/login", login);

//restricting any other url
router.all("*", (req, res) => {
  res.sendStatus(400);
});

//Exporting the Routes
module.exports = router;
