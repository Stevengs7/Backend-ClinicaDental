const userController = {};

// Show profile
userController.getProfile = require("./getMyProfile");

// Update profile
userController.updateProfile = require("./updateMyProfile");

// Create appointment
userController.createaAppointment = require("./createAppointment");

//Get appointments
userController.getAppointments = require("./getMyAppointments");

// Update Appointment
userController.updateAppointment = require("./updateMyAppointment");

//Delete appointment
userController.deleteAppointments = require("./deleteAppointment");

// Get one appointment by id
userController.findAppointment = require("./findOneappointment");

// Get dentist
userController.getDentist = require("./getDentist");

module.exports = userController;
