"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _User = _interopRequireDefault(require("../model/User"));
var verifyEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findOne({
              email: req.body.username
            });
          case 2:
            user = _context.sent;
            if (!user.isVerified) {
              _context.next = 7;
              break;
            }
            next();
            _context.next = 8;
            break;
          case 7:
            return _context.abrupt("return", res.status(404).json('PLease verify your email'));
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function verifyEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = verifyEmail;
exports["default"] = _default;