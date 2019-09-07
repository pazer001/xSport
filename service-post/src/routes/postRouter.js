const express   =   require('express');
import Post from '../models/post';

const router    =   express.Router();

router.get('/', async (req, res) => {
    const {personId = 'A12b'}    =   req.headers;
    try {
        const posts =   await Post.aggregate([
            {$match: {}},
            {$project: {
                    isLiked: {$in: [personId, '$likes']},
                    content: "$content",
                    personId: "$personId",
                    tags: "$tags",
                    likedLength: {$size: '$likes'}}
            }]);

        res.send(posts)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.patch('/like/:_id', async (req, res) => {
    const {_id}  =   req.params;
    const {personId}    =   req.body;
    try {
        const posts =   await Post.updateOne({_id}, {$push: {likes: personId}});
        res.send(posts)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

module.exports  =   router;