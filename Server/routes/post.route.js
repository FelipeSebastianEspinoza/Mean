const Posts = require("../controllers/posts/post.controller");
module.exports = (router) => {
  router.get("/post", Posts.getPost);
  
};
