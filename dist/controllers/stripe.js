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
var _stripe = _interopRequireDefault(require("stripe"));
var stripe = new _stripe["default"](process.env.STRIPE_KEY);
var StripeController = /*#__PURE__*/function () {
  function StripeController() {
    (0, _classCallCheck2["default"])(this, StripeController);
  }
  (0, _createClass2["default"])(StripeController, null, [{
    key: "payment",
    value: function () {
      var _payment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stripe.ChargesResource.create({
                  source: req.body.tokenId,
                  amount: req.body.amount,
                  currency: 'usd'
                }, function (stripeError, stripeRes) {
                  if (stripeError) {
                    res.status(500).json(stripeError);
                  } else {
                    res.status(200).json(stripeRes);
                  }
                });
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function payment(_x, _x2) {
        return _payment.apply(this, arguments);
      }
      return payment;
    }()
  }, {
    key: "stripePay",
    value: function () {
      var _stripePay = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, name, amount, paymentIntent, clientSecret;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body = req.body, name = _req$body.name, amount = _req$body.amount;
                if (name) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", res.status(400).json({
                  message: "Please enter the name"
                }));
              case 4:
                _context2.next = 6;
                return stripe.paymentIntents.create({
                  amount: amount * 100,
                  metadata: {
                    name: name
                  },
                  currency: "usd",
                  payment_method_types: ['card']
                });
              case 6:
                paymentIntent = _context2.sent;
                clientSecret = paymentIntent.client_secret;
                res.status(200).json({
                  message: "payment iNitiated",
                  clientSecret: clientSecret
                });
                _context2.next = 15;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                res.status(500).json({
                  error: _context2.t0.message
                });
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));
      function stripePay(_x3, _x4) {
        return _stripePay.apply(this, arguments);
      }
      return stripePay;
    }()
  }]);
  return StripeController;
}();
var _default = StripeController;
exports["default"] = _default;