"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "dentists",
      [
        {
          id_user: 2, // John Smith
          id_specialization: 1, // Orthodontics
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 3, // Jane Doe
          id_specialization: 2, // Periodontics
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 4, // Alex Wilson
          id_specialization: 3, // Endodontics
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 5, // Sarah Jones
          id_specialization: 4, // Maxillofacial
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 6, // Michael Brown
          id_specialization: 5, // Prosthodontics
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
