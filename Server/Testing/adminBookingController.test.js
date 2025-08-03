jest.mock("../model/adminBooking", () => ({
  findAll: jest.fn(),
  update: jest.fn(),
  findByPk: jest.fn(),
  destroy: jest.fn(),
}));

const AdminBooking = require("../model/adminBooking");
const adminBookingController = require("../controller/adminBookingController");

describe("AdminBooking Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  describe("getAllBookings", () => {
    test("should return all bookings", async () => {
      const mockBookings = [{ id: 1, fullName: "Test User" }];
      AdminBooking.findAll.mockResolvedValue(mockBookings);

      await adminBookingController.getAllBookings(req, res);

      expect(AdminBooking.findAll).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockBookings);
    });

    test("should return 500 on error", async () => {
      AdminBooking.findAll.mockRejectedValue(new Error("DB error"));

      await adminBookingController.getAllBookings(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "DB error" });
    });
  });

  describe("updateBooking", () => {
    test("should update booking and return updated record", async () => {
      req.params.id = "1";
      req.body = {
        fullName: "Updated Name",
        email: "updated@example.com",
        phone: "1234567890",
        travelDate: "2025-08-10",
        requests: "None",
        destination: "Bangkok",
      };

      AdminBooking.update.mockResolvedValue([1]);
      AdminBooking.findByPk.mockResolvedValue({ id: 1, ...req.body });

      await adminBookingController.updateBooking(req, res);

      expect(AdminBooking.update).toHaveBeenCalledWith(
        {
          fullName: "Updated Name",
          email: "updated@example.com",
          phone: "1234567890",
          travelDate: "2025-08-10",
          requests: "None",
          destination: "Bangkok",
        },
        { where: { id: "1" } }
      );

      expect(AdminBooking.findByPk).toHaveBeenCalledWith("1");
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, ...req.body });
    });

    test("should return 500 on error", async () => {
      AdminBooking.update.mockRejectedValue(new Error("Update error"));

      await adminBookingController.updateBooking(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Update error" });
    });
  });

  describe("deleteBooking", () => {
    test("should delete booking and return message", async () => {
      req.params.id = "1";
      AdminBooking.destroy.mockResolvedValue(1);

      await adminBookingController.deleteBooking(req, res);

      expect(AdminBooking.destroy).toHaveBeenCalledWith({ where: { id: "1" } });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Booking deleted" });
    });

    test("should return 500 on error", async () => {
      AdminBooking.destroy.mockRejectedValue(new Error("Delete error"));

      await adminBookingController.deleteBooking(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Delete error" });
    });
  });
});
