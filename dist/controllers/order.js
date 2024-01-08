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
var _Order = _interopRequireDefault(require("../model/Order"));
var OrderController = /*#__PURE__*/function () {
  function OrderController() {
    (0, _classCallCheck2["default"])(this, OrderController);
  }
  (0, _createClass2["default"])(OrderController, null, [{
    key: "createOrder",
    value: function () {
      var _createOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var newOrder, order;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                newOrder = new _Order["default"](req.body);
                _context.next = 4;
                return newOrder.save();
              case 4:
                order = _context.sent;
                res.status(201).json({
                  message: 'order created successfully',
                  order: order
                });
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                res.status(400).json({
                  error: _context.t0.message
                });
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      function createOrder(_x, _x2) {
        return _createOrder.apply(this, arguments);
      }
      return createOrder;
    }()
  }, {
    key: "updateOrder",
    value: function () {
      var _updateOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var updatedOrder;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Order["default"].findByIdAndUpdate(req.params.id, {
                  $set: req.body
                }, {
                  "new": true
                });
              case 3:
                updatedOrder = _context2.sent;
                _context2.next = 9;
                break;
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                res.status().json({
                  error: _context2.t0.message
                });
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));
      function updateOrder(_x3, _x4) {
        return _updateOrder.apply(this, arguments);
      }
      return updateOrder;
    }()
  }, {
    key: "deleteOrder",
    value: function () {
      var _deleteOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Order["default"].findByIdAndDelete({
                  _id: req.params.id
                });
              case 3:
                res.status(200).json({
                  message: "Order deleted!"
                });
                _context3.next = 9;
                break;
              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                res.status(401).json({
                  error: _context3.t0.message
                });
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));
      function deleteOrder(_x5, _x6) {
        return _deleteOrder.apply(this, arguments);
      }
      return deleteOrder;
    }()
  }, {
    key: "getUserOrders",
    value: function () {
      var _getUserOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var order;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _Order["default"].findOne({
                  _id: req.params.id
                });
              case 3:
                order = _context4.sent;
                res.status(200).json(order);
                _context4.next = 10;
                break;
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                res.status(401).json({
                  error: _context4.t0.message
                });
              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function getUserOrders(_x7, _x8) {
        return _getUserOrders.apply(this, arguments);
      }
      return getUserOrders;
    }()
  }, {
    key: "getAllOrders",
    value: function () {
      var _getAllOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var orders;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _Order["default"].find();
              case 3:
                orders = _context5.sent;
                res.status(200).json(orders);
                _context5.next = 9;
                break;
              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function getAllOrders(_x9, _x10) {
        return _getAllOrders.apply(this, arguments);
      }
      return getAllOrders;
    }()
  }, {
    key: "monthlyIncome",
    value: function () {
      var _monthlyIncome = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function monthlyIncome(_x11, _x12) {
        return _monthlyIncome.apply(this, arguments);
      }
      return monthlyIncome;
    }()
  }]);
  return OrderController;
}();
var _default = OrderController;
exports["default"] = _default;