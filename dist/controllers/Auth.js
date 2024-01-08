"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _User = _interopRequireDefault(require("../model/User"));
var _Supplier = _interopRequireDefault(require("../model/Supplier"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _jwt = require("../helpers/jwt");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _emails = _interopRequireDefault(require("../helpers/emails"));
var _crypto = _interopRequireDefault(require("crypto"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _excluded = ["password"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
_dotenv["default"].config();
var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }
  (0, _createClass2["default"])(AuthController, null, [{
    key: "signup",
    value: function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var newUser, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return new _User["default"]({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: _cryptoJs["default"].AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
                  // age:req.body.age,
                  // gender:req.body.gender,
                  role: req.body.role,
                  emailToken: _crypto["default"].randomBytes(16).toString('hex')
                });
              case 3:
                newUser = _context.sent;
                _context.next = 6;
                return newUser.save();
              case 6:
                user = _context.sent;
                _context.next = 9;
                return (0, _emails["default"])({
                  email: newUser.email,
                  emailToken: newUser.emailToken
                }, "CreateUser");
              case 9:
                res.status(201).json(user);
                _context.next = 15;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                res.status(401).json({
                  error: _context.t0.message
                });
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));
      function signup(_x, _x2) {
        return _signup.apply(this, arguments);
      }
      return signup;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var user, hashedPassword, originalPassword, accessToken, _user$_doc, password, others;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _User["default"].findOne({
                  email: req.body.username
                });
              case 3:
                user = _context2.sent;
                if (!user) {
                  res.status(404).json({
                    error: "Wrong Credentials"
                  });
                }
                hashedPassword = _cryptoJs["default"].AES.decrypt(user.password, process.env.SECRET_KEY);
                originalPassword = hashedPassword.toString(_cryptoJs["default"].enc.Utf8);
                if (originalPassword !== req.body.password) {
                  res.status(401).json({
                    error: "Wrong Credentials"
                  });
                }
                accessToken = _jsonwebtoken["default"].sign({
                  id: user._id,
                  role: user.role
                }, process.env.JWT_SCRETE_KEY, {
                  expiresIn: "24h"
                });
                _user$_doc = user._doc, password = _user$_doc.password, others = (0, _objectWithoutProperties2["default"])(_user$_doc, _excluded);
                res.status(200).json(_objectSpread(_objectSpread({}, others), {}, {
                  accessToken: accessToken
                }));
                _context2.next = 16;
                break;
              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                res.status(404).json({
                  error: _context2.t0.message
                });
              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));
      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "emailVerification",
    value: function () {
      var _emailVerification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var token, user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                token = req.params.token;
                _context3.prev = 1;
                _context3.next = 4;
                return _User["default"].findOne({
                  emailToken: token
                });
              case 4:
                user = _context3.sent;
                if (!user) {
                  _context3.next = 11;
                  break;
                }
                user.emailToken = null;
                user.isVerified = true;
                _context3.next = 10;
                return user.save();
              case 10:
                return _context3.abrupt("return", res.status(200).json({
                  message: "account verified succcessfullyS"
                }));
              case 11:
                _context3.next = 16;
                break;
              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);
              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 13]]);
      }));
      function emailVerification(_x5, _x6) {
        return _emailVerification.apply(this, arguments);
      }
      return emailVerification;
    }()
  }, {
    key: "allUsers",
    value: function () {
      var _allUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var users;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _User["default"].find();
              case 3:
                users = _context4.sent;
                console.log(users);
                res.status(200).json(users);
                _context4.next = 11;
                break;
              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                res.status(404).json({
                  error: _context4.t0.message
                });
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function allUsers(_x7, _x8) {
        return _allUsers.apply(this, arguments);
      }
      return allUsers;
    }()
  }, {
    key: "approveSupplier",
    value: function () {
      var _approveSupplier = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                try {} catch (error) {}
              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function approveSupplier(_x9, _x10) {
        return _approveSupplier.apply(this, arguments);
      }
      return approveSupplier;
    }()
  }]);
  return AuthController;
}();
var _default = AuthController;
exports["default"] = _default;