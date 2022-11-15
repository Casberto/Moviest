const router = require("express").Router();
const MovieController = require("../controllers/movieController");
const MovieModel = require("../models/movieModel");

router.get("/", async (req, res, next) => {
  let movies = {};
  try {
    movies = (await MovieModel.findAll()).splice(0, 10);
  } catch (err) {
    console.log("FUDEU" + err);
  }
  res.render("index", { movies });
});

router.get("/registerMovie", async (req, res, next) => {
  res.render("registerMovie");
});

module.exports = router;
