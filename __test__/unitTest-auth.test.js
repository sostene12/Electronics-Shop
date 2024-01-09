import AuthController from "../src/controllers/Auth";
import User from "../src/model/User";
import nodemailer from "nodemailer-mock";

jest.mock("../src/model/User");
jest.mock("nodemailer");

// Setup the mock implementation for nodemailer
jest.spyOn(nodemailer, "createTransport").mockImplementation(() => nodemailer);

describe("AuthController", () => {
  describe("create user account/ signup", () => {
    test("should return 201 when user is created", async () => {
      // Mocking the request and response objects
      const req = {
        body: {
          firstName: "sostene",
          lastName: "Munezero",
          email: "munezero@gmail.com",
          password: "123456",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Mocking User.findOne to return null (no existing user)
      User.findOne.mockResolvedValue(null);

      // Mocking newUser.save to return the created user
      User.prototype.save.mockResolvedValue({
        _id: "mockedUserId",
        firstName: "sostene",
        lastName: "Munezero",
        email: "munezero@gmail.com",
        password: "123456",
        role: "client",
      });

      // Calling the signup function
      await AuthController.signup(req, res);

      // Expectations
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ _id: "mockedUserId" })
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    nodemailer.mock.reset(); // Reset the mock state for nodemailer
  });
});
