const mongoose = require('mongoose')

const prestamosSchema = new mongoose.Schema({
    idReceptor: {
        type: Schema.ObjectId, 
        ref: "receptor"
    },
    idPlanta: {
        type: Schema.ObjectId, 
        ref: "plants"
    },
    numeroSemillas: {
        type: String,
        required: true,
    },
    fechaPrestamo: {
        type: Date,
    },
    devuelto: {
        type: Boolean,
        default: false
    }
},{
    collection: "prestamos"
})

module.exports = mongoose.model('', prestamosSchema)