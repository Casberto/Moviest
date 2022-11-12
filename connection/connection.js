const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("moviest", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("You have connection!");
  })
  .catch((error) => {
    console.error("You have no connection!", error);
  });

module.exports = sequelize;
