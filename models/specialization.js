"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Specialization.hasMany(models.Dentist, {
        as: "dentist",
        foreignKey: "id_specialization",
      });
    }
  }
  Specialization.init(
    {
      specialization_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialization",
      tableName: "specializations",
    }
  );
  return Specialization;
};
