const {
  User,
  Dentist,
  Specialization,
  Patient,
  Appointment,
} = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  try {
    const appointment = await Appointment.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Dentist,
          as: "dentist",
          attributes: {
            exclude: ["id", "id_role", "id_user", "createdAt", "updatedAt"],
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: {
                exclude: [
                  "id",
                  "id_role",
                  "password",
                  "birthday",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
            {
              model: Specialization,
              as: "specialization",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
};
