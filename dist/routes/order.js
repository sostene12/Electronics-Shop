"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _order = _interopRequireDefault(require("../controllers/order"));
var route = _express["default"].Router();
route.post("/create", _order["default"].createOrder);
route.put("/update/:id", _order["default"].updateOrder);
route["delete"]("/delete/:id", _order["default"].deleteOrder);
route.get("/allOrders", _order["default"].getAllOrders);
route.get("/getbyId", _order["default"].getUserOrders);
var _default = route;
exports["default"] = _default;