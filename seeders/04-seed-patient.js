"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patients",
      [
        {
          id_user: 7,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 8,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 9,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 10,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 11,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 12,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 13,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 14,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 15,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 16,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 17,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 18,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 19,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 20,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
