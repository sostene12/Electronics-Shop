"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var supplierSchema = new _mongoose["default"].Schema({
  firstNmae: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  phone: {
    type: Number,
    required: true
  }
});
var Supplier = _mongoose["default"].model('Supplier', supplierSchema);
var _default = Supplier;
exports["default"] = _default;