'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Age extends Model {

    static associate(models) {
      console.log(models)
      Age.Activity = Age.hasMany(models.Activity, {
        foreignKey:"ageId"
      })
    }
  }
  Age.init({
    childrenAge: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Age',
    tableName: 'Ages'
  });

  return Age;
};