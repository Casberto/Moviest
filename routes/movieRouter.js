const router = require("express").Router();
const MovieController = require("../controllers/movieController");

//retorna todos os filmes
router.get("/", MovieController.getAllMovie);

//retorna um filme
router.get("/:index", MovieController.getOneMovie);

//criar um novo filme

router.post("/registerMovie", MovieController.createMovie);

//atualizar um filme
router.put("/:index", MovieController.updateMovie);

//excluir um filme
router.delete("/", MovieController.deleteMovie);

module.exports = router;
