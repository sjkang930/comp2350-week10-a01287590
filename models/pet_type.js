const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const pet_typeModel = sequelize.define('pet_type',
       {pet_type_id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
        type: {type: Sequelize.STRING, allowNull: false}
       },
       {tableName: 'pet_type',
        timestamps: false,
        singular: 'pet_type',
        plural: 'pet_type'}
);
module.exports = pet_typeModel;