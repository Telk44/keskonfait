'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.Activity = Category.hasMany( models.Activity,{
        foreignKey: 'categoryId',
      });
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories'
  });
  return Category;
};