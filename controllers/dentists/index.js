const dentistController = {};

// Get Patients
dentistController.getPatients = require("./getPatients");

// Get my appointments
dentistController.getAppointments = require("./getMyAppointments");

module.exports = dentistController;
