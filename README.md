# LyricsFinderAPI

It's a wrapper for Netease Cloud Music (which has a massive music collection and lyrics too)

## 📦 Setup

```sh

yarn install

yarn run dev

```

the app will start on `http://localhost:3000`

## 🚀 Usage

* {YOURSERVER}/api/rest/search/{Clairo Hello?}
* {YOURSERVER}/api/rest/song/{SONG_ID}
* {YOURSERVER}/api/rest/artist/{ARTIST_ID}
* {YOURSERVER}/api/rest/album/{ALBUM_ID}
* {YOURSERVER}/api/rest/lyric/{SONG_ID}

if localy YOURSERVER = `http://localhost:3000`

## 🥰 Contributing

Contributions, issues and feature requests are welcome!

## 📝 Note

I you prefer buil your own API wrapper , just look at the module /service/NeteaseFinder.ts :

```typescript

import {NeteaseFinder} from "../service";

const finder = new NeteaseFinder();

(async () => {
    const Musics = await finder.search('Clairo Hello');
    console.log(Musics)
})()

```

## ✨ Support

Give a ⭐️ if this project helped you!
