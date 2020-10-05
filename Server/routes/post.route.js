const express = require("express");
const Post = require("../models/post.model");
const router = express.Router();

router.get("/", (req, res) => {
  Post.find({}, (err, posts) => {
    res.json(posts);
  });
});
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    private: req.body.private,
    created_at: new Date(),
    updated_at: "",
    deleted_at: "",
    user: req.body.user,
  });
  post
    .save()
    .then((result) => {
      res.json(post);
      console.log(post);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
