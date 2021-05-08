const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/user");

router.get("/", verify, async (req, res) => {
  // console.log(name);
  // res.send(req.user._id);
  const id = req.user._id;
  // console.log(id);
  await User.findById(id, (err, data) => {
    res.send(data.name).status(200);
  });
});

module.exports = router;
