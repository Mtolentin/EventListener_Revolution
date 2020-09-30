function ArrowQueue(context) {
    this.arrows = [];
}

ArrowQueue.prototype.spawn = function spawn(direction, bpm) {
    let arrow = {
        direction: direction,
        pos: 600,
        spd: bpm / 3.4,
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
    if (this.arrows[0] && this.arrows[0] === key) {
        let timeDifference = Math.abs(this.arrows[0].pos - 10);
        switch (true) {
            case (timeDifference < 44): return 4; // Perfect
            case (timeDifference < 104): return 3; // Great
            case (timeDifference < 138): return 2; // Good
            case (timeDifference < 184): return 1; // Boo
            default: return 0;
        }
    }
}

module.exports = ArrowQueue;