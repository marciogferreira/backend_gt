const Connection = require('../config/Connection')
const { DataTypes, Model } = require('sequelize')
const UserTypesModel = require('./UserTypesModel');
class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: UserTypesModel,
                key: 'id'
            },
            allowNull: false
        }
    },
    {
        tableName: 'users',
        sequelize: Connection
    }
)


module.exports = UserModel;