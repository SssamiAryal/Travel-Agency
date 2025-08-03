const User = require("../model/User");

describe("User Model", () => {
  test("should have correct model attributes", () => {
    const attributes = User.rawAttributes;

    expect(attributes).toHaveProperty("id");
    expect(attributes.id.primaryKey).toBe(true);
    expect(attributes.id.autoIncrement).toBe(true);
    expect(attributes.id.type.key).toBe("INTEGER");

    expect(attributes).toHaveProperty("name");
    expect(attributes.name.allowNull).toBe(false);
    expect(attributes.name.type.key).toBe("STRING");

    expect(attributes).toHaveProperty("email");
    expect(attributes.email.allowNull).toBe(false);
    expect(attributes.email.unique).toBe(true);
    expect(attributes.email.type.key).toBe("STRING");

    expect(attributes).toHaveProperty("password");
    expect(attributes.password.allowNull).toBe(false);
    expect(attributes.password.type.key).toBe("STRING");
  });
});
