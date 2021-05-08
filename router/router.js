const express = require("express");
const router = express.Router();
const register = require("./register");

// Route for Register
router.post("/register", register);

//restricting any other url
router.all("/*", (req, res) => {
  res.sendStatus(400);
});

//Exporting the Routes
module.exports = router;
