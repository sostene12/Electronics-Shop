"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;
var validate = function validate(schema) {
  return function (req, res, next) {
    var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error;
    if (error) {
      console.log(error);
      res.status(400).json(error.details[0].message);
    }
    next();
  };
};
exports.validate = validate;