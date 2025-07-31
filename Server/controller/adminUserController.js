const AdminUser = require("../model/adminUser");
const sequelize = require("../database/db");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await AdminUser.findAll({
      attributes: ["id", "fullName", "email"],
    });
    console.log("Users fetched:", users);
    res.json(users);
  } catch (error) {
    console.error("Sequelize findAll error:", error);
    // Fallback to raw query for debugging
    try {
      const [results, metadata] = await sequelize.query(
        'SELECT * FROM "Users";'
      );
      console.log("Raw query results:", results);
      return res.json(results);
    } catch (rawError) {
      console.error("Raw query error:", rawError);
      return res.status(500).json({ error: "Failed to fetch users" });
    }
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
    console.error("Delete user error:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
