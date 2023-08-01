const express = require("express");
const dentistController = require("../controllers/dentists");
const verifyToken = require("../middlewares/verifyToken");
const isDentist = require("../middlewares/isDentist");
const router = express.Router();

//update my profile
router.get(
  "/all-patients",
  verifyToken,
  isDentist,
  dentistController.getPatients
);

// Get my appointments

router.get(
  "/my-appointments",
  verifyToken,
  isDentist,
  dentistController.getAppointments
);

// My profile
router.get(
  "/my-profile",
  verifyToken,
  isDentist,
  dentistController.getMyProfile
);

// Delete appointment
router.delete(
  "/delete-appointment",
  verifyToken,
  isDentist,
  dentistController.deleteAppointment
);

module.exports = router;
