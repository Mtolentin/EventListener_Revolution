function ArrowQueue(context) {
    this.arrows = [];
}

ArrowQueue.prototype.spawn = function spawn(direction, bpm) {
    let arrow = {
        direction: direction,
        pos: 600,
        spd: bpm / 3.4,
        canClick: true
    }
    this.arrows.push(arrow);

}

ArrowQueue.prototype.move = function move(context) {
    if (this.arrows[0]) {
        this.arrows.forEach( arrow => {
            arrow.pos -= arrow.spd;
            if (arrow.pos <= -100) {
                this.arrows.splice(this.arrows.indexOf(arrow),1);
                //draw 'missed' using context
            }
        });
    }
}

ArrowQueue.prototype.judge = function judge(key) {
    let arrowScan = 0
    while (arrowScan < 4) {
        if (this.arrows[arrowScan] && this.arrows[arrowScan].direction === key 
            && this.arrows[arrowScan].canClick === true) {

            let timeDifference = Math.abs(this.arrows[0].pos - 10);
            console.log(timeDifference);
            if (timeDifference < 44) {
                this.arrows.splice(this.arrows[arrowScan],1); 
                return 4;
            }
            if (timeDifference < 104) {
                this.arrows.splice(this.arrows[arrowScan],1); 
                return 3;
            }
            if (timeDifference < 138) { 
                this.arrows[arrowScan].canClick = false;
                return 2; 
            }
            if (timeDifference < 184) {
                this.arrows[arrowScan].canClick = false;
                return 1;
            }
        }
        arrowScan++;
    }
    return 0;
}

module.exports = ArrowQueue;