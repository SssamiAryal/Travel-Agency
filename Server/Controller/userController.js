const { User } = require("../model/userSchema");

const getAllEmployees = async (req, res) => {
  try {
    const users = await User.findAll();
    res
      .status(200)
      .json({ data: users, message: "Users fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const saveEmployee = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const user = await User.create({ name });
    res.status(201).json({ message: "User added successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllEmployees, saveEmployee };
