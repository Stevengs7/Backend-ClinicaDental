const userController = {};

// Show profile
userController.getProfile = require("./getMyProfile");

// Update profile
userController.updateProfile = require("./updateMyProfile");

// Create appointment
userController.createaAppointment = require("./createAppointment");

//Get appointments
userController.getAppointments = require("./getMyAppointments");

module.exports = userController;
