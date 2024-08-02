const Connection = require('../config/Connection')
const { DataTypes, Model } = require('sequelize')
const UserModel = require('./UserModel');

class ProfileModel extends Model{}

ProfileModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: UserModel,
                key: 'id'
            },
            allowNull: false
        },
        firstname: DataTypes.STRING(255),
        sumname: DataTypes.STRING(255),
        picture_path: DataTypes.STRING(255),
        bio: DataTypes.STRING(255)
    },
    {
        sequelize: Connection,
        tableName: 'profile'
    }
);

module.exports = ProfileModel