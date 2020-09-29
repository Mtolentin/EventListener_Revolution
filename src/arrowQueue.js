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
        let continueCombo = false;
        switch (true) {
            case (timeDifference < 44):
                // Perfect
                this.comboCount += 1;
                continueCombo = true;
                break;
            case (timeDifference < 104):
                // Great
                this.comboCount += 1;
                continueCombo = true;
                break;
            case (timeDifference < 138):
                // Good
                break;
            case (timeDifference < 184):
                // Boo
                break;
            default:
                continueCombo = true;
                break;
        }

        if (continueCombo) {
            if (this.comboCount > 3) {

            } else {

            }
            
        } else {
            this.comboCount = 0;
        }
    }
}

module.exports = ArrowQueue;