const AdminUser = require("../model/adminUser");

describe("AdminUser Model", () => {
  test("should have correct model attributes and options", () => {
    const attributes = AdminUser.rawAttributes;

    expect(attributes).toHaveProperty("id");
    expect(attributes.id.primaryKey).toBe(true);
    expect(attributes.id.autoIncrement).toBe(true);
    expect(attributes.id.type.key).toBe("INTEGER");

    expect(attributes).toHaveProperty("fullName");
    expect(attributes.fullName.allowNull).toBe(false);
    expect(attributes.fullName.type.key).toBe("STRING");

    expect(attributes).toHaveProperty("email");
    expect(attributes.email.allowNull).toBe(false);
    expect(attributes.email.unique).toBe(true);
    expect(attributes.email.type.key).toBe("STRING");

    const options = AdminUser.options;
    expect(options.tableName).toBe("Users");
    expect(options.schema).toBe("public");
    expect(options.timestamps).toBe(false);
    expect(options.freezeTableName).toBe(true);
  });
});
