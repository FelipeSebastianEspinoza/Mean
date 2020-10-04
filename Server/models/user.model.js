const mongoose = require("mongoose");
const Schema = mongoose.Schema;
userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: String,
});
module.exports = mongoose.model("User", userSchema);
