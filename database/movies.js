const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema({
  imageurl: Number,
  title: String,
  actor: String,
});

const MoviesModel = mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;
