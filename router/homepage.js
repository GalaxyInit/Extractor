const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/user");

router.get("/:name", async (req, res) => {
  // add verify, in between async and ,
  // console.log(name);
  // res.send(req.user._id);
  // const id = req.user._id;
  // console.log(id);
  // await User.findById(id, (err, data) => {
  //   res.send(data.name).status(200);
  // });
  res.send("Welcome " + req.params.name);
});

module.exports = router;
