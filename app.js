const express = require("express"); // Package do express
const app = express(); // Usando a função express() vamos criar o app, ou seja, o nosso server
const { connection } = require("./connection/connection"); // É a conexão feita com a base de dados
const path = require("path"); // Package que lida com caminhos de diretórios

app.set("views", "./views/pages");
//View engine setup
app.set("view engine", "ejs"); //setar que a engine será o ejs

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Models
const movieModel = require("./models/movieModel"); //modelo que permite interagir com a tabela movie
const Connection = require("./connection/connection");
Connection.sync();

//Routes
const movieRouter = require("./routes/movieRouter");
const viewRoute = require("./routes/viewRouter");
const { createMovie } = require("./controllers/movieController");

app.use("/registerMovie", movieRouter);
app.use("/", viewRoute);
app.use("/index", viewRoute);

module.exports = app;
