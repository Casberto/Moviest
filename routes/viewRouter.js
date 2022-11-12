const router = require("express").Router();
const MovieController = require("../controllers/movieController");
const MovieModel = require("../models/movieModel");

router.get("/", async (req, res, next) => {
    let movies = {};
  // 1) Obter dados
  try{
    movies =  (await MovieModel.findAll()).splice(0, 10);
  }catch(err){
    console.log('FUDEU' + err);
  }
  // 2) Passar dados

  // 3) Exibir dados
  res.render("index", { movies });
});

router.get("/registerMovie", (req, res) => {
  res.render("registerMovie");
});


module.exports = router;
