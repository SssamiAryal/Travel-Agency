const Booking = require("../model/Booking");

describe("Booking Model", () => {
  test("should have correct model attributes", () => {
    const attributes = Booking.rawAttributes;

    expect(attributes).toHaveProperty("fullName");
    expect(attributes.fullName.allowNull).toBe(false);
    expect(attributes.fullName.type.key).toBe("STRING");

    expect(attributes).toHaveProperty("email");
    expect(attributes.email.allowNull).toBe(false);
    expect(attributes.email.type.key).toBe("STRING");

    expect(attributes).toHaveProperty("phone");
    expect(attributes.phone.allowNull).toBe(false);
    expect(attributes.phone.type.key).toBe("STRING");

    expect(attributes).toHaveProperty("travelDate");
    expect(attributes.travelDate.allowNull).toBe(false);
    expect(attributes.travelDate.type.key).toBe("DATEONLY");

    expect(attributes).toHaveProperty("travelers");
    expect(attributes.travelers.allowNull).toBe(false);
    expect(attributes.travelers.type.key).toBe("INTEGER");

    expect(attributes).toHaveProperty("requests");
    expect(attributes.requests.allowNull).not.toBe(false);
    expect(attributes.requests.type.key).toBe("TEXT");

    expect(attributes).toHaveProperty("destination");
    expect(attributes.destination.allowNull).toBe(false);
    expect(attributes.destination.type.key).toBe("STRING");
  });
});
