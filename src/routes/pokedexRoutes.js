const controller = require('../controllers/pokedexController')
const express = require('express')


const router = express.Router()

router.get('/pokedex', controller.findAllPokemons)
router.get('/pokedex/:id', controller.findPokemonById)
router.post('/pokedex', controller.createPokemon)
router.patch('/pokedex/:id', controller.updatePokemonById)
router.delete('/pokedex/:id', controller.deletePokemonById)

module.exports = router