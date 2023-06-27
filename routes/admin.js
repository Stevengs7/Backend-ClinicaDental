const express = require("express");
const adminController = require("../controllers/admin/index");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

/* GET users listing. */
router.get("/all-users", verifyToken, isAdmin, adminController.getAll);

//Get Patients
router.get("/all-patients", verifyToken, isAdmin, adminController.getPatients);

//Get Dentists
router.get("/all-dentists", verifyToken, isAdmin, adminController.getDentists);

//Update User
router.put("/update-user/:id", verifyToken, isAdmin, adminController.updateUser);

//Get user by id
router.get("/user/:id", verifyToken, isAdmin, adminController.findByPk);

module.exports = router;
