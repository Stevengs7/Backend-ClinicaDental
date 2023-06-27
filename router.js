const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const usersRouter = require("./routes/users");
const dentistRouter = require("./routes/dentist");
const authRouter = require("./routes/auth");

// home page
router.use("/", indexRouter);

// authentication
router.use("/auth", authRouter);

//Admin
router.use("/admin", adminRouter);

// Patient
router.use("/api/users", usersRouter);

// Dentist
router.use("/api/dentist", dentistRouter);

module.exports = router;
