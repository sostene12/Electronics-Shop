import express from "express";
import AuthController from "../controllers/Auth";
import { verifyToken } from "../middlewares/verify";

const route = express.Router()

route.post("/signup",AuthController.signup);
route.post("/login",AuthController.login);

export default route;