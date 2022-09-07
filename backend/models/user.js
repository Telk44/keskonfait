'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {

      User.Activities = User.hasMany( models.Activity,{
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // isAdmin: DataTypes.BOOLEAN,
    // isVerified: DataTypes.BOOLEAN,
    // token: DataTypes.STRING,
    // active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};