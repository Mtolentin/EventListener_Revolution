function ArrowQueue() {
    this.arrows = [];
    this.scribe = [];
    this.delays = [];
}

ArrowQueue.prototype.spawn = function spawn(direction, bpm, hitTime) {
    let arrow = {
        direction: direction,
        pos: 10,
        spd: bpm / 3.4,
        hitTime: hitTime
    }
    this.arrows.push(arrow);
    console.log(arrow.hitTime);

}

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

module.exports = ArrowQueue;