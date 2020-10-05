const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.model("User");

postSchema = new Schema({
  title: String,
  description: String,
  private: Boolean,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
  user:{
      type: Schema.ObjectId, ref:"User"
  }
});
module.exports = mongoose.model("Post", postSchema);
