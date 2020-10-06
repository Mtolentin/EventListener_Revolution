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
                let verdict = document.getElementById("verdict");
                let comboScore = document.getElementById("comboScore");
                this.arrows.splice(this.arrows.indexOf(arrow),1);
                verdict.className = "";
                verdict.classList.add("missed");
                comboScore.className = "";
                comboScore.classList.add("empty");
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
                if (timing < 34) {
                    this.arrows.splice(this.arrows.indexOf(hitArrow), 1);
                    return 4;
                }
                if (timing < 94) {
                    this.arrows.splice(this.arrows.indexOf(hitArrow), 1);
                    return 3;
                }
                if (timing < 128) {
                    this.arrows[this.arrows.indexOf(hitArrow)].canClick = false;
                    return 2;
                }
                if (timing < 174) {
                    this.arrows[this.arrows.indexOf(hitArrow)].canClick = false;
                    return 1;
                }
            }
            scan++;
        }
        return 0;
    }
    
module.exports = ArrowQueue;