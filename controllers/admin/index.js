const adminController = {};

//General
adminController.getAll = require("./getAll");
adminController.findByPk = require("./getByPk");

// Patients
adminController.getPatients = require("./getPatients");

//Dentist
adminController.getDentists = require("./getDentist");

//Update User
adminController.updateUser = require("./updateUser");
adminController.updateUser = require("./updateUser");

// Delete User

adminController.deleteUser = require("./deleteUser");

module.exports = adminController;
