const mongoose = require('mongoose')

const comentariosSchema = new mongoose.Schema({
    idPlanta: {type: Schema.ObjectId, ref: "plants"},
    estado: {
        type: String,
        enum: {
            values: ['aceptado', 'denegado', 'en espera'],
            message: "{VALUE} no es valido"
        },
    },
    mensaje: {
        type: String
    },
    hora: {
        type: Date,
    },
    autor: {
        type: String,
        default: "Invitado"
    }
},{
    collection: "comentarios"
})

module.exports = mongoose.model('', comentariosSchema)