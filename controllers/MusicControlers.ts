import {NeteaseFinder} from "../service";
import {RequestHandler} from "express";

const finder = new NeteaseFinder();

const searchMusic : RequestHandler =  async (req  , res) => {
    try {
        const query = req.params.query;
        console.log(query);
        const Music =  await finder.search(query);

        res.status(200).json({
            status: 'success',
            data: {
                Music
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            error: "Failed to find the musics"
        })
    }
};

const song : RequestHandler = async (req , res) =>{
    try {
        const id = req.params.id;
        const song =  await finder.song(id);

        res.status(200).json({
            status: 'success',
            data: {
                song
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            error: `Failed to find song with de ID : ${req.params.id}`
        })
    }
}

const album : RequestHandler = async (req ,res)=>{
    try {
        const id = req.params.id;
        const album =  await finder.album(id);

        res.status(200).json({
            status: 'success',
            data: {
                album
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            error: `Failed to find Album with de ID : ${req.params.id}`
        })
    }
}

const artist : RequestHandler = async (req , res) => {
    try {
        const id = req.params.id;
        const artist =  await finder.artist(id);

        res.status(200).json({
            status: 'success',
            data: {
                artist
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            error: `Failed to find Artist with de ID : ${req.params.id}`
        })
    }
}

const lyric : RequestHandler = async (req , res) =>{
    try {
        const id = req.params.id;
        const lyrics =  await finder.lyrics(id);

        res.status(200).json({
            status: 'success',
            data: {
                lyrics
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            error: `Failed to find Lyrics with de ID : ${req.params.id}`
        })
    }
}


const picture : RequestHandler  = async (req , res) =>{
    try {
        const id = req.params.id;
        const picture =  await finder.albumCover(id);

        res.status(200).json({
            status: 'success',
            data: {
                picture
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            error: `Failed to find AlbumCover with de ID : ${req.params.id}`
        })
    }
}
export {searchMusic , song , album , artist , lyric , picture};