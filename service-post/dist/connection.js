"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect('mongodb://localhost:27017/x', {
  useNewUrlParser: true
});

var _default = _mongoose.default;
exports.default = _default;
//# sourceMappingURL=connection.js.map