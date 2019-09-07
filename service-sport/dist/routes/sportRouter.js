"use strict";

var _express = _interopRequireDefault(require("express"));

var _sportModel = _interopRequireDefault(require("../models/sportModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', async (req, res) => {
  try {
    const sports = await _sportModel.default.find({});
    res.send(sports);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
module.exports = router;
//# sourceMappingURL=sportRouter.js.map