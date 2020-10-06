const Users = require("../controllers/user/user.controller");
module.exports = (router) => {
  router.post("/register", Users.createUser);
  router.post("/login", Users.loginUser);
};
