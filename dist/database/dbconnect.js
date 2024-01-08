"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnectDb = exports.connectDb = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
// const dburl = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URL_TEST : process.env.MONGODB_URL;
var dburl = process.env.MONGODB_URL;
var connectDb = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(dburl, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });
          case 3:
            // console.log(`${process.env.NODE_ENV === 'test' ? 'Testing Database connected successfully!' : 'Database connected successfully!' }`);
            console.log('Database connected successfully!');
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error({
              error: _context.t0.message
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function connectDb() {
    return _ref.apply(this, arguments);
  };
}();
exports.connectDb = connectDb;
var disconnectDb = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _mongoose["default"].disconnect();
          case 3:
            console.log('Database disconnected successfully!');
            _context2.next = 9;
            break;
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.error({
              error: _context2.t0.message
            });
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return function disconnectDb() {
    return _ref2.apply(this, arguments);
  };
}();
exports.disconnectDb = disconnectDb;