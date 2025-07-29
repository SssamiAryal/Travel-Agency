const Booking = require("../model/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Booking creation failed", error: error.message });
  }
};
