const UserModel = require("../models/UserModel");

class UserController {

    static userModel = new UserModel();
    constructor() {}


    findAll(request, response) {
        const dados = UserController.userModel.findAll();
        return response.status(200).json(dados)    
    }

    findId(request, response) {
        const id = request.params.id;
        const dados = UserController.userModel.findId(id);
        return response.status(200).json(dados)
    }

    create(request, response) {

        const dados = request.body;
        const retorno = UserController.userModel.create(dados);

        return response.json({
            message: 'Usuário criado com sucesso!',
            data: retorno
        })
    }

    update(request, response) {
        const id = request.params.id;
        const dados = request.body;
        UserController.userModel.update(id, dados);
        return response.json({
            message: 'Usuário atualizado com sucesso!'
        })
    }

    delete(request, response) {
        const id = request.params.id;
        UserController.userModel.delete(id);
        return response.json({
            message: 'Usuário removido com sucesso!'
        })
    }
}

module.exports = UserController;