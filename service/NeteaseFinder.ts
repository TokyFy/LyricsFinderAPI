import NeteaseMusic from "simple-netease-cloud-music";
import {IAlbum, IMusicFinder, ISongs, ILyrics, IArtist} from "./musicService";


interface IRawSearch {
    result: {
        songs: IRawSong[],
    }
}

interface IRawSong {
    name: string,
    id: string,
    ar: {
        id: string,
        name: string
    }[],
    al: {
        id: string,
        name: string,
        picUrl?: string,
        pic_str: string
    },
    publishTime: number,
    cd?: string,
}

interface IRawArtist {
    artist: {
        musicSize: number,
        albumSize: number,
        picUrl: string,
        name: string,
        id: number,
    }
    hotSongs: IRawSong[];
}

interface IRawAlbum {
    songs: IRawSong[],
    album: {
        name: string,
        id: string,
        picUrl: string,
        company: string,
        artists: {
            name: string,
            id: string,
            img1v1Url: string
        }[],
        songs: IRawSong[]
    }
}

interface IRawLyrics {
    lrc: {
        version: number,
        lyric: string,
    }
}


export class NeteaseFinder implements IMusicFinder {
    private nm: NeteaseMusic;

    constructor() {
        this.nm = new NeteaseMusic();
    }

    async search(query: string): Promise<ISongs[]> {
        const data = await this.nm.search(query, 1, 5) as IRawSearch;

        return data.result.songs.map((song) => {
            const Title = song.name;
            const songID = song.id;

            const artists: Array<{ id: string, name: string }> = song.ar.map((el: { id: string, name: string }) => {
                return {id: el.id, name: el.name}
            });

            const AlbumId = song.al.id;
            const AlbumName = song.al.name;
            const AlbumArts = song.al.picUrl;
            const publishTime = song.publishTime;


            return {
                title: Title,
                id: songID,
                Album: {id: AlbumId, name: AlbumName},
                Artists: artists,
                AlbumArts: AlbumArts,
                RealiseTime: publishTime
            };
        });
    }

    async song(id: string): Promise<ISongs> {
        const data = await this.search(id);
        return data[0];
    }

    async album(id: string): Promise<IAlbum> {
        const data = await this.nm.album(id) as IRawAlbum;

        const AlbumTitle = data.album.name;
        const AlbumId = data.album.id;
        const AlbumArt = data.album.picUrl;
        const company = data.album.company;

        const artists = data.album.artists.map((el) => {
            return {
                id: el.id,
                name: el.name,
                picUrl: el.img1v1Url
            }
        });

        const songs: ISongs[] = data.songs.map((el) => {
            return {
                id: el.id,
                AlbumArts: AlbumArt,
                Album: {name: AlbumTitle, id: AlbumId},
                title: el.name,
                Artists: el.ar
            }
        })

        return {
            title: AlbumTitle,
            id: AlbumId,
            AlbumArts: AlbumArt,
            artists: artists,
            company: company,
            songs: songs,
        };
    }

    async artist(id: string): Promise<IArtist> {
        const data = await this.nm.artist(id) as IRawArtist;

        const ArtistName = data.artist.name;
        const musicSize = data.artist.musicSize;
        const albumSize = data.artist.albumSize;
        const picUrl = data.artist.picUrl;

        const hotSongs = data.hotSongs.map((el) => {
            return {
                title: el.name,
                id: el.id,
                Artists: el.ar,
                Album: {
                    id: el.al.id,
                    name: el.al.name,
                },
                AlbumArtsID: el.al.pic_str,
            }
        })

        return {
            name: ArtistName,
            id: id,
            picUrl: picUrl,
            musicSize: musicSize,
            albumSize: albumSize,
            hotSong: hotSongs
        };
    }

    async lyrics(id: string): Promise<ILyrics> {
        const data = await this.nm.lyric(id) as IRawLyrics;
        const version = data.lrc.version;
        const lyrics = data.lrc.lyric;

        return {
            version: version,
            lyric: lyrics
        }
    }
}
