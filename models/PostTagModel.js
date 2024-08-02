const Connection = require('../config/Connection')
const { DataTypes, Model } = require('sequelize')
const PostModel = require('./PostModel')
const TagModel = require('./TagModel')

class PostTagModel extends Model{}

PostTagModel.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: PostModel,
                key: 'id'
            },
            primaryKey: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: TagModel,
                key: 'id'
            },
            primaryKey: true
        }
    },
    {
        sequelize: Connection,
        tableName: 'posts_tags'
    }
);

module.exports = PostTagModel