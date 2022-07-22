export * from './GeniusFinder';

export interface IMusic {
    Title:string
    Full_title:string
    Artist_art_url:string
    Album_art_url:string
    lyrics:string
}

export interface IMusicFinder {
    find : (query : string) => Promise<IMusic>
}
