import supertest from "supertest";
import defaults from "superagent-defaults";

import { disconnectDb, connectDb } from "../src/database/dbconnect";

import app from "../src/app";

const request = defaults(supertest(app));

let productId;

describe("test products endpoints", () => {
  beforeAll(async () => {
    await connectDb();
  });

  test("It should return all products", async () => {
    const response = await request.get("/api/products/");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    productId = response.body[0]._id;
  });

  test("checking the wrong endpoint", async () => {
    const response = await request.get("/api/product/");
    expect(response.statusCode).toBe(404);
  });

  test("It should return single product", async () => {
    const response = await request.get(`/api/products/${productId}`);
    expect(response.statusCode).toBe(200);
  });

  test("Testing wrong product id", async () => {
    const response = await request.get(`/api/products/635d838a79f491ea130c15e`);
    expect(response.statusCode).toBe(404);
  });

  afterAll(async () => {
    await disconnectDb();
  });
});
