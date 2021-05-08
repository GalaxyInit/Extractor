const express = require("express");
const router = express.Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("./validation");

router.post("/register", async (req, res) => {
  // Lets Validete the data before we make the user available
  // User Needs to Send The Following Data Name,Email,Password in the respectiver order only
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  else res.send("OK");
});

module.exports = router;
