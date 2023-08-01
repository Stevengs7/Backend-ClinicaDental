const {
  User,
  Dentist,
  Role,
  Specialization,
  Patient,
} = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 10;
  const totalUsers = await User.count();
  const maxPages = Math.ceil(totalUsers / LIMIT);
  if (!page || page < 0) page = 1;

  try {
    if (page <= maxPages) {
      const users = await User.findAll({
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["id_role", "createdAt", "updatedAt", "password"],
        },
        include: [
          {
            model: Role,
            as: "role",
            attributes: { exclude: ["id", "createdAt", "updatedAt"] },
          },
        ],
      });
      res.status(200).json({
        info: {
          count: totalUsers,
          page,
          pages: maxPages,
        },
        results: {
          users,
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
