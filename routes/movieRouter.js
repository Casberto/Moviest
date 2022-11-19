const router = require("express").Router();
const MovieController = require("../controllers/movieController");

//retorna todos os filmes
router.get("/", MovieController.getAllMovie); 

//retorna um filme
router.get("/:index", MovieController.getOneMovie);

//criar um novo filme
router.delete("/:index", MovieController.deleteMovie);

router.post("/registerMovie", MovieController.createMovie);

//atualizar um filme
router.put("/:index", MovieController.updateMovie);

//excluir um filme

module.exports = router;
