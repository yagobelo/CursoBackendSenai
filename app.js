const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Rotas

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Conectar com o banco de dados e com o servidor
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://yago:dKQdYMkpowfdu2dO@ac-pn89l6z-shard-00-00.h9ghu3h.mongodb.net:27017,ac-pn89l6z-shard-00-01.h9ghu3h.mongodb.net:27017,ac-pn89l6z-shard-00-02.h9ghu3h.mongodb.net:27017/bancoCursoSenai?ssl=true&replicaSet=atlas-2v89wv-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => {
  console.log('Banco de dados conectado com sucesso!')
  app.listen(PORT, () => {
    console.log('Servidor conectado com sucesso!')
  })
}).catch((err) => {
  console.log('erro ao conectar com o banco de dados: ' + err)
});