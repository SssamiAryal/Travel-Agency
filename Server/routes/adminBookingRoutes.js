const express = require("express");
const router = express.Router();
const controller = require("../controller/adminBookingController");

router.get("/", controller.getAllBookings);
router.put("/:id", controller.updateBooking);
router.delete("/:id", controller.deleteBooking);

module.exports = router;
