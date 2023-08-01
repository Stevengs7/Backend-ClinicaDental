const { User } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;

    await User.destroy({ where: { id: id } });
    º;
    res.status(200).json({
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
