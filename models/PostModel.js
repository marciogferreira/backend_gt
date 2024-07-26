class PostModel {

    listaPosts = [
        {
            id: 1,
            titulo: 'Macbook',
            conteudo: 'Texto aqui',
            user_id: 1
        }
    ]

    findAll() {
        return this.listaPosts;
    }

    findId(id) {
        return this.listaPosts.find(data => data.id === id);
    }

    create(data) {
        // validar
        data.id = this.listaPosts.length + 1;
        this.listaPosts.push(data);
        return data;
    }
    
    update(id, data) {
        const userIndex = this.listaPosts.findIndex(data => data.id === id);
        this.listaPosts[userIndex] = data;
        return data;
    }

    delete(id) {
        const userIndex = this.listaPosts.findIndex(data => data.id === id);
        this.listaPosts.splice(userIndex, 1);
        return true;
    }

    deleteByUserId(id) {
        this.listaPosts = this.listaPosts.filter(data => data.user_id !== id);
        return true;
    }
}


module.exports = PostModel;