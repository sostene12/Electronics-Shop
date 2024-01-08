"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));
var _dbconnect = require("./database/dbconnect");
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
(0, _dbconnect.connectDb)();
app.get('/', function (_, res) {
  res.status(200).json('Welcome to the backend');
});
app.use('/', _indexRouter["default"]);
var _default = app;
exports["default"] = _default;