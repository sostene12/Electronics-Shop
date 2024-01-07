import express from "express";
import StripeController from "../controllers/stripe";

const route = express.Router();

route.post("/payment",StripeController.payment);
route.post("/stripePay",StripeController.stripePay);

export default route;