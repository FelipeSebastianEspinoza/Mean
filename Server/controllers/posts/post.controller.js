const Post = require("./post.dao");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "keysecret85"; //el nombre no importa

exports.getPost = (req, res, next) => {
  Post.find({}, (err, post) => {
    if (err) return res.status(500).send("Server error");
    const dataPost = {
      title: post.title,
      image: post.image,
    };
    posts = [
      {
        title:
          "So I heard you all like cats as well as HD pictures, so GO HD CAT GO!!!",
        image: "https://i.imgur.com/zzbmYBi.jpg",
      },
      {
        title: "<THEME SORTED HD WALLPAPER> Cat",
        image: "https://i.imgur.com/S91MB4j.jpg",
      },
      {
        title: "HD cat tax",
        image: "https://i.imgur.com/Z9PYxCA.jpeg",
      },
      {
        title: "My cat in HD, now move on",
        image: "https://i.imgur.com/JNNpWhG.jpeg",
      },
      {
        title: "Super cute cat HD",
        image: "https://i.imgur.com/JuPffYA.jpg",
      },
      {
        title: "Confused cat HD",
        image: "https://i.imgur.com/8VPtVVF.jpg",
      },
      {
        title: "cat hd",
        image: "https://i.imgur.com/VbeIVB5.jpeg",
      },
    ];
    //  res.send({ dataPost });

    res.send(posts );
  });
};
