const dentistController = {};

// Get Patients
dentistController.getPatients = require("./getPatients");

// Get my appointments
dentistController.getAppointments = require("./getMyAppointments");

//Get my Profile
dentistController.getMyProfile = require("./getMyProfile");

// Delete appointment
dentistController.deleteAppointment = require("./deleteAppointment");

module.exports = dentistController;
