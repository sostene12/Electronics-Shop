import supertest from "supertest";
import defaults from "superagent-defaults";

import User from "../src/model/User";
import app from "../src/app";

const request = defaults(supertest(app));

const user = {
  firstName: "admin",
  lastName: "Test",
  email: "admin@gmail.com",
  password: "@1234",
};

const loginUser = {
  username: "admin@gmail.com",
  password: "@1234",
};

beforeAll(async () => {
  await User.deleteMany();
});

describe("POST /api/auth/signup", () => {
  test("should create user", async () => {
    const res = await request.post("/api/auth/signup").send(user);
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe("admin@gmail.com");
    expect(res.body.emailToken).toBeDefined();
  });
  test("should not create duplicat users", async () => {
    const res = await request.post("/api/auth/signup").send(user);
    expect(res.statusCode).toBe(409);
  });
});

describe("POST api/auth/login", () => {
  test("should not login user with incorrect email", async () => {
    const res = await request
      .post("/api/auth/login")
      .send({ username: "wrongemail@gmail.com", password: "@123" });
    expect(res.statusCode).toBe(404);
  });

  test("should not login user with incorrect password", async () => {
    const res = await request
      .post("/api/auth/login")
      .send({ username: "admin@gmail.com", password: "@Wrongpassword1" });
    expect(res.statusCode).toBe(401);
  });
  test("should return authentication token on successful login", async () => {
    const res = await request.post("/api/auth/login").send(loginUser);
    console.log(res.status, res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });

  test("should not login user with invalid formatted or empty email or password", async () => {
    const res = await request
      .post("/api/auth/login")
      .send({ username: "", password: "" });
    expect(res.statusCode).toBe(404);
  });
});
