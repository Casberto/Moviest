const UserModel = require('../models/userModel');

exports.getAllUser = async (req, res) => {
  const user = await UserModel.findAll();
  return res.status(200).json(user);
};

exports.getOneUser = async (req, res) => {
  const { index } = req.params;
  const user = await UserModel.findByPk(index);
  if(user){
    return res.status(200).json(user);
  }else{
    return res.status(404).json();
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  const user = await UserModel.create({name, email, password, isAdmin});

  return res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const { index } = req.params;
  const { name, email, password, isAdmin } = req.body;
  const user = await UserModel.findByPk(index);
  
  user.name = name;
  user.email = email;
  user.password = password;
  user.isAdmin = isAdmin;

  await user.save();
  return res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const { index } = req.params;
  const user = await UserModel.findByPk(index);
  await user.destroy();
  return res.status(204).json();
};
