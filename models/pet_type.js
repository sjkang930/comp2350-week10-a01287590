const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const userModel = sequelize.define('pet_type',
       {pet_type_id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
        first_name: {type: Sequelize.STRING, allowNull: false},
        last_name: {type: Sequelize.STRING, allowNull: false},
        email: {type: Sequelize.STRING, allowNull: false},
        password_hash: {type: Sequelize.STRING, allowNull: true},
        password_salt: {type: Sequelize.STRING, allowNull: false}
       },
       {tableName: 'pet_type',
        timestamps: false,
        singular: 'pet_type',
        plural: 'pet_type'}
);
module.exports = userModel;