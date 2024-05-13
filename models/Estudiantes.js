const mongoose = require('mongoose')
const estudianteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    discapacidad: Boolean
});

const EstudiantesModel = mongoose.model('Estudiante', estudianteSchema, 'estudiante' );

module.exports = EstudiantesModel;