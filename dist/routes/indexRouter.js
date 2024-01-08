"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Auth = _interopRequireDefault(require("./Auth"));
var _product = _interopRequireDefault(require("./product"));
var _supplier = _interopRequireDefault(require("./supplier"));
var _stripe = _interopRequireDefault(require("./stripe"));
var _order = _interopRequireDefault(require("./order"));
var indexRouter = (0, _express["default"])();
indexRouter.use("/api/auth", _Auth["default"]);
indexRouter.use("/api/products", _product["default"]);
indexRouter.use("/api/supplier", _supplier["default"]);
indexRouter.use("/api/checkout", _stripe["default"]);
indexRouter.use("/api/orders", _order["default"]);
var _default = indexRouter;
exports["default"] = _default;