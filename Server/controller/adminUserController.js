// controller/adminUserController.js
const AdminUser = require("../models/adminUser");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await AdminUser.findAll({
      attributes: ["id", "fullName", "email"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleted = await AdminUser.destroy({ where: { id: userId } });

    if (deleted) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
