const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  count: Number,
  quiz: Array,
});

module.exports = mongoose.model("users", productScheme);
