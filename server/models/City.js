const { sequelize, DataTypes } = require('../db/db')

const City = sequelize.define('city', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weather: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dayTime: {
        type: DataTypes.STRING
    },
    temp: {
        type: DataTypes.INTEGER
    },
    min: {
        type: DataTypes.INTEGER
    },
    max: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
})

module.exports = City