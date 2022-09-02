'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INT
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            userName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            isAdmin: {
                type: Sequelize.BOOL,
                defaultValue: true
            },
            isVerified: {
                type: Sequelize.BOOL,
                defaultValue: true
            },
            token: {
                type: Sequelize.STRING
            },
            active: {
                type: Sequelize.INT,
                defaultValue: 0
            },
            createdAt: {
                // allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                // allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};