import express from "express";
import AuthController from "../controllers/Auth";
import {verifyTokenAndClient} from "../middlewares/verify";

const route = express.Router()

route.post("/signup",AuthController.signup);
route.post("/login",verifyTokenAndClient,AuthController.login);

export default route;