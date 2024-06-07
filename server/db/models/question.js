"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Theme, {
        foreignKey: "id",
      });
    }
  }
  Question.init(
    {
      title: DataTypes.STRING,
      answer: DataTypes.STRING,
      video: DataTypes.STRING,
      theme_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
