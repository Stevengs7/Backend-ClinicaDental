const { successMsg } = require("../../_utils/messages");
const { Appointment, User, Patient } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { userId } = req;

    const patient = await Patient.findOne({
      where: { id_user: userId },
    });
    
    const newAppointment = { ...req.body, id_patient: patient.id };
    const appointment = await Appointment.create(newAppointment);
    res.status(201).json({
      message: successMsg.appointment.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
