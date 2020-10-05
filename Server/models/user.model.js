const mongoose = require("mongoose");
const Schema = mongoose.Schema;
userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: String,
  created_at:Date,
  updated_at:Date,
  deleted_at:Date,
  verification:Boolean,
});
module.exports = mongoose.model("User", userSchema);
