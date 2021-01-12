const Pedido = require("../models/Pedido");

module.exports = {
    //Função que vai ser executada pela rota
    async listarPedidos (req, res) {

        try {

            const filtro = req.query;

            if (Object.keys(filtro).length !==0) {

                if(!filtro.nome) filtro.nome = "";
                if(!filtro.produto) filtro.produto = "";

                const pedidos = await Pedido.findAll({
                    where: { 
                        nome: { 
                            [Op.like]: `%${filtro.nome}%`
                        },
                        produto: {
                            [Op.like]: `%${filtro.produto}%`
                        }
                    }
                });

                res.send(pedidos);

            } else {
                const pedidos = await Pedido.findAll();
                res.send(pedidos)

            }
            
        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }
    },

    async adicionarPedidos (req, res) {
        const { nome, produto, quantidade } = req.body;

        try {

                let pedido = await Pedido.create({ nome, produto, quantidade });

            //retornar resposta de sucesso
            res.status(201).send({pedido});
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

}
