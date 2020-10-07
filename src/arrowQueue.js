function ArrowQueue() { this.arrows = []; }

ArrowQueue.prototype.spawn = function spawn(direction, bpm) {
    let arrow = {
        direction: direction,
        pos: 600,
        spd: bpm / 3.4,
        canClick: true
    }
    this.arrows.push(arrow);
}

ArrowQueue.prototype.move = function move() {
    if (this.arrows[0]) {
        this.arrows.forEach( arrow => {
            arrow.pos -= arrow.spd;
            if (arrow.pos <= -100) {
                this.arrows.splice(this.arrows.indexOf(arrow),1);
                if (arrow.canClick) {
                    let verdict = document.getElementById("verdict");
                    verdict.className = "";
                    void verdict.offsetWidth;
                    verdict.classList.add("missed");
                }
            }
        });
    }
}

ArrowQueue.prototype.judge = function judge(key) {
    let scan = 0;
    while (scan < 4) {
        if (this.arrows[scan] && this.arrows[scan].canClick === true
            && this.arrows[scan].direction === key) {
                let hitArrow = this.arrows[scan];
                let timing = Math.abs(this.arrows[scan].pos - 10);
                if (timing < 20) {
                    this.arrows.splice(this.arrows.indexOf(hitArrow), 1);
                    return 4;
                }
                if (timing < 40) {
                    this.arrows.splice(this.arrows.indexOf(hitArrow), 1);
                    return 3;
                }
                if (timing < 64) {
                    this.arrows[this.arrows.indexOf(hitArrow)].canClick = false;
                    return 2;
                }
                if (timing < 134) {
                    this.arrows[this.arrows.indexOf(hitArrow)].canClick = false;
                    return 1;
                }
            }
            scan++;
        }
        return 0;
    }
    
module.exports = ArrowQueue;