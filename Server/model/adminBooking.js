const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const AdminBooking = sequelize.define(
  "AdminBooking",
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
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    travelDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    requests: {
      type: DataTypes.TEXT,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Bookings",
  }
);

module.exports = AdminBooking;
