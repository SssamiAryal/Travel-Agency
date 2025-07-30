// models/adminUser.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const AdminUser = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    timestamps: false,
  }
);

module.exports = AdminUser;
