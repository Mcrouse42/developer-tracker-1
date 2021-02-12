const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Status model
class Status extends Model {}

// create fields/columns for Skills model
Status.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        status_text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'status'
    }
);

module.exports = Status;