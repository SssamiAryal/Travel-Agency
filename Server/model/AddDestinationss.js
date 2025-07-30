const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const AddDestinationss = sequelize.define("destinations", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

module.exports = AddDestinationss;
