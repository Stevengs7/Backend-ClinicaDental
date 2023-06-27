"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dentist.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user",
      });
      Dentist.belongsTo(models.Specialization, {
        as: "specialization",
        foreignKey: "id_specialization",
      });
      Dentist.hasOne(models.Appointment, {
        as: "appointment",
        foreignKey: "id_dentist", // foreignKey en Appointment
      });
    }
  }
  Dentist.init(
    {
      id_specialization: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dentist",
      tableName: "dentists",
    }
  );
  return Dentist;
};
