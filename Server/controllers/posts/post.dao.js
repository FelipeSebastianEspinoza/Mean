const mongoose = require("mongoose");
const postSchema = require("../../models/post.model");

postSchema.statics = {
  create: function (data, cb) {
    const post = new this(data);
    post.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  },
};
const postModel = mongoose.model("Posts", postSchema);
module.exports = postModel;
