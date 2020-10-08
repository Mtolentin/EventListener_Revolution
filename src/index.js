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


function loadMenu(evt = null) {
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


    // setTimeout(() => {
    //     trackList.forEach((track) => {
    //         debugger
    //         track.className = "trackSelectable";
    //     });
    // })


// Testing Codes

{/* <script>
var currentPlayer;
function EvalSound(soundobj) {

 var thissound=document.getElementById(soundobj);
 if(currentPlayer  && currentPlayer != thissound) {
  currentPlayer.pause(); 
 }
 if (thissound.paused)
        thissound.play();
    else
    thissound.pause();
    thissound.currentTime = 0;
     currentPlayer = thissound;
}
</script> */}

// function initButtonTest(evt) {
//     fXSelect.play();
//     const offset = canvas.getBoundingClientRect();
//     let rect = {
//         x: 250 + offset.x,
//         y: 350 + offset.y,
//         width: 200,
//         height: 100
//     };
//     const pos = {
//         x: evt.clientX,
//         y: evt.clientY
//     };
    

    // if (pos.x > rect.x &&
    //     pos.x < rect.x + rect.width &&
    //     pos.y < rect.y + rect.height &&
    //     pos.y > rect.y) {


//         game.play(canvas, initButtonTest, "testSong");

//     } else {
//         console.log("Outside");
//     }
// }



