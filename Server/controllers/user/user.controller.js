const SECRET_KEY = "keysecret85";//el nombre no importa
const User = require("./user.dao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res, next) => {
  const newUser = {
    created_at: new Date(),
    deleted_at: "",
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password),
    type: "1",
    updated_at: "",
    verification: false,
  };
  User.create(newUser, (err, user) => {
    if (err && err.code == 11000)
      return res.status(409).send("Email already exists");

    if (err) return res.status(500).send("Server error");
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    const dataUser = {
      name: user.name,
      email: user.email,
      accessToken: accessToken,
      expiresIn: expiresIn,
    };
    res.send({ dataUser });
  });
};

exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return res.status(500).send("Server error");
    if (!user) {
     res.status(409).send({ message: "Error en los campos" });
    } else {
      const resultPassword = bcrypt.compareSync(
        userData.password,
        user.password
      );
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
          expiresIn: expiresIn,
        });
        const dataUser = {
          name: user.name,
          email: user.email,
          accessToken: accessToken,
          expiresIn: expiresIn,
        };
        res.send({ dataUser });
      } else {
        res.status(409).send({ message: "Error en los campos" });
      }
    }
  });
};

exports.updateUser = (req,res) => {
 
};
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    res.json("message: " + "deleted");
  });
};
