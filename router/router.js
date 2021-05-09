const express = require("express");
const router = express.Router();
const register = require("./register");
const login = require("./login");
const homepage = require("./homepage");

router.get("/", (req, res) => {
  res.send("Hi Unknown");
});
router.get("/:name", homepage);
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
