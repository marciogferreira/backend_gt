const UserModel = require("../models/UserModel");

class AuthController {

    static userModel = new UserModel();

    login(request, response) {
        const { login, senha } = request.body;
        const dados = AuthController.userModel.login(login, senha);


        // JSONWEBTOKEN
        // CRIPTOGRAFA OS DADOS PARA JWT
        console.log(dados)
        return response.status(200).json(dados);
    }
}

module.exports = AuthController;