# eventListener_Revolution

## [Hosted on Github Pages](https://mtolentin.github.io/)

This is a tribute to Konami’s hit arcade rhythm game Dance Dance Revolution,
implemented in vanilla Javascript with HTML media elements, canvas, 
and CSS animations. Try to get the highest possible combo and show that your
musical timing as as good as the top players of the 90s and early 2000s!


## Technologies Used

The initial three song release plays a HTML `<video>` Element with a 2d-`canvas` 
area superimposed for game arrows to scroll. Arrows and other game objects 
appear on the screen based on a preloaded `array` whose entries are a paired 
timestamp (milleseconds after start of the video) and game object string.

```javascript
let danzaKaduro = [];

danzaKaduro = danzaKaduro.concat(
    [[12345, "Ready"], [13345, "Go"], [14345, "Clear"]]
);

danzaKaduro = danzaKaduro.concat(
    [[12345, "ArrowRight"], [13345, "ArrowRight"], [14345, "ArrowRight"],
    [12345, "ArrowRight"], [13345, "ArrowRight"], [14345, "ArrowRight"]]
);

export default danzaKaduro;
```

`function drawGameObject` manipulates both the canvas element and 
`<div>`,`<img>` elements based on the `type` argument. If the preloaded `array`
contains and `"Arrow____"` string, it is first processed by the `ArrowQueue`
module. The same animated arrow is used for all directions, with the source
image rotated with the appopriate `arrowParams`.

```javascript
ArrowQueue.prototype.spawn = function spawn(direction, bpm) {
    let arrow = {
        direction: direction,
        pos: 600,
        spd: bpm / 3.4,
        canClick: true
    }
    this.arrows.push(arrow);
}
```

`drawGameObject` can also play `<audio>` elements depending 
on the object being drawn.  

```javascript
function drawGameObject(type, direction = "ArrowLeft", pos = 0) {
    if (typeof type !== "string") {
        let arrowParams = [];

        switch (direction) {
            case "ArrowLeft":
                arrowParams.push([206, 69, Math.PI * 3 / 2, -59, -42]);
                arrowParams.push([pos * -1,0]);
                break;
            case "ArrowDown":
                arrowParams.push([335, 69, Math.PI, -66, -59]);
                arrowParams.push([0,pos * -1]);
                break;
            case "ArrowUp":
                arrowParams.push([400, 10, 0, 0, 0]);
                arrowParams.push([0,pos]);
                break;
            case "ArrowRight":
                arrowParams.push([592, 69, Math.PI / 2, -59, -44]);
                arrowParams.push([pos,0]);
                break;
            default:
        }
        context.save();
        context.translate(arrowParams[0][0], arrowParams[0][1]);
        context.rotate(arrowParams[0][2]);
        context.translate(arrowParams[0][3], arrowParams[0][4]);
        context.drawImage(
            type, column * frameWidth, row * frameHeight,
            frameWidth, frameHeight, arrowParams[1][0], 
            arrowParams[1][1], frameWidth, frameHeight);
        context.restore();
    } else {
        theQueue.arrows.splice(0,1);
        switch(type) {
            case "Ready":
                banner.className = "";
                banner.classList.add("ready");
                fXReady.play();
                break;
            case "Go":
                banner.classList.add("offline");
                banner.classList.remove("ready");
                banner.src = "./dist/assets/gui/go.png";
                banner.classList.remove("offline");
                banner.classList.add("go");
                fXGo.play();
                break;
            default:
                banner.className = "";
                banner.classList.add("offline");
        }
    }
}
```

`drawGameObject` is placed in a `setInterval` function along with the
eponymous eventListener `registerPress` which uses an instance of `ArrowQueue`
to evaluate the precision of the user's input.  

```javascript
function registerPress(evt) {
            evt.preventDefault();
            if (evt.key === "Escape") { clearLevel(); }
            let timingGrade = theQueue.judge(evt.key);
            if (timingGrade > 0) {
                verdict.className = "";
                void verdict.offsetWidth;
                switch (timingGrade) {
                    case 4: verdict.classList.add("perfect");
                        comboCount += 1; break;
                    case 3: verdict.classList.add("great");
                        comboCount += 1; break;
                    case 2: verdict.classList.add("good"); 
                        comboCount = 0; break;
                    case 1: verdict.classList.add("boo"); 
                        comboCount = 0; break;
                }
                if (comboCount > 0) {
                    switch (evt.key) {
                        case "ArrowLeft": createParticles(218, 69); break;
                        case "ArrowDown": createParticles(342, 69); break;
                        case "ArrowUp": createParticles(458, 69); break;
                        case "ArrowRight": createParticles(587, 69); break;
                    }
                    if (comboCount > 2) {
                        comboScore.innerText = `${comboCount} combo`;
                        comboScore.className = "";
                    }
                } else {
                    comboScore.className = "";
                    comboScore.classList.add("empty");
                }
            }
        }
```

## Recording Mode

`recordingQueue.js` is provided along with the default `arrowQueue.js` module to
make `queueArrow` generation and timing as intuitive as possible. By default,
all `queueArrows` in `AarowQueue` start in ther `600px` position - the lowest
point of the `gameScreen`. The `recordingQueue.js` version reverses the scroll
starting from exact overlapping of the `stageArrow` to record the delay amount
into `delays` to be subracted from the corresponding entries in `scribe`, which
are the exact times the arrows were pressed during recording.

```javascript
ArrowQueue.prototype.move = function move() {
    if (this.arrows[0]) {
        this.arrows.forEach( arrow => {
            arrow.pos += arrow.spd;
            if (arrow.pos >= 600) {
                let delay = Date.now() - arrow.hitTime;
                console.log(
                    [arrow.hitTime, delay, arrow.hitTime - delay]);
                this.scribe.push([arrow.hitTime - delay, arrow.direction]);
                this.delays.push(delay);
                this.arrows.splice(this.arrows.indexOf(arrow),1);
            }
        });
    }
}
```

What will become the `array` to be loaded into regular mode is outputted once
the song is finished playing: 

```javascript
let cebuana = [ [4700, "Ready"] , [6300, "Go"] , [7687, "Clear"] , 
    [7688, "ArrowRight"] , [7683, "ArrowLeft"] , [9298, "ArrowRight"] , 
    [9623, "ArrowDown"] , [10493, "ArrowLeft"] , [10853, "ArrowDown"] , 
    [11730, "ArrowUp"] , [12113, "ArrowDown"] , [12917, "ArrowUp"] , 
    [13328, "ArrowLeft"] , [14170, "ArrowUp"] , [14529, "ArrowRight"] , 
    [15381, "ArrowRight"] , [15767, "ArrowDown"] ] 
```

## Future Updates

Check back periodically for additional songs and features!