const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require("../controller/authController");

jest.mock("../model/User");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("User Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe("register", () => {
    test("should register a new user successfully", async () => {
      req.body = {
        name: "Samir",
        email: "samir@example.com",
        password: "pass123",
      };

      User.findOne.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue("hashedpass");
      User.create.mockResolvedValue({ id: 1 });

      await userController.register(req, res);

      expect(User.findOne).toHaveBeenCalledWith({
        where: { email: req.body.email },
      });
      expect(bcrypt.hash).toHaveBeenCalledWith(req.body.password, 10);
      expect(User.create).toHaveBeenCalledWith({
        name: req.body.name,
        email: req.body.email,
        password: "hashedpass",
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "User registered",
        userId: 1,
      });
    });

    test("should return 400 if email already in use", async () => {
      req.body = { email: "samir@example.com" };

      User.findOne.mockResolvedValue({ id: 1 });

      await userController.register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Email already in use",
      });
    });

    test("should handle error", async () => {
      const error = new Error("DB error");
      User.findOne.mockRejectedValue(error);

      await userController.register(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe("login", () => {
    test("should login successfully and return token", async () => {
      req.body = { email: "samir@example.com", password: "pass123" };

      User.findOne.mockResolvedValue({
        id: 1,
        email: "samir@example.com",
        password: "hashedpass",
      });
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("token123");

      await userController.login(req, res);

      expect(User.findOne).toHaveBeenCalledWith({
        where: { email: req.body.email },
      });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        req.body.password,
        "hashedpass"
      );
      expect(jwt.sign).toHaveBeenCalledWith(
        { id: 1, email: "samir@example.com" },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      expect(res.json).toHaveBeenCalledWith({
        message: "Logged in",
        token: "token123",
      });
    });

    test("should return 400 if user not found", async () => {
      req.body = { email: "samir@example.com", password: "pass123" };

      User.findOne.mockResolvedValue(null);

      await userController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Invalid credentials" });
    });

    test("should return 400 if password invalid", async () => {
      req.body = { email: "samir@example.com", password: "pass123" };

      User.findOne.mockResolvedValue({ password: "hashedpass" });
      bcrypt.compare.mockResolvedValue(false);

      await userController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Invalid credentials" });
    });

    test("should handle error", async () => {
      const error = new Error("DB error");
      User.findOne.mockRejectedValue(error);

      await userController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
});
