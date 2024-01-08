"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var orderSchema = new _mongoose["default"].Schema({
  products: [],
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    "default": 'pending'
  }
}, {
  timestamps: true
});
var Order = _mongoose["default"].model('Order', orderSchema);
var _default = Order;
exports["default"] = _default;