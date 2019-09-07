"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sportSchema = new _connection.default.Schema({
  player: String,
  team: String,
  league: String,
  country: String,
  sport: Number
});

const Sport = _connection.default.model('Sport', sportSchema);

var _default = Sport;
exports.default = _default;
//# sourceMappingURL=sportModel.js.map