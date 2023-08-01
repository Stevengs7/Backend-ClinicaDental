const { successMsg, errorMsg } = require("../../_utils/messages");
const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const modify = { ...req.body };

    await Appointment.update(modify, { where: { id: id } });
    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.appointment.UPDATE,
    });
  }
};
