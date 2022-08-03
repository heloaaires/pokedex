const CoachModel = require('../models/coachModel')//usa maiúscula porque é uma classe e não uma variável comum

const createCoach = async (req, res) => {
    try {
        const { name, team, region, age, gender } = req.body

        const newCoach = new CoachModel({
            name, team, region, age, gender
        }) 

        const savedCoach = await newCoach.save()
        res.status(201).json(savedCoach)

    }catch (error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
    //catch recebe error, o console.error mostra o error (recebido)
    // é melhor mandar sempre json ao invés de send por padrão da internet
}

const findAllCoaches = async(req, res) => {
    try {
        const allCoaches = await CoachModel.find()
        res.status(200).json(allCoaches)
    } catch(error){
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const findCoachById = async(req, res) => {
    try {
        const findCoach = await CoachModel.findById(req.params.id)
        res.status(200).json(findCoach)
    } catch(error){
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const findCoachByName = async(req, res) => {
    try {
        const findCoach = await CoachModel.findById(req.params.name)
        res.status(200).json(findCoach)
    } catch(error){
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const updateCoach = async(req, res) => {
    try{
        const { name, team, region, age, gender } = req.body
        const updatedCoach = await CoachModel
        .findByIdAndUpdate(req.params.id,{
            name, team, region, age, gender
        })
        res.status(200).json({message: "Treinador atualizado."})
    }catch(error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const deleteCoach = async(req, res) => {
    try{
        const {id} = req.params
        await CoachModel.findByIdAndDelete(id)
        const message = `O treinador com o ID ${id} foi deletado com sucesso.`
        res.status(200).json({message})
    }catch(error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createCoach,
    findAllCoaches,
    updateCoach,
    deleteCoach,
    findCoachById,
    findCoachByName
}

