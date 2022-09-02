'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INT
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      description: {
        type: Sequelize.STRING,

      },
      startDate: {
        type: Sequelize.DATE,

      },
      endDate: {
        type: Sequelize.DATE,

      },
      price: {
        type: Sequelize.STRING

      },
      phone: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      bookingEmail: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activities');
  }
};