const bcrypt = require("bcrypt");
const { successMsg, errorMsg } = require("../../_utils/messages");
const { User } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;
  try {
    const updates = {
      ...req.body,
      password: req.body.password
        ? bcrypt.hashSync(req.body.password, 10)
        : undefined,
    };
    await User.update(updates, { where: { id: userId } });

    res.status(202).json({
      message: successMsg.user.UPDATE,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.user.UPDATE,
    });
  }
};
