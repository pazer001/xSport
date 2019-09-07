const express = require('express');
import Post from '../models/post';

const router = express.Router();

router.get('/', async (req, res) => {
    const {authorization} = req.headers;
    const personId  =   authorization;

    try {
        const posts = await Post.aggregate([
            {$match: {}},
            {
                $project: {
                    isLiked: {$in: [personId, '$likes']},
                    content: "$content",
                    personId: "$personId",
                    tags: "$tags",
                    likesLength: {$size: "$likes"}
                }
            }
        ]);

        res.send(posts)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.patch('/like/:_id', async (req, res) => {
    const {_id} = req.params;
    const {authorization} = req.headers;
    const personId  =   authorization;

    try {
        const posts = await Post.updateOne(
            {_id},
            {
                $push: {likes: personId},
                isLiked: true
            }
        );
        res.send(posts)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.patch('/dislike/:_id', async (req, res) => {
    const {_id} = req.params;
    const {authorization} = req.headers;
    const personId  =   authorization;

    try {
        const posts = await Post.updateOne(
            {_id},
            {
                $pull: {likes: personId},
                isLiked: false
            }
        );
        res.send(posts)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.post('/', async (req, res) => {
    const {content} = req.body;
    const {authorization} = req.headers;
    const personId  =   authorization;

    try {
        const posts = await Post.create(
            {
                content,
                personId,
                tags: [],
                likes: []
            }
        );
        res.send(posts)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

module.exports = router;