const express = require("express");
const userController = require("../controllers/users/index");
const verifyToken = require("../middlewares/verifyToken");
const isPatient = require("../middlewares/isPatient");
const router = express.Router();

/* GET users listing. */

//Get my profile
router.get("/profile", verifyToken, isPatient, userController.getProfile);

//update my profile
router.put(
  "/update-profile",
  verifyToken,
  isPatient,
  userController.updateProfile
);

// Create Appointment
router.post(
  "/new-appointment",
  verifyToken,
  isPatient,
  userController.createaAppointment
);

// Get my appointments

router.get(
  "/my-appointments",
  verifyToken,
  isPatient,
  userController.getAppointments
);

module.exports = router;
