const mongoose = require('mongoose')

const plantsSchema = new mongoose.Schema({
    fotoPath: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        enum: {
            values: ['jpg','png','gif','jpeg','webp'],
            message: "El formato de la foto no es valido"
        },
        required: true
    },
    nombre: {
        type:String,
        required: true
    },
    nombreCientifico: {
        type: String
    },
    Descripccion: {
        type: String,
        required: true
    },
    tipoDeSuelo: {
        type: String,
        enum: {
            values: ['arenoso', 'arcilloso', 'franco'],
            message: "{VALUE} no es valido como tipo de suelo"
        }
    },
    exposicionSolar: {
        type:String,
        enum: {
            values: ['pleno sol', 'sombra parcial'],
            message: "{VALUE} no es valido como exposicion Solar"
        }
    },
    frecuenciaRiego: {
        type: String
    },
    cantidadRiego: {
        type: Number
    },
    temperaturaIdeal: {
        type: Number
    },
    epocaSiembra: {
        type: String
    },
    profundidadSiembra: {
        type: String,
    },
    espaciadoPlantas: {
        type: Number,
    },
    tiempoGerminacion: {
        type: Number,
    },
    tiempoCosecha: {
        type: Number,
    },
    cuidadosPlantas: {
        type: String,
    }
},{
    collection: "plants",
})

module.exports = mongoose.model('', plantsSchema)