const Connection = require('../config/Connection');
const { DataTypes } = require('sequelize');

const UserTypesModel = Connection.define(
    "UserTypesModel",
    {
        type: {
            type: DataTypes.STRING(50), // varchar(50)
            allowNull: false, // NOT NULL
        }
    },
    {
        tableName: 'user_types'
    }
);

module.exports = UserTypesModel;