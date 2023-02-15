const express = require('express');
const router = express.Router();

const ApiService = require('../services/characters.service')

const charactersApi = new ApiService()



router.get("/listado", (req, res, next) => {

  charactersApi
    .getAllCharacters()
    .then(response => res.render('characters/list', { characters: response.data }))
    .catch(err => next(err))
})


router.get("/detalles/:character_id", (req, res, next) => {

  const { character_id } = req.params

  charactersApi
    .getOneCharacter(character_id)
    .then(response => res.render('characters/details', { character: response.data }))
    .catch(err => next(err))
})



router.get("/crear", (req, res, next) => {
  res.render('characters/create')
})

router.post("/crear", (req, res, next) => {

  const { name, weapon, occupation } = req.body

  charactersApi
    .saveCharacter({ name, weapon, occupation })
    .then(() => res.redirect('/personajes/listado'))
    .catch(err => next(err))
})




router.get("/editar/:character_id", (req, res, next) => {

  const { character_id } = req.params

  charactersApi
    .getOneCharacter(character_id)
    .then(response => res.render('characters/edit', { character: response.data }))
    .catch(err => next(err))
})

router.post("/editar/:character_id", (req, res, next) => {

  const { character_id } = req.params
  const { name, weapon, occupation } = req.body

  charactersApi
    .editCharacter(character_id, { name, weapon, occupation })
    .then(() => res.redirect('/personajes/listado'))
    .catch(err => next(err))
})


module.exports = router;
