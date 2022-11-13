const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');
const MovieModel = require('../models/movieModel');

exports.getAllMovie = async (req, res) => {
  const movie = await MovieModel.findAll();
  return res.status(200).json(movie);
};

exports.getOneMovie = async (req, res) => {
  const { index } = req.params;
  const movie = await MovieModel.findByPk(index);
  if(movie){
    return res.status(200).json(movie);
  }else{
    return res.status(404).json();
  }
};

exports.createMovie = async (req, res) => {
  const { name, description, director, actor, rate, year, month } = req.body;
  const movie = await MovieModel.create({name, description, director, actor, rate, year, month});

  return res.status(201).json(movie);
};

exports.updateMovie = async (req, res) => {
  const { index } = req.params;
  const { name, description, director, actor, rate, year, month } = req.body;
  const movie = await MovieModel.findByPk(index);

  movie.name = name;
  movie.description = description;
  movie.director = director;
  movie.actor = actor;
  movie.rate = rate;
  movie.year = year;
  movie.month = month;

  await movie.save();
  return res.status(200).json(movie);
};

exports.deleteMovie = async (req, res) => {
  const { index } = req.params;
  const movie = await MovieModel.findByPk(index);
  await movie.destroy();
  return res.status(204).json();
};
