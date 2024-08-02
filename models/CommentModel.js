const Connection = require('../config/Connection')
const { DataTypes, Model } = require('sequelize')
const UserModel = require('./UserModel');
const PostModel = require('./PostModel');

class CommentModel extends Model{}

CommentModel.init(
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
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: PostModel,
                key: 'id'
            },
            allowNull: false
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: CommentModel,
                key: 'id'
            },
            allowNull: false
        },
        content: DataTypes.TEXT
    },
    {
        sequelize: Connection,
        tableName: 'comments'
    }
);

module.exports = CommentModel