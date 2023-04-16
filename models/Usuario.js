const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
  nome: String,
  login: String,
  senha: String
});

module.exports = mongoose.model('usuarios', Usuario);

// usuarios = nome da collection
// Usuario = nome do Schema