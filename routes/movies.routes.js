const router = require("express").Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/movies.routes.js and routes/movies.routes.js

// all your routes here
router.get("/movies", (req, res, next) => {
  Movie.find().then((allmovies) => {
    res.render("movies/movies", { movies: allmovies });
  });
});

router.get("/movies/create", (req, res) => {
  Celebrity.find().then((allCelebrities) => {
    res.render("movies/new-movie", { celebs: allCelebrities });
  });
});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast })
    .then((createdMovie) => {
      console.log("Movie Created", createdMovie.title);
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render("/movies/new-movie");
    });
});

module.exports = router;
