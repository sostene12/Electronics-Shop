"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
var loginSchema = _joi["default"].object({
  username: _joi["default"].string().pattern(new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$')).lowercase().required(),
  password: _joi["default"].string().pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')).required()
});
exports.loginSchema = loginSchema;