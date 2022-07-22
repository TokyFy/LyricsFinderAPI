import {GeniusFinder} from "../service";
import {RequestHandler} from "express";

const finder = new GeniusFinder();

const getMusicInfos : RequestHandler =  async (req  , res) => {
    try {
        const query = req.params.query;
        console.log(query);
        const Music =  await finder.find(query);

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

export {getMusicInfos};