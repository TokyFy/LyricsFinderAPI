import {Client as GClient} from 'genius-lyrics';
import {IMusic, IMusicFinder} from "./index";

export class GeniusFinder implements IMusicFinder {
    private client: GClient;

    constructor() {
        this.client = new GClient();
    }

    async find(query: string): Promise<IMusic> {
        try {
            const songs = await this.client.songs.search(query);

            const song = songs[0];

            return {
                Title: song.title,
                Full_title: song.fullTitle,
                Artist_art_url: song.artist.thumbnail,
                Album_art_url: song.image,
                lyrics: await song.lyrics(true)
            }
        } catch (err) {
            throw err
        }
    }
}
