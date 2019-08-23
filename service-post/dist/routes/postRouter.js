"use strict";

var _post = _interopRequireDefault(require("../models/post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const posts = await _post.default.find({});
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
router.get('/:id', async (req, res) => {
  const {
    id
  } = req.params;

  try {
    const country = await Country.findByPk(id);
    res.json(country);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
router.get('/name/:name', async (req, res) => {
  const {
    name
  } = req.params;

  try {
    const country = await Country.findOne({
      where: {
        name
      }
    });
    res.json(country);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
router.get('/code/:code', async (req, res) => {
  const {
    code
  } = req.params;

  try {
    const country = await Country.findOne({
      where: {
        code
      }
    });
    res.json(country);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
module.exports = router;
//# sourceMappingURL=postRouter.js.map