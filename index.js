const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const estudianteRutas = require('./rutas/estudianteRutas');

//conf envaironment
const PORT = process.env.PORT || 5555;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

mongoose.connect(MONGO_URI).then(
    () => {
        console.log('conexion exitosa');
        app.listen(PORT, () => {console.log("servidor corriendo en el puerto" + PORT)})
    }
).catch(error => console.log('error en la conexion', error));

//utilizar las rutas de estudiantes

app.use('/estudiante',estudianteRutas);