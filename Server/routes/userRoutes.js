const express = require("express");
const {
  getAllEmployees,
  saveEmployee,
} = require("../Controller/userController");

const router = express.Router();

router.get("/users", getAllEmployees);
router.post("/users", saveEmployee);
router.post("/login", login);

module.exports = router;
