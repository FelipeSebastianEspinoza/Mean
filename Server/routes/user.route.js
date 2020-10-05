const express = require("express");
const User = require("../models/user.model");
const router = express.Router();



router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});
router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    type: "1",
    created_at: new Date(),
    updated_at: "",
    deleted_at: "",
    verification: false,
  });
  user
    .save()
    .then((result) => {
      res.json(user);
      console.log(user);
    })
    .catch((err) => console.log(err));
});
router.put("/:id", async (req, res) => {
  user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  // user.type = req.body.type;
  user.updated_at = new Date();
  user
    .save()
    .then((result) => {
      res.json(user);
      console.log(user);
    })
    .catch((err) => console.log(err));
});
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    res.json("message: " + "deleted");
  });
});
module.exports = router;
