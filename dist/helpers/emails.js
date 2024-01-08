"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var mailer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(info, action) {
    var transporter, subject, emailto, composition, mailOptions, sendEmail;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            transporter = _nodemailer["default"].createTransport({
              service: 'gmail',
              auth: {
                user: process.env.SEND_MAIL,
                pass: process.env.PASS_MAIL
              },
              tls: {
                rejectUnauthorized: false
              }
            });
            console.log(info);
            _context.t0 = action;
            _context.next = _context.t0 === "createrequest" ? 5 : _context.t0 === "CreateUser" ? 9 : _context.t0 === "confirm" ? 13 : _context.t0 === "order" ? 17 : 21;
            break;
          case 5:
            subject = "Request Received";
            emailto = info.email;
            composition = "<p>\n                your Request sent successfully!!!\n            </p>";
            return _context.abrupt("break", 23);
          case 9:
            subject = "account";
            emailto = info.email;
            composition = "<p>\n                 your account created successfully!\n                 to verify your account \n                 <a href='https://electronic-shop.onrender.com/api/auth/verifyemail/".concat(info.emailToken, "'>click here</a>\n             </p>");
            return _context.abrupt("break", 23);
          case 13:
            subject = "user accepted";
            emailto = info.email;
            composition = "<p>\n                 your request accepted you are now our partner this is your credential <br/>\n                 <span>username: </span><h4>".concat(info.username, "</h4><span>password: </span> <h4>").concat(info.password, "</h4>\n             </p>");
            return _context.abrupt("break", 23);
          case 17:
            subject = "Order ";
            emailto = info.email;
            composition = "<p>\n                 your order has been received\n             </p>";
            return _context.abrupt("break", 23);
          case 21:
            subject = "";
            return _context.abrupt("break", 23);
          case 23:
            mailOptions = {
              from: "ELECTRONICS SHOP ".concat(process.env.SEND_MAIL),
              to: emailto,
              subject: subject,
              html: composition
            };
            _context.prev = 24;
            sendEmail = transporter.sendMail(mailOptions, function (err, info) {
              console.log(err);
              console.log(info);
              return sendEmail;
            });
            _context.next = 32;
            break;
          case 28:
            _context.prev = 28;
            _context.t1 = _context["catch"](24);
            console.log(_context.t1);
            return _context.abrupt("return", _context.t1);
          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[24, 28]]);
  }));
  return function mailer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = mailer;
exports["default"] = _default;