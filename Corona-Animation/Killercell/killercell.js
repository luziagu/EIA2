"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class KillerCell {
        constructor(_position) {
            this.position = _position;
            this.radius = 20;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw() {
            console.log("KillerCells");
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(this.position.x, this.position.y);
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.moveTo(0, 0);
            coronaVirusAnimation.crc2.arc(0, 0, this.radius, 0, Math.PI * 1.6);
            coronaVirusAnimation.crc2.lineTo(0, 0);
            coronaVirusAnimation.crc2.closePath();
            coronaVirusAnimation.crc2.fillStyle = "#FFDAB9";
            coronaVirusAnimation.crc2.lineWidth = 2;
            coronaVirusAnimation.crc2.strokeStyle = "#FFDAB9";
            coronaVirusAnimation.crc2.stroke();
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.restore();
        }
        move(_timeslice) {
            let offset = new coronaVirusAnimation.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (coronaVirusAnimation.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += coronaVirusAnimation.crc2.canvas.height;
            if (this.position.x > (coronaVirusAnimation.crc2.canvas.width))
                this.position.x -= (coronaVirusAnimation.crc2.canvas.width);
            if (this.position.y > coronaVirusAnimation.crc2.canvas.height)
                this.position.y -= coronaVirusAnimation.crc2.canvas.height;
        }
    }
    coronaVirusAnimation.KillerCell = KillerCell;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=killercell.js.map