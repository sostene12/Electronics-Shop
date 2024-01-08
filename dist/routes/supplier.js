"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _supplier = _interopRequireDefault(require("../controllers/supplier"));
var _multer = _interopRequireDefault(require("../helpers/multer"));
var _verify = require("../middlewares/verify");
var route = _express["default"].Router();
route.post("/create", _verify.verifyTokenAndSupplier, _multer["default"].single('image'), _supplier["default"].createProduct);
route.get("/", _supplier["default"].getAllProducts);
route["delete"]('/delete/:id', _supplier["default"].deleteProduct);
route.put('/update/:id', _supplier["default"].updateProduct);
route.get('/:id', _supplier["default"].getSingleProduct);
route.get('/product', _verify.verifyTokenAndSupplier, _supplier["default"].getByUserId);
var _default = route;
exports["default"] = _default;