const ArrowQueue = require("./arrowQueue");
const soldTheWorld = require("./arrowArrays/soldTheWorld");
const danzaKaduro = require("./arrowArrays/danzaKaduro");
const cebuana = require("./arrowArrays/cebuana");

export default function dibujar(chosenSong) {
    document.getElementById("fader2").remove();
    let parentDiv = document.getElementById("gameScreen");
    let canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    canvas.id = "theCanvas";
    parentDiv.appendChild(canvas);
    
    let audioChannel = document.getElementById("audioChannel");

    let fXReady = document.createElement("audio");
    fXReady.id = "fXReady";
    fXReady.src = "./dist/assets/sounds/rUReady.ogg";
    audioChannel.appendChild(fXReady);

    let fXGo = document.createElement("audio");
    fXGo.id = "fXGo";
    fXGo.src = "./dist/assets/sounds/go.ogg";
    audioChannel.appendChild(fXGo);

    let fXCheering = document.createElement("audio");
    fXCheering.id = "fXCheering";
    fXCheering.src = "./dist/assets/sounds/cheering.ogg";
    audioChannel.appendChild(fXCheering);
    
    let verdict = document.createElement("img");
    verdict.src = "./dist/assets/gui/judge.png";
    verdict.id = "verdict";
    verdict.classList.add("empty");
    parentDiv.appendChild(verdict);
    parentDiv.insertBefore(verdict, canvas);

    let banner = document.createElement("img");
    banner.id = "banner";
    banner.classList.add("offline");
    banner.src = "./dist/assets/gui/ready.png";
    parentDiv.appendChild(banner);
    parentDiv.insertBefore(banner, canvas);

    let comboScore = document.createElement("div");
    comboScore.innerText = "0 combo";
    comboScore.id = "comboScore";
    parentDiv.appendChild(comboScore);

    let context = canvas.getContext("2d");
    let particles = [];
    let newVideo = document.createElement("video");
    newVideo.id = "playing";
    newVideo.controls = false;
    newVideo.muted = false;
    newVideo.width = "800";
    newVideo.height = "600";
    let speed = 0;
    let stageQueue = [];
    let comboCount = 0;

    switch (chosenSong) {
        case "trackNirvana":
            newVideo.src = "./dist/assets/songs/soldTheWorld.mp4";
            stageQueue = soldTheWorld.default;
            speed = 20;
            break;
        case "trackDanzaKaduro":
            newVideo.src = "./dist/assets/songs/danzaKaduro.mp4";
            stageQueue = danzaKaduro.default;
            speed = 20;
            break;
        case "trackCebuana":
            newVideo.src = "./dist/assets/songs/cebuana.mp4";
            stageQueue = cebuana.default;
            speed = 20;
            break;
    }

    parentDiv.appendChild(newVideo);
    parentDiv.insertBefore(newVideo, canvas);
    let stageArrow = new Image();
    let queueArrow = new Image();
    stageArrow.src = "./dist/assets/gui/arrows/aStage.png";
    queueArrow.src = "./dist/assets/gui/arrows/aNote.png";

    function Particle( x, y ) {
        this.x = x;
        this.y = y;
        this.coordinates = [];
        this.coordinateCount = 7;
        while( this.coordinateCount-- ) {
            this.coordinates.push( [ this.x, this.y ] );
        }

        this.angle = Math.random() * Math.PI * 2;
        this.speed = 1 + Math.random() * 9 ;
        this.friction = 0.95;
        this.gravity = 1;
        this.hue = 70 + Math.random() * 100;
        this.brightness = 50 + Math.random() * 30
        this.alpha = 1;
        this.decay = 0.01 + Math.random() * 0.015;
    }

    Particle.prototype.update = function( index ) {
        this.coordinates.pop();
        this.coordinates.unshift( [ this.x, this.y ] );
        this.speed *= this.friction;
        this.x += Math.cos( this.angle ) * this.speed;
        this.y += Math.sin( this.angle ) * this.speed + this.gravity;
        this.alpha -= this.decay;
        if( this.alpha <= this.decay ) { particles.splice( index, 1 ); }
    }

    Particle.prototype.draw = function() {
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], 
            this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
            context.lineTo( this.x, this.y );
            context.strokeStyle = 'hsla(' + this.hue + ', 100%, ' 
            + this.brightness + '%, ' + this.alpha + ')';
        context.stroke();
    }

    function createParticles( x, y ) {
        var particleCount = 50;
        while( particleCount-- ) { 
            particles.push( 
                new Particle( x, y ) 
            ); 
        }
    }

    newVideo.play();
    newVideo.onplaying = () => { animate(); };
    
    function animate() {
        let origin = Date.now();
        let theQueue = new ArrowQueue();
        document.addEventListener("keydown", registerPress);
        let numColumns = 5;
        let numRows = 20;
        let frameWidth = stageArrow.width / numColumns;;
        let frameHeight = stageArrow.height / numRows;;
        let currentFrame = 0;
        let maxFrame = numColumns * numRows - 1;
        let column = currentFrame % numColumns;
        let row = Math.floor(currentFrame / numColumns);
        let comboCount = 0;

        function registerPress(evt) {
            evt.preventDefault();
            let timingGrade = theQueue.judge(evt.key);
            if (timingGrade > 0) {
                verdict.className = "";
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
                }
            }
        }

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

        let stageLoop = setInterval(function() {
            if (currentFrame > maxFrame) { currentFrame = 0; }
            column = currentFrame % numColumns;
            row = Math.floor(currentFrame / numColumns);
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawGameObject(stageArrow, "ArrowLeft");
            drawGameObject(stageArrow, "ArrowDown");
            drawGameObject(stageArrow, "ArrowUp");
            drawGameObject(stageArrow, "ArrowRight");
            let i = particles.length;
            while( i-- ) { particles[i].draw(); particles[i].update( i ); }
            theQueue.move();
            if (stageQueue[0]) {
                while (Date.now() - origin >= stageQueue[0][0]) {
                    theQueue.spawn(stageQueue[0][1], speed);
                    stageQueue.shift();
                    if (!stageQueue[0]) {break;}
                }
            }
            if (theQueue.arrows[0]) {
                theQueue.arrows.forEach( arr => {
                    switch(arr.direction) {
                        case "Ready":
                            drawGameObject("Ready"); break;
                        case "Go":
                            drawGameObject("Go"); break;
                        case "Clear":
                            drawGameObject("Clear"); break;
                        default:
                            drawGameObject(queueArrow, arr.direction, arr.pos);
                    }
                })
            }
            currentFrame++;
        }, speed);

        newVideo.onended = () => { 
            clearInterval(stageLoop);
            
        }

        function backToMenu(){
            context.clearRect(0, 0, canvas.width, canvas.height);
            
        }
    }
}