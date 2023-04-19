const router = require('express').Router()
const Usuario = require('../models/Usuario')

// Criar usuario ---------------------------------------------------------------------------------------------------------------------------
router.post("/", async (req, res) => {
  const {nome, login, senha} = req.body

  const usuario = {
    nome,
    login,
    senha
  }

  try {
    await Usuario.create(usuario)
    res.json({message:"Usuario criado com sucesso!"})
  } catch(error) {
    res.status(404).json({error: error})
  }
})

// Ler usuario ------------------------------------------------------------------------------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const usuario = await Usuario.find()
    res.json(usuario)
  }
  catch(error) {
    res.json({error: error})
  }
})

// ---------------------------------------------------------------- Procurar unico usuario
router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const usuario = await Usuario.find({_id: id})
    res.json(usuario)
  } catch(error) {
    res.json({error: error})
  }
})

// Atualizar usuario ------------------------------------------------------------------------------------------------------------------------
router.patch("/:id", async (req, res) => {
  const id = req.params.id
  const {nome, login, senha} = req.body

  const usuario = {
    nome,
    login,
    senha
  }

  try {
    const attUsuario = await Usuario.updateOne({_id: id}, usuario)
    res.json(usuario)
  } catch(error) {
    res.json({error: error})
  }
})

// Deletar usuario -------------------------------------------------------------------------------------------------------------------------
router.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const usuario = await Usuario.deleteOne({_id: id})
    res.json("Usuario deletado com sucesso!")
  } catch(error) {
    res.json({error: error})
  }
})

module.exports = router