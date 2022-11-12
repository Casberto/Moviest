const router = require("express").Router();
const UserController = require('../controllers/userController');

//retorna todos os usuarios
router.get('/', UserController.getAllUser);

//retorna um usuario
router.get('/:index', UserController.getOneUser);

//criar um novo usuario
router.post('/', UserController.createUser);

//atualizar um usuario
router.put('/:index',  UserController.updateUser);

//excluir um usuario
router.delete('/:index', UserController.deleteUser);

module.exports = router;