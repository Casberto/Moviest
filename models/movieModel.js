const { DataTypes } = require("sequelize");
const connection = require("../connection/connection");

const movie = connection.define("movies", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  launch: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  poster: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = movie;
