const express = require("express");

const pedidoController = require("./controllers/pedidos");

const routes = express.Router();

//Configuração da rota
routes.get("/pedidos", pedidoController.listarPedidos);

routes.post("/pedidos", pedidoController.adicionarPedidos);

module.exports = routes;