// models/Dream.js
const mongoose = require('mongoose');

const dreamSchema = new mongoose.Schema({
  title: String,
  description: String,
  mood: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Dream', dreamSchema);
