import * as game_util from './game_util';
import displaySongList_v1 from './songList_v1';

let parentDiv = document.getElementById("gameScreen");

let fXSelect = document.createElement("audio");
fXSelect.id = "fXSelect";
fXSelect.src = "./dist/assets/sounds/select.ogg";
document.getElementById("audioChannel").appendChild(fXSelect);
fXSelect.addEventListener("ended", function () { fXSelect.load(); });

let introText1 = document.createElement("div");
introText1.id = "theIntro1";
introText1.innerText = "eventListener Revolution";

let introText2 = document.createElement("div");
introText2.id = "theIntro2";
introText2.innerText = "click to begin";

setTimeout(function () { parentDiv.appendChild(introText1); }, 1500);
setTimeout(function () { parentDiv.appendChild(introText2); }, 4500);
parentDiv.addEventListener('click', loadMenu, {once: true} );


export default function loadMenu(evt = null) {
    fXSelect.play();
    game_util.screenFade();
    setTimeout( function() {
        if (introText1) { introText1.remove(); }
        if (introText2) { introText2.remove(); }
        game_util.playSelectMusic();
        let bgSongList = document.createElement("img");
        bgSongList.id = "menuBackground"
        bgSongList.src = "./dist/assets/gui/bg.png";
        parentDiv.appendChild(bgSongList);
        bgSongList.addEventListener( "animationend", () => {
            displaySongList_v1(parentDiv)}, {once: true} 
        );
    }, 2000);
}