const AdminBooking = require("../model/adminBooking");

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await AdminBooking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone, travelDate, requests, destination } =
      req.body;

    await AdminBooking.update(
      { fullName, email, phone, travelDate, requests, destination },
      { where: { id } }
    );

    const updatedBooking = await AdminBooking.findByPk(id);
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await AdminBooking.destroy({ where: { id } });
    res.status(200).json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
