const express = require("express");
const router = express.Router();
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});
module.exports = router;
