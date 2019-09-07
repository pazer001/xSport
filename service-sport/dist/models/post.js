"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postSchema = new _connection.default.Schema({
  content: String,
  personId: Number,
  tags: [String]
});

const Post = _connection.default.model('Post', postSchema);

var _default = Post;
exports.default = _default;
//# sourceMappingURL=sportModel.js.map