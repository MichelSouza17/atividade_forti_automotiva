const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
    //aqui inicializamos nossos campos da tabela
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                produto:  DataTypes.STRING,
                quantidade: DataTypes.INTEGER
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){

    }
}

module.exports = Pedido;