"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _User = _interopRequireDefault(require("../model/User"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }
  (0, _createClass2["default"])(UserController, null, [{
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {} catch (error) {
                  console.log(error);
                }
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getUser(_x, _x2) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }]);
  return UserController;
}();
var _default = UserController;
exports["default"] = _default;