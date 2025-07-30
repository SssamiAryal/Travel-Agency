// AddDestinationssRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controller/AddDestinationssController");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), controller.createDestination);
router.get("/", controller.getAllDestinations);
router.delete("/:id", controller.deleteDestination);
router.put("/:id", upload.single("image"), controller.updateDestination);

module.exports = router;
