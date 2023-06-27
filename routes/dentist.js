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

module.exports = router;
