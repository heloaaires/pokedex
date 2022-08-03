const PokedexModel = require('../models/pokedexModel')
const CoachModel = require('../models/coachModel')

const createPokemon = async (req, res) => {
    try {
        const { coachId, name, type, abilities, description, infos } = req.body

        //if (!coachId) {
            //return res.status(400).json({ message: 'É obrigatório o ID do treinador.' })
        //}

        //const findCoach = await CoachModel.findById(coachId)

       // if (!findCoach) {
            //return res.status(404).json({ message: 'Treinador não foi encontrado.' })
        //}

        const newPokemon = new PokedexModel({
         name, type, abilities, description, infos
        })

        const savedPokemon = await newPokemon.save()
        res.status(200).json(savedPokemon)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findAllPokemons = async (req, res) => {
    try {
        const allPokemons = await PokedexModel.find().populate('coach')
        res.status(200).json(allPokemons)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findPokemonById = async (res, req) => {
    try {
        const findPokemon = await PokedexModel
            .findById(req.params.id).populate('coach')

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updatePokemonById = async (req, res) => {
    try {
        const { id } = req.params
        const { coach, name } = req.body

        const findPokemon = await PokedexModel.findById(id)

        if (findPokemon == null) {
            return res.status(404).json({ message: 'Pokemon não encontrado.' })
        }

        if (coachId) {
            const findCoach = await CoachModel.findById(coachId)
            if (findCoach == null) {
                return res.status(404).json({ message: 'Treinador não foi encontrado.' })
            }
        }
    
        findPokemon.name = name || findPokemon.name
        findPokemon.type = type || findPokemon.type
        findPokemon.abilities = abilities || findPokemon.abilities
        findPokemon.coach = coachId || findPokemon.coach
        
        const savedPokemon = await findPokemon.save()
        res.status(200).json(savedPokemon)

    }catch(error){
        console.error(error)
        res.status(500).json({ message: error.message})
    }    
}

const deletePokemonById = async (req, res) => {
    try {
        const { id } = req.params
        const findPokemon = await PokedexModel.findById(id)

        if(findPokemon == null){
            return res.status(404).json({ message: `O pokemon com o id# ${id} não foi encontrado.`})
        }

        await findPokemon.remove()
        res.status(200).json({ message: `O pokemon ${findPokemon.name} foi deletado com sucesso.`})
    }catch(error){
        res.status(500).json({ message: error.message})
    }
}

module.exports = {
    createPokemon,
    findAllPokemons,
    findPokemonById,
    updatePokemonById, 
    deletePokemonById
}