import { proxy} from "valtio";

const state = proxy({
// the intro checks to see if we are currently in the home page or not.
intro: true,
// this is basically a default color.
color: "#EFBD48",
// checks to see if the logo is currently been displayed.
isLogoTexture: true,
// 
isFullTexture:false,
logoDecal : "./threejs.png",
fullDecal : "./threejs.png"
})
   
export default state;