const express = require("express");
const router = express.Router();
const { registerValidation } = require("./validation");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

router.post("/api/v1/register", async (req, res) => {
  // Validating the input
  // Required the NAME, EMAIL, PASSWORD
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the user is already registered
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email Already Exists");

  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Created A New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user.name, message: "Thanks For Registering" });
  } catch (err) {
    res.send("Error Is Coming").status(400);
    console.log(err);
  }
});
module.exports = router;
