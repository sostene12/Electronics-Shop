import express from "express";
import OrderController from "../controllers/order";

const route = express.Router();

route.post("/create",OrderController.createOrder);
route.put("/update/:id",OrderController.updateOrder);
route.delete("/delete/:id",OrderController.deleteOrder);
route.get("/allOrders",OrderController.getAllOrders);
route.get("/getbyId",OrderController.getUserOrders);

export default route;