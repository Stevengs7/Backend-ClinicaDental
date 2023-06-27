"use strict";
const bcrypt = require("bcrypt");

const password = "12345678";
const encryptedPassword = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "admin", // 1
          user_last_name: "serna",
          birthday: "1996-08-02",
          email: "admin@serna.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 1, // admin
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "john", // 2
          user_last_name: "smith",
          birthday: "1992-04-15",
          email: "john@smith.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "jane", // 3
          user_last_name: "doe",
          birthday: "1988-09-25",
          email: "jane@doe.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "alex", // 4
          user_last_name: "wilson",
          birthday: "1995-11-10",
          email: "alex@wilson.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "sarah", // 5
          user_last_name: "jones",
          birthday: "1984-07-05",
          email: "sarah@jones.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "michael", // 6
          user_last_name: "brown",
          birthday: "1991-03-20",
          email: "michael@brown.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "emma", // 7
          user_last_name: "lee",
          birthday: "1989-12-12",
          email: "emma@lee.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "david", // 8
          user_last_name: "miller",
          birthday: "1993-06-30",
          email: "david@miller.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "olivia", // 9
          user_last_name: "thompson",
          birthday: "1987-08-18",
          email: "olivia@thompson.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "james", // 10
          user_last_name: "harris",
          birthday: "1990-05-05",
          email: "james@harris.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "lily", // 11
          user_last_name: "walker",
          birthday: "1997-09-02",
          email: "lily@walker.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "william", // 12
          user_last_name: "thomas",
          birthday: "1983-11-22",
          email: "william@thomas.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "ava", // 13
          user_last_name: "martinez",
          birthday: "1994-07-10",
          email: "ava@martinez.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "noah", // 14
          user_last_name: "rodriguez",
          birthday: "1986-03-12",
          email: "noah@rodriguez.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "mia", // 15
          user_last_name: "hill",
          birthday: "1993-01-07",
          email: "mia@hill.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },

        {
          user_name: "ethan", // 16
          user_last_name: "lopez",
          birthday: "1989-06-28",
          email: "ethan@lopez.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "isabella", // 17
          user_last_name: "hughes",
          birthday: "1998-02-19",
          email: "isabella@hughes.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "liam", // 18
          user_last_name: "bennett",
          birthday: "1985-12-03",
          email: "liam@bennett.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "owen", // 19
          user_last_name: "cooper",
          birthday: "1988-08-14",
          email: "owen@cooper.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "jacob", // 20
          user_last_name: "hill",
          birthday: "1990-10-22",
          email: "jacob@hill.com",
          password: encryptedPassword,
          phone_number: "+34 678763802",
          id_role: 3, // regular user
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
