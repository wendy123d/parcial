const express = require ('express');
const rutas = express.Router();
const EstudiantesModel = require('../models/Estudiantes');

//enpoint traer estudiantes
rutas.get('/getEstudiantes',async (req, res) => {
    try {
        const estudiante = await EstudiantesModel.find();
        res.json(estudiante);
    }catch (error) {
        res.status(500).json({mensaje: error.message});
    }
});
module.exports = rutas;