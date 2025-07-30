// model/Booking.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Booking = sequelize.define("Booking", {
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
  travelers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  requests: {
    type: DataTypes.TEXT,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Booking;
