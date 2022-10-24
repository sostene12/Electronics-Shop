import express from "express";
import AuthController from "../controllers/Auth";
import {verifyTokenAndSupplier} from "../middlewares/verify";
import verifyEmail from "../middlewares/verifyEmail"

const route = express.Router()

route.post("/signup",AuthController.signup);
route.post("/login",verifyEmail,AuthController.login);
route.get("/verifyemail/:token",AuthController.emailVerification)

export default route;