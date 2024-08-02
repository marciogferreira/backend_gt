const Connection = require('../config/Connection')
const { DataTypes, Model } = require('sequelize')

class TagModel extends Model{}

TagModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        sequelize: Connection,
        tableName: 'tags'
    }
);

module.exports = TagModel