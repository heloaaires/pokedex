const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
    
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name:{
        type: String, //representa texto
        required: true, // digo que o campo é obrigatório
        unique: true //só aceita 1 cadastro no sistema
    },

    team: String,

    region:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    gender:{
        type: String,
        default: "Não informado."
    }

}, {timestamps:true})

const Model = mongoose.model('coach', coachSchema)
module.exports = Model
