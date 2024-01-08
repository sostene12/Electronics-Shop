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
var _Product = _interopRequireDefault(require("../model/Product"));
var _cloudinary = _interopRequireDefault(require("../helpers/cloudinary"));
var _path = _interopRequireDefault(require("path"));
var ProductController = /*#__PURE__*/function () {
  function ProductController() {
    (0, _classCallCheck2["default"])(this, ProductController);
  }
  (0, _createClass2["default"])(ProductController, null, [{
    key: "createProduct",
    value: function () {
      var _createProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var image, userId, newProduct, product;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _cloudinary["default"].uploader.upload(req.file.path);
              case 2:
                image = _context.sent;
                _context.prev = 3;
                userId = req.user.id;
                _context.next = 7;
                return new _Product["default"]({
                  user: userId,
                  title: req.body.title,
                  description: req.body.description,
                  image: image.secure_url,
                  price: req.body.price,
                  color: req.body.color,
                  categories: req.body.categories,
                  inStock: req.body.inStock
                });
              case 7:
                newProduct = _context.sent;
                _context.next = 10;
                return newProduct.save();
              case 10:
                product = _context.sent;
                res.status(201).json(product);
                _context.next = 17;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                res.status(401).json({
                  error: _context.t0.message
                });
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 14]]);
      }));
      function createProduct(_x, _x2) {
        return _createProduct.apply(this, arguments);
      }
      return createProduct;
    }()
  }, {
    key: "getAllProducts",
    value: function () {
      var _getAllProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var products;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Product["default"].find().sort({
                  createdAt: -1
                });
              case 3:
                products = _context2.sent;
                res.status(200).json(products);
                _context2.next = 10;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.status(404).json({
                  error: _context2.t0.message
                });
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function getAllProducts(_x3, _x4) {
        return _getAllProducts.apply(this, arguments);
      }
      return getAllProducts;
    }()
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var file, link;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  file = req.files.file[0].path;
                  link = _cloudinary["default"].uploader.upload(file);
                  res.status(200).json({
                    message: "file uploaded",
                    link: link.secure_url
                  });
                } catch (error) {
                  res.json({
                    error: error.message
                  });
                }
              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function uploadFile(_x5, _x6) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var product;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _Product["default"].findById({
                  _id: req.params.id
                });
              case 3:
                product = _context4.sent;
                if (product) {
                  _context4.next = 8;
                  break;
                }
                res.status(404).send("Product was not found");
                _context4.next = 10;
                break;
              case 8:
                _context4.next = 10;
                return _Product["default"].findByIdAndDelete({
                  _id: req.params.id
                });
              case 10:
                _context4.next = 15;
                break;
              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                res.status(401).json({
                  error: _context4.t0.message
                });
              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }));
      function deleteProduct(_x7, _x8) {
        return _deleteProduct.apply(this, arguments);
      }
      return deleteProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var updatedProduct;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _Product["default"].findByIdAndUpdate(req.params.id, {
                  $set: req.body
                }, {
                  "new": true
                });
              case 3:
                updatedProduct = _context5.sent;
                res.status(200).json(updatedProduct);
                _context5.next = 10;
                break;
              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                res.status(404).json({
                  error: _context5.t0.message
                });
              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function updateProduct(_x9, _x10) {
        return _updateProduct.apply(this, arguments);
      }
      return updateProduct;
    }()
  }, {
    key: "getSingleProduct",
    value: function () {
      var _getSingleProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var product;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _Product["default"].findById(req.params.id);
              case 3:
                product = _context6.sent;
                res.status(200).json(product);
                _context6.next = 10;
                break;
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                res.status(404).json({
                  error: _context6.t0.message
                });
              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));
      function getSingleProduct(_x11, _x12) {
        return _getSingleProduct.apply(this, arguments);
      }
      return getSingleProduct;
    }()
  }]);
  return ProductController;
}();
var _default = ProductController;
exports["default"] = _default;