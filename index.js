//MAIN BACKEND FILE(day 29 to 35)

const db = require("./database/movies");

const MoviesModel = require("./database/movies");
const UsersModel = require("./database/users");
require("dotenv").config();
const express = require("express");
const { request, json } = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
var mongoose = require("mongoose");
//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://aishuv353:aishu637408@cluster0.ix5kg.mongodb.net/book-my-show?retryWrites=true&w=majority&ssl=true";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONNECTION ESTABLISHED"))
  .catch((err) => console.log(err));

//https://localhost:5000/
app.get("/", (req, res) => {
  return res.json({ WELCOME: `to my Backend Software for the BOOKMYSHOW` });
});

/*
Route           /movies
Description     Get all the movies
Access          Public
Parameter       NONE
Methods         GET
*/

//https://localhost:5000/movies
app.get("/movies", async (req, res) => {
  const getAllMovies = await MoviesModel.find();
  return res.json(getAllMovies);
});

/*
Route           /movies/:id
Description     Get a single movie
Access          Public
Parameter       NONE
Methods         GET
*/

//https://localhost:5000/movie/:id
app.get("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const getMovie = await MoviesModel.findOne({ _id: id });
  return res.json(getMovie);
});

/*
Route           /user-register
Description     Post a single user details in users collection
Access          Public
Parameter       NONE
Methods         GET
*/

//https://localhost:5000/user-register
app.post("/user-register", async (req, res) => {
  const addNewUser = await UsersModel.create(req.body);
  return res.json({ userAdded: addNewUser, message: "User was added !!!" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("My Express app is running");
});
