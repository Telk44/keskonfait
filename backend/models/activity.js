'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Activity extends Model {

        static associate(models) {
            Activity.User = Activity.belongsTo(models.User, {
                foreignKey:"userId"
            });
            Activity.Category = Activity.belongsTo(models.Category, {
                foreignKey:"categoryId"
            });
            Activity.Age = Activity.belongsTo(models.Age, {
                foreignKey:"ageId"
            });

        }
    }
    Activity.init({
        title: DataTypes.STRING,
        imageURL: DataTypes.STRING,
        description: DataTypes.STRING(1234),
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        price: DataTypes.STRING,
        phone: DataTypes.STRING,
        bookingEmail: DataTypes.STRING
    }, {
        sequelize: sequelize,
        modelName: 'Activity',
        tableName: 'Activities'
    });
    return Activity;
};