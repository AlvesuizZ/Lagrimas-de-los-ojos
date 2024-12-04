const mongoose = require('mongoose');

const receptorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    telefono: {
        type: String,
        unique: true,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    relaccionCentro: {
        type: String,
        enum: {
            values: ['estudiante', 'profesor', 'visitante'],
            message: '{VALUE} no es valido'
        },
        required: true
    }
},{
    collection: "receptor"
})

module.exports = mongoose.model('', receptorSchema);