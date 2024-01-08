"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _product = _interopRequireDefault(require("../controllers/product"));
var _multer = _interopRequireDefault(require("../helpers/multer"));
var _verify = require("../middlewares/verify");
var route = _express["default"].Router();
route.post("/create", _verify.verifyTokenAndSupplier, _multer["default"].single('image'), _product["default"].createProduct);
route.get("/", _product["default"].getAllProducts);
route["delete"]('/delete/:id', _product["default"].deleteProduct);
route.put('/update/:id', _product["default"].updateProduct);
route.get('/:id', _product["default"].getSingleProduct);
var _default = route;
exports["default"] = _default;