const express = require("express");
const router = express.Router();
const { loginValidation } = require("./validation");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login
router.post("/api/v1/login", async (req, res) => {
  // Lets Validete the data before we make the user available
  // This API need Email, Password in the BODY
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("You Don't Have the Account With Us");
  //Password is Correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Credentials");

  //Creating and assiging the token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res.header("auth-token", token);

  // Logging the user
  await User.findById(user._id, (err, data) => {
    var name = data.name;
    res.redirect("/:" + name);
  });
  // res.send("Logged In");
});

// Exporting the Routes
module.exports = router;
