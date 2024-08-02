const CommentModel = require("../models/CommentModel");

class CommentsController {

    async findAll(request, response) {
        const dados = await CommentModel.findAll();
        return response.status(200).json(dados);
    }

    async findId(request, response) {
        const id = request.params.id;
        const dados = await CommentModel.findByPk(id);
        return response.status(200).json(dados);
    }

    async create(request, response) {
        const dados = request.body;
        const retorno = await CommentModel.create(dados);
        return response.json({
            message: 'Comentário criado com sucesso!',
            data: retorno
        });
    }

    async update(request, response) {
        const id = request.params.id;
        const dados = request.body;
        
        const retorno = CommentModel.update(dados, { where: { id: id } });
        return response.json({
            message: 'Comentário atualizado com sucesso!',
            data: retorno
        });
    }

    async delete(request, response) {
        const id = request.params.id;
        await CommentModel.destroy({ where: { id: id} });
        return response.json({
            message: 'Comentário removido com sucesso!'
        });
    }
    
}

module.exports = CommentsController;