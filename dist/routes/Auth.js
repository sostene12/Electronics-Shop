"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Auth = _interopRequireDefault(require("../controllers/Auth"));
var _verifyEmail = _interopRequireDefault(require("../middlewares/verifyEmail"));
// import {verifyTokenAndSupplier} from "../middlewares/verify";

// import { validate } from "../middlewares/validate";
// import { signupSchema,loginSchema } from "../helpers/schemas/signup";

var route = _express["default"].Router();
route.post("/signup", _Auth["default"].signup);
route.post("/login", _Auth["default"].login);
route.get("/verifyemail/:token", _Auth["default"].emailVerification);
route.get("/allusers", _Auth["default"].allUsers);
var _default = route;
exports["default"] = _default;