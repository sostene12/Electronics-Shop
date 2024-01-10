import http from "k6/http";
import { check, group, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "10s",
};

export default function () {
  // Signup API
  group("Signup API", function () {
    const signupUrl = "http://localhost:5000/api/auth/signup";

    // Generate random user data for signup
    const signupPayload = JSON.stringify({
      firstName: "John",
      lastName: "Doe",
      email: `john.doe.${Math.random()}@example.com`, // Add Math.random() for uniqueness
      password: "securePassword",
    });

    let signupResponse = http.post(signupUrl, signupPayload, {
      headers: { "Content-Type": "application/json" },
    });

    check(signupResponse, {
      "Signup Status is 201": (r) => r.status === 201,
    });

    sleep(1);
  });

  // Login API
  // Login API
  group("Login API", function () {
    const loginUrl = "http://localhost:5000/api/auth/login";

    // Use the email and password from the signup for login
    const loginPayload = JSON.stringify({
      username: "admin@gmail.com",
      password: "@1234",
    });

    let loginResponse = http.post(loginUrl, loginPayload, {
      headers: { "Content-Type": "application/json" },
    });

    check(loginResponse, {
      "Login Status is 200": (r) => r.status === 200,
    });

    let getAllProductsHeaders = {
      Authorization: `Bearer ${loginResponse.json("accessToken")}`,
    };
    let getAllProductsResponse = http.get(
      "http://localhost:5000/api/products/",
      {
        headers: getAllProductsHeaders,
      }
    );

    check(getAllProductsResponse, {
      "Get All Products Status is 200": (resp) => resp.status === 200,
    });

    sleep(1);
  });
}
