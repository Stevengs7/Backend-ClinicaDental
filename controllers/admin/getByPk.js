const { User, Role } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
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
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
