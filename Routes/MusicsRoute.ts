import express from 'express';
import {song, album, artist, lyric, picture} from "../controllers/MusicControlers";

const {searchMusic} = require('../controllers/MusicControlers');

const router = express.Router();

router
    .route('/search/:query')
    .get(searchMusic)

router
    .route('/song/:id')
    .get(song);

router
    .route('/album/:id')
    .get(album)

router
    .route('/artist/:id')
    .get(artist)

router
    .route('/lyric/:id')
    .get(lyric)

router
    .route('/picture/:id')
    .get(picture)

module.exports = router;