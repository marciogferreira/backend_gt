class UserModel {

    listaUsuarios = [
        {
            id: 1,
            nome: 'João',
            email: 'joao@example.com',
            senha: '123123'
        }
    ]

    login(login, senha) {
        return this.listaUsuarios.find(user => user.email === login && user.senha === senha);
    }

    findAll() {
        return this.listaUsuarios;
    }

    findId(id) {
        return this.listaUsuarios.find(user => user.id === id);
    }

    create(data) {
        data.id = this.listaUsuarios.length + 1;
        this.listaUsuarios.push(data);
        return data;
    }
    
    update(id, data) {
        const userIndex = this.listaUsuarios.findIndex(user => user.id === id);
        this.listaUsuarios[userIndex] = data;
        return data;
    }

    delete(id) {
        const userIndex = this.listaUsuarios.findIndex(user => user.id === id);
        this.listaUsuarios.splice(userIndex, 1);
        return true;
    }
}


module.exports = UserModel;