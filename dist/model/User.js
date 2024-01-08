"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var userSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    "default": false
  },
  emailToken: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  role: {
    type: Array,
    "default": 'client'
  }
}, {
  timestamps: true
});
var User = _mongoose["default"].model('User', userSchema);
var _default = User;
exports["default"] = _default;