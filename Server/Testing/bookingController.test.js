const Booking = require("../model/Booking");
const bookingController = require("../controller/bookingController");

jest.mock("../model/Booking");

describe("Booking Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("createBooking success", async () => {
    const req = { body: { fullName: "Samir", email: "samir@example.com" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Booking.create.mockResolvedValue(req.body);

    await bookingController.createBooking(req, res);

    expect(Booking.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Booking created successfully",
      booking: req.body,
    });
  });

  test("createBooking failure", async () => {
    const req = { body: { fullName: "Samir" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const error = new Error("DB error");
    Booking.create.mockRejectedValue(error);

    await bookingController.createBooking(req, res);

    expect(Booking.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Booking creation failed",
      error: error.message,
    });
  });
});
