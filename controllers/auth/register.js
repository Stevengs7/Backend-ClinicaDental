const bcrypt = require("bcrypt");
const { User, Patient } = require("../../models");
/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  const { user_name, user_last_name, email, password, birthday, phone_number } =
    req.body;

  if (password.length < 8) {
    return res.status(400).json({
      status: "Error",
      message:
        "Password need atleast 8 characters, uncluding Uppercase and symbols",
    });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      user_name,
      user_last_name,
      email,
      password: hash,
      birthday,
      phone_number,
    };

    const user = await User.create(newUser);

    const newPatient = {
      id_user: user.id,
    };

    const patient = await Patient.create(newPatient);

    res.status(201).json({
      message: "User has been created successfully",
    });
  } catch (error) {
    const statusCode =
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
        ? 400
        : 500;

    res.status(statusCode).json({
      status: "Error",
      message: error.message,
    });
  }
};
