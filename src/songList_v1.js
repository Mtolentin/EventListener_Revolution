import dibujar from './level';
// import design from './designMode/listen';

export default function displaySongList_v1(parentDiv) {

    document.getElementById("fader").remove();
    
    let menuTitle = document.createElement("div");
    menuTitle.id = "txtSelectMusic";
    menuTitle.innerText = "Select Music";
    parentDiv.appendChild(menuTitle);

    let fXClick = document.createElement("audio");
    fXClick.id = "fXClick";
    fXClick.src = "./dist/assets/sounds/click.ogg";
    document.getElementById("audioChannel").appendChild(fXClick);
    
    let subTxt = document.createElement("div");
    subTxt.id = "txtSubTxt";
    subTxt.innerText = "Hover to preview and click to begin!";
    parentDiv.appendChild(subTxt);

    let trackList = [];
    setTimeout( () => {
        trackList.push(createTrack("nirvana", "trackNirvana"));
    }, 750);

    setTimeout( () => {
        trackList.push(createTrack("danzaKaduro", "trackDanzaKaduro"));
    }, 1500);

    setTimeout( () => {
        trackList.push(createTrack("cebuana", "trackCebuana"));
        trackList[trackList.length - 1].addEventListener("animationend", 
            makeSelection(), {once: true});
    }, 2250);
    
    function createTrack(tSrc, tID) {
        let newTrack = document.createElement("img");
        let newPrev = document.createElement("audio");
        newTrack.src = "./dist/assets/gui/banners/" + tSrc + ".png";
        newPrev.src = "./dist/assets/songs/previews/" + tSrc + ".ogg";
        newTrack.className = "trackImg";
        newTrack.id = tID;
        newTrack.preload = "auto";
        newTrack.muted = true;
        newPrev.id = tID + "a";
        newPrev.loop = true;
        parentDiv.appendChild(newTrack);
        document.getElementById("audioChannel").appendChild(newPrev);
        newTrack.onmouseover = () => { newPrev.play(); };
        newTrack.onmouseout = () => { newPrev.pause(); newPrev.load(); };
        return newTrack;
    }
    
    function makeSelection() {
        setTimeout( () => {
            subTxt.style.animationName = "intro4";
            trackList.forEach( (track) => {
                track.onclick = () => { beginStage(track.id); };
                track.classList.remove("trackImg");
                track.className = "trackSelectable";
                document.getElementById(track.id+"a").muted = false;
            });
        }, 750);
    }

    function beginStage(trackID) {
        document.getElementById("fXSelect").play();
        let bgfade2 = document.createElement("div");
        bgfade2.id = "fader2";
        parentDiv.appendChild(bgfade2);
        setTimeout( () => {
            let del = parentDiv.firstElementChild;
            while (parentDiv.childNodes.length > 1) {
                if (del.id == "fader2") { continue; }
                parentDiv.removeChild(del);
                del = parentDiv.firstElementChild;
            }
            let clearPrevs = document.getElementById("audioChannel");
            del = clearPrevs.lastElementChild;
            while (clearPrevs.childNodes.length > 1) {
                if (del.id == "fXSelect") { continue; }
                clearPrevs.removeChild(del);
                del = clearPrevs.lastElementChild;
            }
            dibujar(trackID);
            // design(trackID);
        }, 3000)
    }
}

    // function deleteChild() { 
    //     var e = document.querySelector("ul"); 
        
    //     //e.firstElementChild can be used. 
    //     var child = e.lastElementChild;  
    //     while (child) { 
    //         e.removeChild(child); 
    //         child = e.lastElementChild; 
    //     } 
    // } 


    // let nirvana = document.createElement("img");
    // nirvana.src = "./dist/assets/gui/banners/nirvana.png";
    // nirvana.className = "trackImg";
    // nirvana.id = "trackNirvana";
    
    // let danzaKaduro = document.createElement("img");
    // danzaKaduro.src = "./dist/assets/gui/banners/danzaKaduro.png";
    // danzaKaduro.className = "trackImg";
    // danzaKaduro.id = "trackDanzaKaduro";
    
    // let cebuana = document.createElement("img");
    // cebuana.src = "./dist/assets/gui/banners/cebuana.png";
    // cebuana.className = "trackImg";
    // cebuana.id = "trackCebuana";

    // parentDiv.appendChild(nirvana);

    // setTimeout(function () { parentDiv.appendChild(danzaKaduro); }, 2000);

    // setTimeout(function () { parentDiv.appendChild(cebuana); }, 4000);