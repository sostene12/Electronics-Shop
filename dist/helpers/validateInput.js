"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var Schema = _joi["default"].object({
  firstName: _joi["default"].string().pattern(new RegExp('^[a-zA-Z]+ [a-zA-Z]+$')),
  lastName: _joi["default"].string().pattern(new RegExp('^[a-zA-Z]+ [a-zA-Z]+$')),
  username: _joi["default"].string().min(5).required(),
  password: _joi["default"].string().pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')),
  email: _joi["default"].string().pattern(new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$')).lowercase(),
  phoneNumber: _joi["default"].string().min(10).max(13)
});
var _default = Schema;
exports["default"] = _default;