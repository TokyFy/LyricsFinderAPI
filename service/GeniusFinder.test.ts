import {GeniusFinder} from "./GeniusFinder";

const finder = new GeniusFinder();

(async ()=>{
   const song = await finder.find('Hello clairo');

   console.log(song);
})();