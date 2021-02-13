const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Skills model
class Skills extends Model {}

// create fields/columns for Skills model
Skills.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'skills'
    }
);

module.exports = Skills;

