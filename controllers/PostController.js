const PostModel = require("../models/PostModel");

class PostController {

    static postModel = new PostModel();

    findAll(request, response) {
        const dados = PostController.postModel.findAll();
        return response.status(200).json(dados);
    }

    findId(request, response) {
        const id = request.params.id;
        const dados = PostController.postModel.findId(id);
        return response.status(200).json(dados);
    }

    create(request, response) {
        const dados = request.body;
        const retorno = PostController.postModel.create(dados);
        return response.json({
            message: 'Post criado com sucesso!',
            data: retorno
        });
    }

    update(request, response) {
        const id = request.params.id;
        const dados = request.body;
        
        const retorno = PostController.postModel.update(id, dados);
        return response.json({
            message: 'Post atualizado com sucesso!',
            data: retorno
        });
    }

    delete(request, response) {
        const id = request.params.id;
        
        PostController.postModel.delete(id);
        return response.json({
            message: 'Post removido com sucesso!'
        });
    }
    
}

module.exports = PostController;