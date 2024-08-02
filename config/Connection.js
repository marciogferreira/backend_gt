const { Sequelize } = require('sequelize')

const Connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'geracao_tech',
    username: 'root',
    password: ''
});

module.exports = Connection;

