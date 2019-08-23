"use strict";

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _compression = _interopRequireDefault(require("compression"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postRouter = require('./routes/postRouter');

const PORT = 8083;
const SERVICE_NAME = 'post';
const app = (0, _express.default)(); // Basic middleware

app.use((0, _helmet.default)());
app.use((0, _compression.default)({
  level: 9
}));
app.use(_bodyParser.default.json());
app.use('/post', postRouter);
app.listen(PORT, () => console.log(`Service ${SERVICE_NAME} is running on port ${PORT}`));
//# sourceMappingURL=index.js.map