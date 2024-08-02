const UserModel = require("../models/UserModel");

class UserController {

    async findAll(request, response) {
        const dados = await UserModel.findAll();
        return response.status(200).json(dados)    
    }

    async findId(request, response) {
        const id = request.params.id;
        const dados = await UserModel.findByPk(id);
        return response.status(200).json(dados)
    }

    async create(request, response) {
        const dados = request.body;
        const user = await UserModel.create(dados);
        return response.json({
            message: 'Usuário criado com sucesso!',
            data: user
        });
    }

    async update(request, response) {
        const id = request.params.id;
        const dados = request.body;
        await UserModel.update(dados, { where: { id } });
        return response.json({
            message: 'Usuário atualizado com sucesso!'
        })
    }

    async delete(request, response) {
        const id = request.params.id;
        await UserModel.destroy({ where: { id } });
        return response.json({
            message: 'Usuário removido com sucesso!'
        })
    }
}

module.exports = UserController;