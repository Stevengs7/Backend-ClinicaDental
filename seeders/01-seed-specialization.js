"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "specializations",
      [
        {
          specialization_name: "Orthodontics", // 1
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialization_name: "Periodontics", // 2
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialization_name: "Endodontics", // 3
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialization_name: "Maxillofacial", // 4
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specialization_name: "Prosthodontics", // 5
          createdAt: new Date(),
          updatedAt: new Date(),
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
