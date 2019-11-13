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

//Cidades
const CidadeController = require('./controllers/CidadeController');
routes.get('/cidades',CidadeController.index);
routes.post('/cidades', CidadeController.store);
routes.get('/cidades/:id', CidadeController.show);
routes.put('/cidades/:id', CidadeController.update);
routes.delete('/cidades/:id', CidadeController.delete);
//------------

//Cidades
const FuncionarioController = require('./controllers/FuncionarioController');
routes.get('/funcionarios',FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);
routes.get('/funcionarios/:id', FuncionarioController.show);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);
//------------

module.exports = routes;