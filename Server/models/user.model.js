const mongoose = require("mongoose");
const Schema = mongoose.Schema;
userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  type: String,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
  verification: Boolean,
});

module.exports = userSchema;
