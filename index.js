// Importamos packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// .env CONFIGURACIÖN
require('dotenv').config();

// Arrancamos Express
const app = express();

// Parseamos todo lo que llega para poder leerlo fácil en: request.body
app.use(bodyParser.urlencoded({extended: true}));

// Activamos rutas que pasan por routes y terminan en controller
app.use('/api/usuario', require('./routes/auth'));

// Path Público
const publicPath=path.resolve(__dirname,'public');
app.use(express.static(publicPath));

// Ejecución de escucha de nuestro express en el Puerto que hemos dicho
app.listen(process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Servidor corriendo en el puerto ${port}`);
})