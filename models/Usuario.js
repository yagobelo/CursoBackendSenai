const mongoose = require('mongoose');

const Usuario = mongoose.model("Usuario", {
  nome: String,
  login: String,
  senha: String
});

module.exports = Usuario