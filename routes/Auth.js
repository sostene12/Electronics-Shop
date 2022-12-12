import express from "express";
import AuthController from "../controllers/Auth";
// import {verifyTokenAndSupplier} from "../middlewares/verify";
import verifyEmail from "../middlewares/verifyEmail"
// import { validate } from "../middlewares/validate";
// import { signupSchema,loginSchema } from "../helpers/schemas/signup";

const route = express.Router()

route.post("/signup",AuthController.signup);
route.post("/login",AuthController.login);
route.get("/verifyemail/:token",AuthController.emailVerification);
route.get("/allusers",AuthController.allUsers);

export default route;