module.exports = (req, res, next) => {
  const { userRole } = req;
  if (userRole != "dentist") {
    res.status(403).json({
      status: "Error",
      message: "Don't have permission",
    });
  } else {
    next();
  }
};
