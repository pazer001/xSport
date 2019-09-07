import express from 'express';
import Sport from '../models/sportModel';

const router    =   express.Router();

router.get('/', async (req, res) => {
    try {
        const sports =   await Sport.find({});
        res.send(sports)
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

module.exports  =   router;