// routes/adminUserRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  deleteUser,
} = require("../controller/adminUserController");

router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

module.exports = router;
