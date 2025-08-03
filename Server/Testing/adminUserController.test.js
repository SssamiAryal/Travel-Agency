jest.mock("../model/adminUser", () => ({
  findAll: jest.fn(),
  destroy: jest.fn(),
}));

const AdminUser = require("../model/adminUser");
const sequelize = require("../database/db");
jest.mock("../database/db");

const adminUserController = require("../controller/adminUserController");

describe("AdminUser Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  describe("getAllUsers", () => {
    test("should fetch users with AdminUser.findAll", async () => {
      const mockUsers = [
        { id: 1, fullName: "User One", email: "one@example.com" },
      ];
      AdminUser.findAll.mockResolvedValue(mockUsers);

      await adminUserController.getAllUsers(req, res);

      expect(AdminUser.findAll).toHaveBeenCalledWith({
        attributes: ["id", "fullName", "email"],
      });
      expect(res.json).toHaveBeenCalledWith(mockUsers);
    });

    test("should fallback to raw query on findAll error", async () => {
      const rawUsers = [
        { id: 3, fullName: "Raw User", email: "raw@example.com" },
      ];
      AdminUser.findAll.mockRejectedValue(new Error("fail"));
      sequelize.query.mockResolvedValue([rawUsers, {}]);

      await adminUserController.getAllUsers(req, res);

      expect(sequelize.query).toHaveBeenCalledWith('SELECT * FROM "Users";');
      expect(res.json).toHaveBeenCalledWith(rawUsers);
    });

    test("should return 500 if both findAll and raw query fail", async () => {
      AdminUser.findAll.mockRejectedValue(new Error("fail"));
      sequelize.query.mockRejectedValue(new Error("fail"));

      await adminUserController.getAllUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to fetch users" });
    });
  });

  describe("deleteUser", () => {
    test("should delete user if found", async () => {
      req.params.id = "1";
      AdminUser.destroy.mockResolvedValue(1);

      await adminUserController.deleteUser(req, res);

      expect(AdminUser.destroy).toHaveBeenCalledWith({ where: { id: "1" } });
      expect(res.json).toHaveBeenCalledWith({
        message: "User deleted successfully",
      });
    });

    test("should return 404 if user not found", async () => {
      req.params.id = "2";
      AdminUser.destroy.mockResolvedValue(0);

      await adminUserController.deleteUser(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "User not found" });
    });

    test("should return 500 on delete error", async () => {
      req.params.id = "3";
      AdminUser.destroy.mockRejectedValue(new Error("fail"));

      await adminUserController.deleteUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to delete user" });
    });
  });
});
