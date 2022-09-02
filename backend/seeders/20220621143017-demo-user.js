'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'Kristell',
      lastName: 'Lansonneur',
      userName: "Admin",
      email:"test@test.fr",
      password: '1fevrier2002?',
      isAdmin: true,
      isVerified: true,
      token: "",
      active: 1,
      createdAt:"2022-01-17 04:33:12",
      updatedAt:"2022-01-18 04:33:12"
    }]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
}