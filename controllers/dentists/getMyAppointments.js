const { User, Dentist, Patient, Appointment } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 2;
  const totalAppointments = await Appointment.count();
  const maxPages = Math.ceil(totalAppointments / LIMIT);
  if (!page || page < 0) page = 1;

  const { userId } = req;

  try {
    if (page <= maxPages) {
      const dentist = await Dentist.findOne({
        where: { id_user: userId },
      });
      const appointments = await Appointment.findAll({
        where: { id_dentist: dentist.id },
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Patient,
            as: "patient",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
            include: [
              {
                model: User,
                as: "user",
                attributes: {
                  exclude: [
                    "id",
                    "password",
                    "id_role",
                    "birthday",
                    "createdAt",
                    "updatedAt",
                  ],
                },
              },
            ],
          },
        ],
      });
      res.status(200).json({
        info: {
          count: totalAppointments,
          page,
          pages: maxPages,
        },
        results: {
          appointments,
        },
      });
    } else {
      res.json("There is nothing here");
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
