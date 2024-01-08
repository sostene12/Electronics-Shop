"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var CartSchema = new _mongoose["default"].Schema({
  userId: {
    type: String,
    required: true
  },
  products: [{
    productId: {
      type: String
    },
    quantity: {
      type: Number,
      "default": 1
    }
  }]
}, {
  timestamps: true
});
var Cart = _mongoose["default"].model("Cart", CartSchema);
var _default = Cart;
exports["default"] = _default;