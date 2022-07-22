import express from 'express';

const { getMusicInfos } = require('../controllers/MusicControlers');

const router = express.Router();

router
    .route('/:query')
    .get(getMusicInfos);

module.exports = router;