"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTokenAndSupplier = exports.verifyTokenAndClient = exports.verifyTokenAndAdmin = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var verifyToken = function verifyToken(req, res, next) {
  var authHeader = req.headers.token.split(" ")[1];
  if (authHeader) {
    var token = authHeader;
    _jsonwebtoken["default"].verify(token, process.env.JWT_SCRETE_KEY, function (error, user) {
      if (error) {
        res.status(403).json({
          error: "Invalid Token"
        });
      } else {
        req.user = user;
        // console.log(req.user.id);
        next();
      }
    });
  } else {
    return res.status(401).json({
      error: "You are not authenticated!"
    });
  }
};
var verifyTokenAndClient = function verifyTokenAndClient(req, res, next) {
  verifyToken(req, res, function () {
    if (req.user.role.includes('client')) {
      next();
    } else {
      res.status(401).json({
        error: "you are not Authenticated"
      });
    }
  });
};
exports.verifyTokenAndClient = verifyTokenAndClient;
var verifyTokenAndSupplier = function verifyTokenAndSupplier(req, res, next) {
  verifyToken(req, res, function () {
    console.log(req.user);
    if (req.user.role.includes('supplier')) {
      next();
    } else {
      res.status(401).json({
        error: "you can not trade"
      });
    }
  });
};
exports.verifyTokenAndSupplier = verifyTokenAndSupplier;
var verifyTokenAndAdmin = function verifyTokenAndAdmin(req, res, next) {
  verifyToken(req, res, function () {
    if (req.user.role.includes('admin')) {
      next();
    } else {
      res.status(401).json({
        error: "you are not admin"
      });
    }
  });
};
exports.verifyTokenAndAdmin = verifyTokenAndAdmin;