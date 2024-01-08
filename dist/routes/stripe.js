"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _stripe = _interopRequireDefault(require("../controllers/stripe"));
var route = _express["default"].Router();
route.post("/payment", _stripe["default"].payment);
route.post("/stripePay", _stripe["default"].stripePay);
var _default = route;
exports["default"] = _default;