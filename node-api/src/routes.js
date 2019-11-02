const express = require('express');
const routes  = express.Router();

//Estados
const EstadoController = require('./controllers/EstadoController');
routes.get('/estados',EstadoController.index);
routes.post('/estados', EstadoController.store);
routes.get('/estados/:id', EstadoController.show);
routes.put('/estados/:id', EstadoController.update);
routes.delete('/estados/:id', EstadoController.delete);
//------------

//Cargos
const CargoController = require('./controllers/CargoController');
routes.get('/cargos',CargoController.index);
routes.post('/cargos', CargoController.store);
routes.get('/cargos/:id', CargoController.show);
routes.put('/cargos/:id', CargoController.update);
routes.delete('/cargos/:id', CargoController.delete);
//------------

module.exports = routes;