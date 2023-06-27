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

module.exports = adminController;
