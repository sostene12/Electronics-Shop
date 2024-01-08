"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("dotenv/config");
var _app = _interopRequireDefault(require("./app"));
_app["default"].listen(process.env.PORT || 3000, function () {
  console.log("Backend server is running on ".concat(process.env.PORT));
});