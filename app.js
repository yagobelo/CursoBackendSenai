require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

// Config Bodyparser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Rotas da API
const usuariosRoutes = require("./routes/usuariosRoutes");
app.use("/usuario", usuariosRoutes);

// Rota Inicial
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Conectar com o banco de dados e com o servidor
const PORT = process.env.PORT || 8080;
const URI_DB = process.env.URI_DB;

mongoose
  .connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");
    app.listen(PORT, () => {
      console.log("Servidor conectado com sucesso!");
    });
  })
  .catch((err) => {
    console.log("erro ao conectar com o banco de dados: " + err);
  });
