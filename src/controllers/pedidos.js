const Pedido = require("../models/Pedido");

module.exports = {
    //Função que vai ser executada pela rota
    async listarPedidos (req, res) {

        try {
            const pedidos = await Pedido.findAll();
    
            res.send(pedidos);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }
    },
    async buscarCliente (req, res) {
        //Recuperar o id do aluno
        const alunoId = req.params.id;

        try {
            let aluno = await Aluno.findByPk(alunoId, {
                attributes: ["id", "ra", "nome", "email"]
            });
            
            //se aluno não encontrado, retornar not found
            if(!aluno)
            return res.status(404).send({ erro: "Aluno não encontrado" });

            //se aluno encontrado, retornar aluno
            delete aluno.senha;

             res.send(aluno);
            
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