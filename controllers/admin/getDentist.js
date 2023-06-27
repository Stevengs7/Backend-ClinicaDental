const { User, Dentist, Specialization } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 2;
  const totalDentist = await Dentist.count();
  const maxPages = Math.ceil(totalDentist / LIMIT);
  if (!page || page < 0) page = 1;

  try {
    if (page <= maxPages) {
      const dentists = await Dentist.findAll({
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["id_specialization", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: User,
            as: "user",
            attributes: {
              exclude: ["id", "password", "id_role", "createdAt", "updatedAt"],
            },
          },
          {
            model: Specialization,
            as: "specialization",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      res.status(200).json({
        info: {
          count: totalDentist,
          page,
          pages: maxPages,
        },
        results: {
          dentists,
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
