"use strict";

var _post = _interopRequireDefault(require("../models/post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router();
router.get('/', async (req, res) => {
  const {
    authorization
  } = req.headers;
  const personId = authorization;

  try {
    const posts = await _post.default.aggregate([{
      $match: {}
    }, {
      $project: {
        isLiked: {
          $in: [personId, '$likes']
        },
        content: "$content",
        personId: "$personId",
        tags: "$tags",
        likesLength: {
          $size: "$likes"
        }
      }
    }]);
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
router.patch('/like/:_id', async (req, res) => {
  const {
    _id
  } = req.params;
  const {
    authorization
  } = req.headers;
  const personId = authorization;

  try {
    const posts = await _post.default.updateOne({
      _id
    }, {
      $push: {
        likes: personId
      },
      isLiked: true
    });
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
router.patch('/dislike/:_id', async (req, res) => {
  const {
    _id
  } = req.params;
  const {
    authorization
  } = req.headers;
  const personId = authorization;

  try {
    const posts = await _post.default.updateOne({
      _id
    }, {
      $pull: {
        likes: personId
      },
      isLiked: false
    });
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
router.post('/', async (req, res) => {
  const {
    content
  } = req.body;
  const {
    authorization
  } = req.headers;
  const personId = authorization;

  try {
    const posts = await _post.default.create({
      content,
      personId,
      tags: [],
      likes: []
    });
    res.send(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json();
  }
});
module.exports = router;
//# sourceMappingURL=postRouter.js.map