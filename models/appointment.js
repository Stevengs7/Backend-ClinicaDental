"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.Dentist, {
        as: "dentist",
        foreignKey: "id_dentist",
      });
      Appointment.belongsTo(models.Patient, {
        as: "patient",
        foreignKey: "id_patient",
      });
    }
  }
  Appointment.init(
    {
      id_dentist: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_patient: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        isDate: true,
      },
      time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "appointments",
    }
  );
  return Appointment;
};
