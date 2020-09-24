const mongoose = require('mongoose');

const Movie = mongoose.Schema({
  title: {
    type: String,
  },
  releaseYear: {
    type: Number,
  },
  format: {
    type: String,
  },
  stars: {
    type: String,
  },
});

module.exports = mongoose.model('Movie', Movie)