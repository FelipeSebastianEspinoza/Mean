const mongoose = require("mongoose");
const Schema = mongoose.Schema;
postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
});

module.exports = userSchema;
