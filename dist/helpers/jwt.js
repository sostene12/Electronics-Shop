"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = exports.sign = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var sign = function sign(payload) {
  _jsonwebtoken["default"].sign(payload, process.env.JWT_SCRETE_KEY, {
    expiresIn: '24h'
  });
};
exports.sign = sign;
var verify = function verify(payload) {
  return _jsonwebtoken["default"].verify(payload, process.env.JWT_SCRETE_KEY);
};
exports.verify = verify;