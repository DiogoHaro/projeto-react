const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando o DB
// mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true});
mongoose.connect("mongodb+srv://trabalho:123@cluster0-frzyp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true});

// Iniciando models
requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);
