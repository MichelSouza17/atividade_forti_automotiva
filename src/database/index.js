const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//imports dos models
const Pedido = require("../models/Pedido");

const conexao = new Sequelize(dbConfig);

//inicializa os models
Pedido.init(conexao);

//inicializa os relacionamentos
Pedido.associate(conexao.models);